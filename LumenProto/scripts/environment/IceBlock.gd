extends StaticBody2D

@export var required_light_level: int = 2
@export var required_light_color: int = 1 # BLUE
@export var activation_range: float = 200.0
var melting: bool = false
@onready var sprite = $Sprite2D

func _physics_process(_delta):
	if melting:
		return
		
	var players = get_tree().get_nodes_in_group("player")
	if players.size() > 0:
		var player = players[0]
		if global_position.distance_to(player.global_position) <= activation_range:
			_check_light_activation(player)

func _check_light_activation(player: Node2D):
	var light_power = player.get_node_or_null("LightPower")
	if light_power:
		if light_power.current_level >= required_light_level and light_power.current_color == required_light_color:
			melting = true
			_melt()

func _melt():
	print("Ice Block melted! Path opened.")
	queue_free()
