extends CharacterBody3D

@export var max_hp: int = 100
var current_hp: int = 100
var level: int = 1
var xp: int = 0
var xp_to_next_level: int = 10
var base_damage: int = 10
var attack_cooldown: float = 0.5
var can_attack: bool = true
var projectile_cooldown: float = 1.0
var can_fire_projectile: bool = true
var speed: float = 6.0
var acceleration: float = 10.0
var deceleration: float = 12.0
var jump_velocity: float = 5.0
var gravity: float = 12.0
var max_fall_speed: float = -40.0
var mouse_sensitivity: float = 0.005
var is_dead: bool = false

@onready var camera = $Camera3D
@onready var attack_ray = $Camera3D/AttackRay
@onready var ui = $UI
@onready var light_power = $LightPower
@onready var lumen_light = $LumenLight

const PROJECTILE_SCENE = preload("res://scenes/projectiles/Projectile.tscn")

func _ready():
	add_to_group("player")
	_setup_inputs()
	attack_ray.add_exception(self)
	current_hp = max_hp
	ui.update_ui(current_hp, level, xp, xp_to_next_level)
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _setup_inputs():
	var inputs = {
		"move_forward": KEY_W,
		"move_backward": KEY_S,
		"move_left": KEY_A,
		"move_right": KEY_D,
		"jump": KEY_SPACE,
		"fire_projectile": KEY_Q,
		"interact": KEY_E
	}
	for action in inputs:
		if not InputMap.has_action(action):
			InputMap.add_action(action)
			var ev = InputEventKey.new()
			ev.physical_keycode = inputs[action]
			InputMap.action_add_event(action, ev)
	
	if not InputMap.has_action("attack"):
		InputMap.add_action("attack")
		var ev = InputEventMouseButton.new()
		ev.button_index = MOUSE_BUTTON_LEFT
		InputMap.action_add_event("attack", ev)

func _unhandled_input(event):
	if is_dead:
		if event is InputEventKey and event.pressed and event.keycode == KEY_R:
			get_tree().reload_current_scene()
		return

	if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
		rotate_y(-event.relative.x * mouse_sensitivity)
		camera.rotate_x(-event.relative.y * mouse_sensitivity)
		camera.rotation.x = clamp(camera.rotation.x, -PI/2, PI/2)
	elif event is InputEventKey and event.pressed and event.keycode == KEY_ESCAPE:
		Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
	elif event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
		if Input.mouse_mode != Input.MOUSE_MODE_CAPTURED:
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _physics_process(delta):
	_sync_light_visuals()

	if is_dead:
		velocity.x = move_toward(velocity.x, 0, deceleration * delta)
		velocity.z = move_toward(velocity.z, 0, deceleration * delta)
		if not is_on_floor():
			velocity.y -= gravity * delta
		move_and_slide()
		return

	if not is_on_floor():
		velocity.y -= gravity * delta
		if velocity.y < max_fall_speed:
			velocity.y = max_fall_speed

	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = jump_velocity

	var input_dir = Input.get_vector("move_left", "move_right", "move_forward", "move_backward")
	var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	if direction:
		velocity.x = lerp(velocity.x, direction.x * speed, acceleration * delta)
		velocity.z = lerp(velocity.z, direction.z * speed, acceleration * delta)
	else:
		velocity.x = lerp(velocity.x, 0.0, deceleration * delta)
		velocity.z = lerp(velocity.z, 0.0, deceleration * delta)

	move_and_slide()

	if Input.is_action_just_pressed("attack"):
		_perform_melee_attack()
		
	if Input.is_action_just_pressed("fire_projectile"):
		_fire_projectile()
		
	if Input.is_action_just_pressed("interact"):
		_interact()

func _interact():
	var interactables = get_tree().get_nodes_in_group("interactable")
	for obj in interactables:
		if "interaction_range" in obj and obj.global_position.distance_to(global_position) <= obj.interaction_range:
			if obj.has_method("on_interact"):
				obj.on_interact(self)

func _perform_melee_attack():
	if not can_attack:
		return
	can_attack = false
	if attack_ray.is_colliding():
		var target = attack_ray.get_collider()
		if target and target.has_method("take_damage"):
			target.take_damage(base_damage)
	
	get_tree().create_timer(attack_cooldown).timeout.connect(func(): can_attack = true)

func _fire_projectile():
	if not can_fire_projectile:
		return
	can_fire_projectile = false
	var proj = PROJECTILE_SCENE.instantiate()
	get_tree().current_scene.add_child(proj)
	proj.global_transform = camera.global_transform
	# Offset it a bit forward so it doesn't spawn exactly inside the camera
	proj.global_position += -proj.global_transform.basis.z * 0.5
	proj.damage = int(base_damage * 1.5 * light_power.get_damage_multiplier())
	if "speed" in proj:
		proj.speed = proj.speed * light_power.get_speed_multiplier()
	proj.scale = Vector3.ONE * light_power.get_size_multiplier()
	
	if proj.has_node("MeshInstance3D"):
		var mat = StandardMaterial3D.new()
		mat.albedo_color = light_power.get_light_color_value()
		mat.emission_enabled = true
		mat.emission = light_power.get_light_color_value()
		proj.get_node("MeshInstance3D").material_override = mat
	
	get_tree().create_timer(projectile_cooldown).timeout.connect(func(): can_fire_projectile = true)

func _sync_light_visuals():
	if lumen_light and light_power:
		lumen_light.light_energy = light_power.get_light_energy()
		lumen_light.light_color = light_power.get_light_color_value()

func add_xp(amount: int):
	xp += amount
	while xp >= xp_to_next_level:
		_level_up()
	ui.update_ui(current_hp, level, xp, xp_to_next_level)

func _level_up():
	xp -= xp_to_next_level
	level += 1
	xp_to_next_level = int(xp_to_next_level * 1.5)
	base_damage += 5
	max_hp += 20
	current_hp = max_hp
	if ui.has_method("show_level_up"):
		ui.show_level_up()
	print("Leveled up to ", level, "! Base damage is now ", base_damage)

func take_damage(amount: int):
	if is_dead:
		return
	current_hp -= amount
	ui.update_ui(current_hp, level, xp, xp_to_next_level)
	print("Player took ", amount, " damage. HP: ", current_hp)
	if current_hp <= 0:
		die()

func die():
	is_dead = true
	print("Player died!")
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
	if ui.has_method("show_death_screen"):
		ui.show_death_screen()

