extends Area2D

var speed: float = 400.0
var damage: int = 20
var direction: Vector2 = Vector2.ZERO
var lifetime: float = 3.0

func _ready():
	body_entered.connect(_on_body_entered)
	var mat = CanvasItemMaterial.new()
	mat.blend_mode = CanvasItemMaterial.BLEND_MODE_ADD
	if has_node("Sprite2D"):
		$Sprite2D.material = mat
	get_tree().create_timer(lifetime).timeout.connect(queue_free)

func _physics_process(delta):
	global_position += direction * speed * delta

func _on_body_entered(body: Node2D):
	if body.is_in_group("player"):
		if body.has_method("take_damage"):
			body.take_damage(damage)
		if body.has_method("apply_slow"):
			body.apply_slow(1.0, 0.5)
	if not body.is_in_group("boss"):
		queue_free()
