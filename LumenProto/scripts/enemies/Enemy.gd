extends CharacterBody3D

@export var max_hp: int = 30
var current_hp: int = 30
var speed: float = 3.0
var detection_range: float = 20.0
var gravity: float = 12.0
var xp_value: int = 10

var player: Node3D = null

func _ready():
	current_hp = max_hp

func _physics_process(delta):
	if not player:
		var players = get_tree().get_nodes_in_group("player")
		if players.size() > 0:
			player = players[0]
			
	if not is_on_floor():
		velocity.y -= gravity * delta
		
	if player and global_position.distance_to(player.global_position) <= detection_range:
		var direction = global_position.direction_to(player.global_position)
		direction.y = 0
		if direction.length_squared() > 0.001:
			direction = direction.normalized()
			velocity.x = direction.x * speed
			velocity.z = direction.z * speed
			var look_target = global_position + direction
			look_at(look_target, Vector3.UP)
	else:
		velocity.x = move_toward(velocity.x, 0, speed)
		velocity.z = move_toward(velocity.z, 0, speed)
		
	move_and_slide()

func take_damage(amount: int):
	current_hp -= amount
	print("Enemy took ", amount, " damage. HP: ", current_hp)
	if current_hp <= 0:
		die()

func die():
	if player and player.has_method("add_xp"):
		player.add_xp(xp_value)
	queue_free()
