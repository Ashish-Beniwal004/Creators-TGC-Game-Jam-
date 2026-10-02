extends CharacterBody2D

enum State { IDLE, CHASE, ATTACK, RETREAT, HIT, DEATH }
var current_state: State = State.IDLE

@export var max_hp: int = 50
@export var movement_speed: float = 120.0
@export var retreat_speed: float = 80.0
@export var attack_damage: int = 20
@export var attack_range: float = 45.0
@export var attack_cooldown: float = 2.0
@export var detection_range: float = 400.0
@export var retreat_duration: float = 1.5
@export var xp_reward: int = 25

var current_hp: int = 50
var gravity: float = 1200.0
var can_attack: bool = true
var retreat_timer: float = 0.0

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
		
	_handle_states(delta)
	move_and_slide()

func _handle_states(delta):
	if not player:
		current_state = State.IDLE
		velocity.x = move_toward(velocity.x, 0, movement_speed)
		return
		
	var dist = global_position.distance_to(player.global_position)
	
	if current_state == State.HIT:
		velocity.x = move_toward(velocity.x, 0, movement_speed)
		return
		
	if current_state == State.RETREAT:
		retreat_timer -= delta
		if retreat_timer <= 0:
			current_state = State.CHASE
		else:
			_retreat_from_player()
		return
		
	if dist <= attack_range and can_attack:
		current_state = State.ATTACK
	elif dist <= detection_range:
		current_state = State.CHASE
	else:
		current_state = State.IDLE
		
	match current_state:
		State.IDLE:
			velocity.x = move_toward(velocity.x, 0, movement_speed)
		State.CHASE:
			_chase_player()
		State.ATTACK:
			velocity.x = move_toward(velocity.x, 0, movement_speed)
			_attack_player()

func _chase_player():
	var direction = sign(player.global_position.x - global_position.x)
	if direction != 0:
		velocity.x = direction * movement_speed
		sprite.flip_h = direction > 0

func _retreat_from_player():
	var direction = sign(global_position.x - player.global_position.x)
	if direction != 0:
		velocity.x = direction * retreat_speed
		sprite.flip_h = direction < 0

func _attack_player():
	if not can_attack:
		return
	
	can_attack = false
	if player.has_method("take_damage"):
		player.take_damage(attack_damage)
	if player.has_method("apply_slow"):
		player.apply_slow(1.5, 0.4)
		
	current_state = State.RETREAT
	retreat_timer = retreat_duration
		
	get_tree().create_timer(attack_cooldown).timeout.connect(func(): can_attack = true)

func take_damage(amount: int):
	if current_state == State.DEATH:
		return
		
	current_hp -= amount
	
	if current_hp <= 0:
		die()
	else:
		current_state = State.HIT
		get_tree().create_timer(0.3).timeout.connect(func(): if current_state != State.DEATH: current_state = State.IDLE)

func die():
	current_state = State.DEATH
	if player and player.has_method("add_xp"):
		player.add_xp(xp_reward)
	queue_free()
