extends StaticBody3D

@export var interaction_range: float = 3.0
var activated: bool = false
@onready var mesh = $MeshInstance3D

func _ready():
	add_to_group("interactable")
	var mat = StandardMaterial3D.new()
	mat.albedo_color = Color(0.2, 0.2, 0.2)
	mesh.material_override = mat

func on_interact(player: Node3D):
	if activated:
		return
	
	var light_power = player.get_node_or_null("LightPower")
	if light_power:
		activated = true
		_react()

func _react():
	print("Light Receptor Activated!")
	if mesh and mesh.material_override:
		mesh.material_override.albedo_color = Color(1.0, 1.0, 0.5)
		mesh.material_override.emission_enabled = true
		mesh.material_override.emission = Color(1.0, 1.0, 0.5)
		mesh.material_override.emission_energy_multiplier = 2.0
