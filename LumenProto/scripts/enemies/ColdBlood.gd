extends CharacterBody3D

enum State { IDLE, CHASE, MELEE, BREATH, PROJECTILE, DEATH }
var current_state: State = State.IDLE

@export var max_hp: int = 300
@export var movement_speed: float = 3.5
@export var attack_damage: int = 30
@export var melee_range: float = 3.0
@export var attack_cooldown: float = 2.5
@export var detection_range: float = 40.0
@export var xp_reward: int = 150
@export var phase_2_threshold: float = 0.5

var current_hp: int = 300
var gravity: float = 12.0
var can_attack: bool = true
var is_active: bool = false
var is_phase_2: bool = false
var action_timer: float = 0.0

var player: Node3D = null

func _ready():
	current_hp = max_hp
	add_to_group("boss")

func activate():
	if is_active:
		return
	is_active = true
	var ui = get_tree().get_first_node_in_group("ui")
	if ui and ui.has_method("show_boss_health"):
		ui.show_boss_health("COLD BLOOD", current_hp, max_hp)

func _physics_process(delta):
	if current_state == State.DEATH or not is_active:
		return
		
	if not player:
		var players = get_tree().get_nodes_in_group("player")
		if players.size() > 0:
			player = players[0]
			
	if not is_on_floor():
		velocity.y -= gravity * delta
		
	_handle_states(delta)
	move_and_slide()

func _handle_states(delta):
	if not player or player.get("is_dead"):
		current_state = State.IDLE
		velocity.x = move_toward(velocity.x, 0, movement_speed)
		velocity.z = move_toward(velocity.z, 0, movement_speed)
		return
		
	var dist = global_position.distance_to(player.global_position)
	
	if action_timer > 0:
		action_timer -= delta
		velocity.x = move_toward(velocity.x, 0, movement_speed)
		velocity.z = move_toward(velocity.z, 0, movement_speed)
		return
	
	if current_state in [State.MELEE, State.BREATH, State.PROJECTILE]:
		current_state = State.CHASE 
		
	if dist <= detection_range and can_attack:
		_choose_attack(dist)
	elif dist <= detection_range:
		current_state = State.CHASE
	else:
		current_state = State.IDLE
		
	match current_state:
		State.IDLE:
			velocity.x = move_toward(velocity.x, 0, movement_speed)
			velocity.z = move_toward(velocity.z, 0, movement_speed)
		State.CHASE:
			_chase_player()

func _choose_attack(dist: float):
	can_attack = false
	var rand = randf()
	if dist <= melee_range:
		current_state = State.MELEE
		_perform_melee()
	elif rand < 0.5:
		current_state = State.BREATH
		_perform_breath()
	else:
		current_state = State.PROJECTILE
		_perform_projectile()
		
	var cooldown = attack_cooldown
	if is_phase_2:
		cooldown *= 0.7
	get_tree().create_timer(cooldown).timeout.connect(func(): can_attack = true)

func _chase_player():
	var speed = movement_speed
	if is_phase_2: speed *= 1.3
	var direction = global_position.direction_to(player.global_position)
	direction.y = 0
	if direction.length_squared() > 0.001:
		direction = direction.normalized()
		velocity.x = direction.x * speed
		velocity.z = direction.z * speed
		look_at(global_position + direction, Vector3.UP)

func _perform_melee():
	action_timer = 0.5
	if player.has_method("take_damage"):
		player.take_damage(attack_damage)

func _perform_breath():
	action_timer = 1.2
	print("Cold Blood prepares Ice Breath!")
	get_tree().create_timer(0.6).timeout.connect(func():
		if current_state != State.DEATH and player and global_position.distance_to(player.global_position) < melee_range * 2.0:
			var dir_to_player = global_position.direction_to(player.global_position).normalized()
			var facing = -global_transform.basis.z.normalized()
			if dir_to_player.dot(facing) > 0.5: 
				if player.has_method("take_damage"):
					player.take_damage(attack_damage)
				if player.has_method("apply_slow"):
					player.apply_slow(2.0, 0.3)
	)

func _perform_projectile():
	action_timer = 0.8
	print("Cold Blood fires Ice Projectile!")
	get_tree().create_timer(0.3).timeout.connect(func():
		if current_state != State.DEATH and player:
			var proj_scene = load("res://scenes/enemies/IceProjectile.tscn")
			if proj_scene:
				var proj = proj_scene.instantiate()
				get_tree().current_scene.add_child(proj)
				proj.global_position = global_position + Vector3(0, 1.5, 0)
				proj.direction = proj.global_position.direction_to(player.global_position + Vector3(0, 1, 0)).normalized()
				proj.damage = int(attack_damage * 0.8)
	)

func take_damage(amount: int):
	if current_state == State.DEATH:
		return
		
	if not is_active:
		activate()
		
	current_hp -= amount
	var ui = get_tree().get_first_node_in_group("ui")
	if ui and ui.has_method("update_boss_health"):
		ui.update_boss_health(current_hp)
	
	if current_hp <= max_hp * phase_2_threshold and not is_phase_2:
		is_phase_2 = true
		print("Cold Blood enters Phase 2! Attacks are faster!")
	
	if current_hp <= 0:
		die()

func die():
	current_state = State.DEATH
	if player and player.has_method("add_xp"):
		player.add_xp(xp_reward)
	var ui = get_tree().get_first_node_in_group("ui")
	if ui and ui.has_method("hide_boss_health"):
		ui.hide_boss_health()
	
	var core_scene = load("res://scenes/items/BlueCore.tscn")
	if core_scene:
		var core = core_scene.instantiate()
		get_parent().add_child(core)
		core.global_position = global_position + Vector3(0, 1, 0)
		
	queue_free()
