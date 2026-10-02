extends Area3D

var speed: float = 12.0
var damage: int = 20
var direction: Vector3 = Vector3.ZERO
var lifetime: float = 3.0

func _ready():
	body_entered.connect(_on_body_entered)
	var mat = StandardMaterial3D.new()
	mat.albedo_color = Color(0.1, 0.7, 1.0)
	mat.emission_enabled = true
	mat.emission = Color(0.1, 0.7, 1.0)
	$MeshInstance3D.material_override = mat
	get_tree().create_timer(lifetime).timeout.connect(queue_free)

func _physics_process(delta):
	global_position += direction * speed * delta

func _on_body_entered(body: Node3D):
	if body.is_in_group("player"):
		if body.has_method("take_damage"):
			body.take_damage(damage)
		if body.has_method("apply_slow"):
			body.apply_slow(1.0, 0.5)
	queue_free()
