extends CharacterBody2D

enum State { IDLE, CHASE, LEAP, HIT, DEATH }
var current_state: State = State.IDLE

@export var max_hp: int = 60
@export var movement_speed: float = 100.0
@export var leap_speed: float = 300.0
@export var leap_jump_velocity: float = -400.0
@export var attack_damage: int = 25
@export var leap_range: float = 200.0
@export var attack_cooldown: float = 2.0
@export var detection_range: float = 400.0
@export var xp_reward: int = 40

var current_hp: int = 60
var gravity: float = 1200.0
var can_leap: bool = true

var player: Node2D = null
@onready var sprite = $Sprite2D

func _ready():
	current_hp = max_hp
	add_to_group("enemy")

func _physics_process(delta):
	if current_state == State.DEATH:
		return
		
	if not player:
		var players = get_tree().get_nodes_in_group("player")
		if players.size() > 0:
			player = players[0]
			
	if not is_on_floor():
		velocity.y += gravity * delta
	else:
		if current_state == State.LEAP and velocity.y >= 0:
			current_state = State.IDLE
			velocity.x = 0
		
	_handle_states(delta)
	move_and_slide()
	
	_check_player_collision()

func _handle_states(_delta):
	if not player:
		if current_state != State.LEAP:
			current_state = State.IDLE
			velocity.x = move_toward(velocity.x, 0, movement_speed)
		return
		
	if current_state in [State.HIT, State.LEAP]:
		return
		
	var dist = global_position.distance_to(player.global_position)
	
	if dist <= leap_range and can_leap and is_on_floor():
		current_state = State.IDLE
		_leap_at_player()
	elif dist <= detection_range:
		current_state = State.CHASE
	else:
		current_state = State.IDLE
		
	match current_state:
		State.IDLE:
			velocity.x = move_toward(velocity.x, 0, movement_speed)
		State.CHASE:
			_chase_player()

func _chase_player():
	var direction = sign(player.global_position.x - global_position.x)
	if direction != 0:
		velocity.x = direction * movement_speed
		sprite.flip_h = direction > 0

func _leap_at_player():
	can_leap = false
	var tween = get_tree().create_tween()
	AudioManager.play_sfx("jungle_enemy_leap")
	tween.tween_property(sprite, "scale", Vector2(1.2, 0.6), 0.3)
	get_tree().create_timer(0.3).timeout.connect(func():
		if current_state != State.DEATH:
			current_state = State.LEAP
			var direction = sign(player.global_position.x - global_position.x)
			if direction != 0:
				sprite.flip_h = direction > 0
			velocity.y = leap_jump_velocity
			velocity.x = direction * leap_speed
			var reset = get_tree().create_tween()
			reset.tween_property(sprite, "scale", Vector2.ONE, 0.1)
	)
	
	get_tree().create_timer(attack_cooldown).timeout.connect(func(): can_leap = true)

func _check_player_collision():
	if current_state == State.LEAP:
		for i in get_slide_collision_count():
			var collision = get_slide_collision(i)
			var collider = collision.get_collider()
			if collider and collider.is_in_group("player") and collider.has_method("take_damage"):
				AudioManager.play_sfx("jungle_enemy_attack")
				collider.take_damage(attack_damage)
				current_state = State.IDLE
				velocity.x = -sign(velocity.x) * 100

func take_damage(amount: int):
	if current_state == State.DEATH:
		return
		
	AudioManager.play_sfx("jungle_enemy_hurt")
		
	current_hp -= amount
	
	if current_hp <= 0:
		die()
	else:
		if current_state != State.LEAP:
			current_state = State.HIT
			get_tree().create_timer(0.3).timeout.connect(func(): if current_state != State.DEATH and current_state != State.LEAP: current_state = State.IDLE)

func die():
	current_state = State.DEATH
	AudioManager.play_sfx("jungle_enemy_death")
	if player and player.has_method("add_xp"):
		player.add_xp(xp_reward)
		
	set_collision_layer_value(1, false)
	set_collision_mask_value(1, false)
	
	var tween = get_tree().create_tween()
	tween.tween_property(sprite, "modulate:a", 0.0, 0.3)
	if has_node("JungleAura"):
		$JungleAura.emitting = false
	tween.tween_callback(queue_free)
