extends CharacterBody3D

@export var max_hp: int = 100
var current_hp: int = 100
var level: int = 1
var xp: int = 0
var xp_to_next_level: int = 10
var base_damage: int = 10

var speed: float = 6.0
var jump_velocity: float = 5.0
var gravity: float = 12.0

@onready var camera = $Camera3D
@onready var attack_ray = $Camera3D/AttackRay
@onready var ui = $UI

const PROJECTILE_SCENE = preload("res://scenes/projectiles/Projectile.tscn")

func _ready():
	add_to_group("player")
	_setup_inputs()
	attack_ray.add_exception(self)
	current_hp = max_hp
	ui.update_ui(current_hp, level, xp)
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _setup_inputs():
	var inputs = {
		"move_forward": KEY_W,
		"move_backward": KEY_S,
		"move_left": KEY_A,
		"move_right": KEY_D,
		"jump": KEY_SPACE,
		"fire_projectile": KEY_Q
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
	if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
		rotate_y(-event.relative.x * 0.005)
		camera.rotate_x(-event.relative.y * 0.005)
		camera.rotation.x = clamp(camera.rotation.x, -PI/2, PI/2)
	elif event is InputEventKey and event.pressed and event.keycode == KEY_ESCAPE:
		Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
	elif event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
		if Input.mouse_mode != Input.MOUSE_MODE_CAPTURED:
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _physics_process(delta):
	if not is_on_floor():
		velocity.y -= gravity * delta

	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = jump_velocity

	var input_dir = Input.get_vector("move_left", "move_right", "move_forward", "move_backward")
	var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	if direction:
		velocity.x = direction.x * speed
		velocity.z = direction.z * speed
	else:
		velocity.x = move_toward(velocity.x, 0, speed)
		velocity.z = move_toward(velocity.z, 0, speed)

	move_and_slide()

	if Input.is_action_just_pressed("attack"):
		_perform_melee_attack()
		
	if Input.is_action_just_pressed("fire_projectile"):
		_fire_projectile()

func _perform_melee_attack():
	if attack_ray.is_colliding():
		var target = attack_ray.get_collider()
		if target and target.has_method("take_damage"):
			target.take_damage(base_damage)

func _fire_projectile():
	var proj = PROJECTILE_SCENE.instantiate()
	get_tree().current_scene.add_child(proj)
	proj.global_transform = camera.global_transform
	# Offset it a bit forward so it doesn't spawn exactly inside the camera
	proj.global_position += -proj.global_transform.basis.z * 0.5
	proj.damage = int(base_damage * 1.5)

func add_xp(amount: int):
	xp += amount
	if xp >= xp_to_next_level:
		_level_up()
	ui.update_ui(current_hp, level, xp)

func _level_up():
	xp -= xp_to_next_level
	level += 1
	xp_to_next_level = int(xp_to_next_level * 1.5)
	base_damage += 5
	max_hp += 20
	current_hp = max_hp
	print("Leveled up to ", level, "! Base damage is now ", base_damage)
