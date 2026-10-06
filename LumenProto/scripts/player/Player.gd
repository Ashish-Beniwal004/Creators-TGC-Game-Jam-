extends CharacterBody2D

var max_hp: int = 100
var current_hp: int = 100

var speed: float = 300.0
var jump_velocity: float = -450.0
var gravity: float = 1200.0

var acceleration: float = 2000.0
var friction: float = 2500.0
var fall_gravity_multiplier: float = 1.5

var coyote_time: float = 0.1
var jump_buffer_time: float = 0.1
var coyote_timer: float = 0.0
var jump_buffer_timer: float = 0.0

var level: int = 1
var xp: int = 0
var xp_to_next_level: int = 10

var is_dead: bool = false
var is_frozen: bool = false
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
	_setup_sprite_frames()
	_setup_inputs()
	
	level = GameState.player_level
	xp = GameState.player_xp
	xp_to_next_level = GameState.player_xp_to_next
	
	if GameState.checkpoint_position != Vector2.ZERO:
		global_position = GameState.checkpoint_position
		
	current_hp = max_hp
	ui.update_ui(current_hp, level, xp, xp_to_next_level)
	original_speed = speed

func set_checkpoint(pos: Vector2):
	GameState.checkpoint_position = pos
	GameState.save_player_state(level, xp, xp_to_next_level)

func _setup_sprite_frames():
	var tex = load("res://assets/genrated assests/Gemini_Generated_Image_1en0xl1en0xl1en0_transparent.png")
	if not tex:
		return
		
	var frames = SpriteFrames.new()
	var raw_rects = [
		Rect2(91, 62, 207, 243), Rect2(331, 62, 205, 243), Rect2(560, 62, 186, 243),
		Rect2(773, 62, 181, 243), Rect2(993, 62, 192, 243), Rect2(1217, 63, 209, 242),
		Rect2(1834, 166, 168, 196), Rect2(2057, 103, 180, 266), Rect2(2292, 74, 189, 242),
		Rect2(91, 366, 198, 236), Rect2(309, 371, 189, 232), Rect2(549, 366, 198, 231),
		Rect2(762, 367, 191, 228), Rect2(996, 371, 209, 228), Rect2(1241, 372, 228, 228),
		Rect2(1514, 378, 190, 248), Rect2(2023, 423, 196, 168), Rect2(2252, 446, 192, 180),
		Rect2(91, 693, 193, 231), Rect2(320, 701, 186, 224), Rect2(561, 698, 169, 226),
		Rect2(808, 716, 226, 208), Rect2(1077, 656, 314, 270), Rect2(1427, 656, 313, 274),
		Rect2(1765, 710, 181, 214), Rect2(1994, 716, 181, 208), Rect2(2201, 710, 201, 214),
		Rect2(91, 974, 194, 225), Rect2(326, 979, 174, 220), Rect2(573, 974, 201, 225),
		Rect2(928, 1013, 214, 186), Rect2(1192, 1073, 231, 126), Rect2(1483, 1089, 249, 110),
		Rect2(1800, 1106, 248, 93), Rect2(2109, 1123, 254, 76), Rect2(2414, 1128, 247, 71),
		Rect2(91, 1231, 202, 260), Rect2(360, 1231, 237, 260), Rect2(618, 1232, 229, 259)
	]
	
	var anims = {
		"idle": [0, 5, 8.0, true],
		"jump": [6, 6, 5.0, false],
		"fall": [7, 8, 5.0, true],
		"run": [9, 15, 12.0, true],
		"attack": [18, 23, 20.0, false],
		"hurt": [24, 26, 8.0, false],
		"death": [27, 35, 8.0, false]
	}
	
	for anim_name in anims.keys():
		frames.add_animation(anim_name)
		frames.set_animation_speed(anim_name, anims[anim_name][2])
		frames.set_animation_loop(anim_name, anims[anim_name][3])
		var start_idx = anims[anim_name][0]
		var end_idx = anims[anim_name][1]
		for i in range(start_idx, end_idx + 1):
			var atlas = AtlasTexture.new()
			atlas.atlas = tex
			atlas.region = raw_rects[i]
			frames.add_frame(anim_name, atlas)
			
	anim.sprite_frames = frames
	anim.play("idle")
	anim.scale = Vector2(0.22, 0.22)
	anim.position.y = -10


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
	if is_dead or is_frozen:
		return
		
	if is_on_floor():
		coyote_timer = coyote_time
	else:
		coyote_timer -= delta
		
	if Input.is_action_just_pressed("jump"):
		jump_buffer_timer = jump_buffer_time
	else:
		jump_buffer_timer -= delta

	if not is_on_floor():
		if velocity.y > 0:
			velocity.y += gravity * fall_gravity_multiplier * delta
		else:
			velocity.y += gravity * delta
			
		if Input.is_action_just_released("jump") and velocity.y < 0:
			velocity.y *= 0.5

	if jump_buffer_timer > 0.0 and coyote_timer > 0.0:
		velocity.y = jump_velocity
		AudioManager.play_sfx("jump")
		jump_buffer_timer = 0.0
		coyote_timer = 0.0

	var direction = Input.get_axis("move_left", "move_right")
	if direction:
		velocity.x = move_toward(velocity.x, direction * speed, acceleration * delta)
		if direction > 0:
			facing_right = true
			visual.scale.x = 1
			melee_area.position.x = abs(melee_area.position.x)
		elif direction < 0:
			facing_right = false
			visual.scale.x = -1
			melee_area.position.x = -abs(melee_area.position.x)
	else:
		velocity.x = move_toward(velocity.x, 0, friction * delta)

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

var shake_intensity = 0.0
var shake_decay = 5.0

func _process(delta):
	_sync_light_visuals()
	if shake_intensity > 0:
		shake_intensity = lerp(shake_intensity, 0.0, shake_decay * delta)
		if has_node("Camera2D"):
			$Camera2D.offset = Vector2(randf_range(-1, 1), randf_range(-1, 1)) * shake_intensity
	else:
		if has_node("Camera2D"):
			$Camera2D.offset = Vector2.ZERO

func _apply_shake(intensity: float):
	shake_intensity = intensity

func _hit_stop(duration: float = 0.05):
	Engine.time_scale = 0.1
	await get_tree().create_timer(duration * 0.1, true, false, true).timeout
	Engine.time_scale = 1.0

func _flash_sprite(spr):
	var orig_color = spr.modulate
	spr.modulate = Color(10, 10, 10, 1)
	var tween = get_tree().create_tween()
	tween.tween_property(spr, "modulate", orig_color, 0.1)

func _sync_light_visuals():
	if not is_instance_valid(light_power):
		return
		
	var point_light = get_node_or_null("PointLight2D")
	if point_light:
		var color = light_power.get_light_color_value()
		point_light.color = color
		point_light.energy = 0.8 + (light_power.current_level * 0.3)
		point_light.texture_scale = 1.5 + (light_power.current_level * 0.5)
		if is_instance_valid(core_glow):
			core_glow.color = color
		if is_instance_valid(hand_glow):
			hand_glow.color = color

func _input(event):
	if is_dead:
		if event.is_action_pressed("restart"):
			GameState.save_player_state(level, xp, xp_to_next_level)
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
	var hit_something = false
	
	AudioManager.play_sfx("player_attack")
	
	for body in melee_area.get_overlapping_bodies():
		if body.is_in_group("enemy") or body.is_in_group("boss"):
			if body.has_method("take_damage"):
				body.take_damage(damage)
				hit_something = true
				if body.has_node("Sprite2D"):
					_flash_sprite(body.get_node("Sprite2D"))
					
	if hit_something:
		_apply_shake(8.0)
		_hit_stop(0.04)
				
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
			
		if proj.has_node("TrailParticles"):
			proj.get_node("TrailParticles").color = light_power.get_light_color_value()
			
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
	
	AudioManager.play_sfx("player_hurt")
	_apply_shake(15.0)
	_hit_stop(0.08)
	
	var orig = visual.modulate
	visual.modulate = Color(10, 0, 0, 1)
	var tween = get_tree().create_tween()
	tween.tween_property(visual, "modulate", orig, 0.2)
	
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
	AudioManager.play_sfx("player_death")
	anim.play("death")
	ui.show_death_screen()

func acquire_core_presentation(core_color: String):
	is_frozen = true
	velocity = Vector2.ZERO
	AudioManager.play_sfx("core_acquired")
	
	if core_color == "Blue":
		ui.show_dialogue("LUMEN\nBlue...\nThe first color returns.", 4.0)
		if has_node("Visual/CoreGlow"):
			$Visual/CoreGlow.color = Color(0.2, 0.5, 1.0, 1.0)
	elif core_color == "Green":
		ui.show_dialogue("LUMEN\nLife remembers.", 4.0)
		if has_node("Visual/CoreGlow"):
			$Visual/CoreGlow.color = Color(0.2, 1.0, 0.4, 1.0)
			
	var tween = get_tree().create_tween()
	if has_node("Visual/CoreGlow"):
		tween.tween_property($Visual/CoreGlow, "scale", Vector2(3.0, 3.0), 0.5)
		tween.tween_property($Visual/CoreGlow, "scale", Vector2(1.0, 1.0), 0.5)
	
	_apply_shake(20.0)
	
	get_tree().create_timer(1.5).timeout.connect(func():
		is_frozen = false
	)
