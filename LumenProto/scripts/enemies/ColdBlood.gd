extends CharacterBody2D

enum State { IDLE, CHASE, MELEE, BREATH, PROJECTILE, DEATH }
var current_state: State = State.IDLE

@export var max_hp: int = 300
@export var movement_speed: float = 180.0
@export var attack_damage: int = 30
@export var melee_range: float = 80.0
@export var attack_cooldown: float = 2.5
@export var detection_range: float = 600.0
@export var xp_reward: int = 150
@export var phase_2_threshold: float = 0.5

var current_hp: int = 300
var gravity: float = 1200.0
var can_attack: bool = true
var is_active: bool = false
var is_phase_2: bool = false
var action_timer: float = 0.0

var player: Node2D = null
@onready var sprite = $Sprite2D

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
	AudioManager.play_sfx("boss_activation")
	AudioManager.set_music_state(AudioManager.MusicState.COLD_BLOOD)

func _physics_process(delta):
	if current_state == State.DEATH or not is_active:
		return
		
	if not player:
		var players = get_tree().get_nodes_in_group("player")
		if players.size() > 0:
			player = players[0]
			
	if not is_on_floor():
		velocity.y += gravity * delta
		
	_handle_states(delta)
	move_and_slide()

func _handle_states(delta):
	if not player or player.get("is_dead"):
		current_state = State.IDLE
		velocity.x = move_toward(velocity.x, 0, movement_speed)
		return
		
	var dist = global_position.distance_to(player.global_position)
	
	if action_timer > 0:
		action_timer -= delta
		velocity.x = move_toward(velocity.x, 0, movement_speed)
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
	var direction = sign(player.global_position.x - global_position.x)
	if direction != 0:
		velocity.x = direction * speed
		sprite.flip_h = direction > 0

func _perform_melee():
	action_timer = 0.8
	var tween = get_tree().create_tween()
	AudioManager.play_sfx("cold_blood_melee_telegraph")
	tween.tween_property(sprite, "modulate", Color(2.0, 2.0, 3.0), 0.3)
	get_tree().create_timer(0.3).timeout.connect(func():
		if current_state != State.DEATH and player and global_position.distance_to(player.global_position) < melee_range + 20:
			AudioManager.play_sfx("cold_blood_melee_attack")
			if player.has_method("take_damage"):
				player.take_damage(attack_damage)
		var reset = get_tree().create_tween()
		reset.tween_property(sprite, "modulate", Color.WHITE, 0.2)
	)

func _perform_breath():
	action_timer = 1.2
	var tween = get_tree().create_tween()
	tween.tween_property(sprite, "scale", Vector2(1.2, 0.8), 0.4)
	if has_node("BossAura"):
		$BossAura.scale_amount_min = 5.0
		$BossAura.scale_amount_max = 10.0
	AudioManager.play_sfx("cold_blood_breath_telegraph")
	get_tree().create_timer(0.6).timeout.connect(func():
		if current_state != State.DEATH and player and global_position.distance_to(player.global_position) < melee_range * 2.5:
			AudioManager.play_sfx("cold_blood_breath_attack")
			var dir_to_player = sign(player.global_position.x - global_position.x)
			var facing_dir = 1 if sprite.flip_h else -1
			if dir_to_player == facing_dir or dir_to_player == 0:
				if player.has_method("take_damage"):
					player.take_damage(attack_damage)
				if player.has_method("apply_slow"):
					player.apply_slow(2.0, 0.3)
		var reset = get_tree().create_tween()
		reset.tween_property(sprite, "scale", Vector2.ONE, 0.2)
		if has_node("BossAura"):
			$BossAura.scale_amount_min = 2.0
			$BossAura.scale_amount_max = 5.0
	)

func _perform_projectile():
	action_timer = 0.8
	AudioManager.play_sfx("cold_blood_projectile_telegraph")
	var tween = get_tree().create_tween()
	tween.tween_property(sprite, "modulate", Color(0.5, 0.8, 1.5), 0.3)
	get_tree().create_timer(0.3).timeout.connect(func():
		if current_state != State.DEATH and player:
			var proj_scene = load("res://scenes/enemies/IceProjectile.tscn")
			if proj_scene:
				var proj = proj_scene.instantiate()
				get_tree().current_scene.add_child(proj)
				proj.global_position = global_position + Vector2(0, -20)
				proj.direction = global_position.direction_to(player.global_position).normalized()
				proj.damage = int(attack_damage * 0.8)
		var reset = get_tree().create_tween()
		reset.tween_property(sprite, "modulate", Color.WHITE, 0.2)
	)

func take_damage(amount: int):
	if current_state == State.DEATH:
		return
		
	if not is_active:
		activate()
		
	AudioManager.play_sfx("cold_blood_hurt")
		
	current_hp -= amount
	var ui = get_tree().get_first_node_in_group("ui")
	if ui and ui.has_method("update_boss_health"):
		ui.update_boss_health(current_hp)
	
	if current_hp <= max_hp * phase_2_threshold and not is_phase_2:
		is_phase_2 = true
	
	if current_hp <= 0:
		die()

func die():
	current_state = State.DEATH
	AudioManager.play_sfx("boss_death")
	AudioManager.set_music_state(AudioManager.MusicState.ICE_BIOME)
	if player and player.has_method("add_xp"):
		player.add_xp(xp_reward)
	var ui = get_tree().get_first_node_in_group("ui")
	if ui and ui.has_method("hide_boss_health"):
		ui.hide_boss_health()
		
	set_collision_layer_value(1, false)
	set_collision_mask_value(1, false)
	
	if has_node("BossAura"):
		$BossAura.emitting = false
	
	var tween = get_tree().create_tween()
	tween.tween_property(sprite, "modulate:a", 0.0, 0.5)
	tween.tween_callback(func():
		var core_scene = load("res://scenes/items/BlueCore.tscn")
		if core_scene:
			var core = core_scene.instantiate()
			get_parent().add_child(core)
			core.global_position = global_position
		queue_free()
	)
