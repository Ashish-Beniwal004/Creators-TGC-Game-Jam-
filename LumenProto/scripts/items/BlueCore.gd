extends Area3D

@onready var mesh = $MeshInstance3D

func _ready():
	body_entered.connect(_on_body_entered)
	var mat = StandardMaterial3D.new()
	mat.albedo_color = Color(0.2, 0.5, 1.0)
	mat.emission_enabled = true
	mat.emission = Color(0.2, 0.5, 1.0)
	mesh.material_override = mat

func _on_body_entered(body: Node3D):
	if body.is_in_group("player"):
		var light_power = body.get_node_or_null("LightPower")
		if light_power:
			# Upgrade to BLUE (1)
			light_power.upgrade_light(1)
			print("Blue Core Acquired! Hope is restored.")
			queue_free()
