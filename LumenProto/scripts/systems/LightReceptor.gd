extends StaticBody2D

@export var required_light_level: int = 1
@export var required_light_color: int = 0
@export var activation_range: float = 150.0
var activated: bool = false
@onready var sprite = $Sprite2D

func _ready():
	add_to_group("interactable")

func _physics_process(_delta):
	if activated:
		return
		
	var players = get_tree().get_nodes_in_group("player")
	if players.size() > 0:
		var player = players[0]
		if global_position.distance_to(player.global_position) <= activation_range:
			_check_light_activation(player)

func _check_light_activation(player: Node2D):
	var light_power = player.get_node_or_null("LightPower")
	if light_power:
		if light_power.current_level >= required_light_level and (required_light_color == 0 or light_power.current_color == required_light_color):
			activated = true
			_react()

func on_interact(_player: Node2D):
	pass

func _react():
	print("Light Receptor Activated automatically by Lumen's Light!")
	if sprite:
		sprite.modulate = Color(1.0, 1.0, 0.5)
