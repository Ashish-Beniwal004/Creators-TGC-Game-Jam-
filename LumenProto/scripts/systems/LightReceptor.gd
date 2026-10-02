extends StaticBody3D

@export var required_light_level: int = 1
@export var required_light_color: int = 0 # 0=WHITE, 1=BLUE, 2=GREEN, 3=RED
@export var activation_range: float = 3.0
var activated: bool = false
@onready var mesh = $MeshInstance3D

func _ready():
	add_to_group("interactable")
	var mat = StandardMaterial3D.new()
	mat.albedo_color = Color(0.2, 0.2, 0.2)
	mesh.material_override = mat

func _physics_process(delta):
	if activated:
		return
		
	var players = get_tree().get_nodes_in_group("player")
	if players.size() > 0:
		var player = players[0]
		if global_position.distance_to(player.global_position) <= activation_range:
			_check_light_activation(player)

func _check_light_activation(player: Node3D):
	var light_power = player.get_node_or_null("LightPower")
	if light_power:
		if light_power.current_level >= required_light_level and (required_light_color == 0 or light_power.current_color == required_light_color):
			activated = true
			_react()

func on_interact(player: Node3D):
	# Retained for future generic interactions (e.g. read, inspect) but light activates passively
	pass

func _react():
	print("Light Receptor Activated automatically by Lumen's Light!")
	if mesh and mesh.material_override:
		mesh.material_override.albedo_color = Color(1.0, 1.0, 0.5)
		mesh.material_override.emission_enabled = true
		mesh.material_override.emission = Color(1.0, 1.0, 0.5)
		mesh.material_override.emission_energy_multiplier = 2.0
