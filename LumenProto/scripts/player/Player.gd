extends CharacterBody2D

var max_hp: int = 100
var current_hp: int = 100

var speed: float = 300.0
var jump_velocity: float = -450.0
var gravity: float = 1200.0

var level: int = 1
var xp: int = 0
var xp_to_next_level: int = 10

var is_dead: bool = false
var is_slowed: bool = false
var original_speed: float = 300.0

var can_attack: bool = true
var attack_cooldown: float = 0.5
var can_fire_projectile: bool = true
var projectile_cooldown: float = 1.0

var facing_right: bool = true

@onready var ui = $UI
@onready var light_power = $LightPower
@onready var visual = $Visual
@onready var anim = $Visual/AnimatedSprite2D
@onready var core_glow = $Visual/CoreGlow
@onready var hand_glow = $Visual/HandGlow
@onready var melee_area = $MeleeArea

func _ready():
	add_to_group("player")
	_setup_inputs()
	current_hp = max_hp
	ui.update_ui(current_hp, level, xp, xp_to_next_level)
	original_speed = speed

func _setup_inputs():
	var inputs = {
		"move_left": [KEY_A, KEY_LEFT],
		"move_right": [KEY_D, KEY_RIGHT],
		"jump": [KEY_SPACE, KEY_W, KEY_UP],
		"attack_light": [MOUSE_BUTTON_LEFT],
		"fire_projectile": [KEY_Q, MOUSE_BUTTON_RIGHT],
		"interact": [KEY_E],
		"restart": [KEY_R]
	}
	
	for action in inputs:
		if not InputMap.has_action(action):
			InputMap.add_action(action)
		for key in inputs[action]:
			var event = null
			if key in [MOUSE_BUTTON_LEFT, MOUSE_BUTTON_RIGHT]:
				event = InputEventMouseButton.new()
				event.button_index = key
			else:
				event = InputEventKey.new()
				event.keycode = key
			InputMap.action_add_event(action, event)

func _physics_process(delta):
	if is_dead:
		return
		
	if not is_on_floor():
		velocity.y += gravity * delta

	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = jump_velocity

	var direction = Input.get_axis("move_left", "move_right")
	if direction:
		velocity.x = direction * speed
		if direction > 0:
			facing_right = true
			visual.scale.x = 1
			melee_area.position.x = abs(melee_area.position.x)
		elif direction < 0:
			facing_right = false
			visual.scale.x = -1
			melee_area.position.x = -abs(melee_area.position.x)
	else:
		velocity.x = move_toward(velocity.x, 0, speed)

	if is_on_floor():
		if direction == 0:
			if can_attack: anim.play("idle")
		else:
			if can_attack: anim.play("run")
	else:
		if velocity.y < 0:
			if can_attack: anim.play("jump")
		else:
			if can_attack: anim.play("fall")

	move_and_slide()

func _process(delta):
	_sync_light_visuals()

func _sync_light_visuals():
	if has_node("PointLight2D") and light_power:
		var point_light = $PointLight2D
		var color = light_power.get_light_color_value()
		point_light.color = color
		point_light.energy = 0.8 + (light_power.current_level * 0.3)
		point_light.texture_scale = 1.5 + (light_power.current_level * 0.5)
		if core_glow:
			core_glow.color = color
		if hand_glow:
			hand_glow.color = color

func _input(event):
	if is_dead:
		if event.is_action_pressed("restart"):
			get_tree().reload_current_scene()
		return
		
	if event.is_action_pressed("attack_light"):
		_perform_light_attack()
	elif event.is_action_pressed("fire_projectile"):
		_fire_projectile()
	elif event.is_action_pressed("interact"):
		_interact()

func _perform_light_attack():
	if not can_attack:
		return
	can_attack = false
	anim.play("attack")
	
	var base_damage = 10
	var damage = int(base_damage * light_power.get_damage_multiplier())
	
	for body in melee_area.get_overlapping_bodies():
		if body.is_in_group("enemy") or body.is_in_group("boss"):
			if body.has_method("take_damage"):
				body.take_damage(damage)
				
	get_tree().create_timer(attack_cooldown).timeout.connect(func(): can_attack = true)

func _fire_projectile():
	if not can_fire_projectile:
		return
	can_fire_projectile = false
	
	var proj_scene = load("res://scenes/projectiles/Projectile.tscn")
	if proj_scene:
		var proj = proj_scene.instantiate()
		get_tree().current_scene.add_child(proj)
		proj.global_position = global_position
		proj.direction = Vector2(1, 0) if facing_right else Vector2(-1, 0)
		
		var base_damage = 5
		proj.damage = int(base_damage * 1.5 * light_power.get_damage_multiplier())
		if "speed" in proj:
			proj.speed = proj.speed * light_power.get_speed_multiplier()
		proj.scale = Vector2.ONE * light_power.get_size_multiplier()
		
		if proj.has_node("Sprite2D"):
			proj.get_node("Sprite2D").modulate = light_power.get_light_color_value()
			
		if proj.has_node("PointLight2D"):
			proj.get_node("PointLight2D").color = light_power.get_light_color_value()
		
	get_tree().create_timer(projectile_cooldown).timeout.connect(func(): can_fire_projectile = true)

func _interact():
	var interactables = get_tree().get_nodes_in_group("interactable")
	for obj in interactables:
		if global_position.distance_to(obj.global_position) < 100.0:
			if obj.has_method("on_interact"):
				obj.on_interact(self)

func add_xp(amount: int):
	xp += amount
	
	while xp >= xp_to_next_level:
		xp -= xp_to_next_level
		level += 1
		xp_to_next_level = int(xp_to_next_level * 1.5)
		if ui.has_method("show_level_up"):
			ui.show_level_up()
			
	ui.update_ui(current_hp, level, xp, xp_to_next_level)

func take_damage(amount: int):
	if is_dead:
		return
	current_hp -= amount
	ui.update_ui(current_hp, level, xp, xp_to_next_level)
	if current_hp <= 0:
		die()
	else:
		anim.play("hurt")
		can_attack = false
		get_tree().create_timer(0.3).timeout.connect(func(): can_attack = true)

func apply_slow(duration: float, speed_multiplier: float = 0.5):
	if is_slowed or is_dead:
		return
	is_slowed = true
	speed = original_speed * speed_multiplier
	get_tree().create_timer(duration).timeout.connect(func():
		speed = original_speed
		is_slowed = false
	)

func die():
	is_dead = true
	anim.play("death")
	ui.show_death_screen()
