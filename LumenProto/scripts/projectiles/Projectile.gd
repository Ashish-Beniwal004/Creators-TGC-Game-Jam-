extends Area2D

var speed: float = 600.0
var damage: int = 5
var direction: Vector2 = Vector2.RIGHT

func _ready():
	body_entered.connect(_on_body_entered)
	get_tree().create_timer(2.0).timeout.connect(queue_free)

func _physics_process(delta):
	global_position += direction * speed * delta

func _on_body_entered(body: Node2D):
	if body.is_in_group("enemy") or body.is_in_group("boss"):
		if body.has_method("take_damage"):
			body.take_damage(damage)
			if body.has_node("Sprite2D"):
				var spr = body.get_node("Sprite2D")
				var orig = spr.modulate
				spr.modulate = Color(10, 10, 10, 1)
				var tween = get_tree().create_tween()
				tween.tween_property(spr, "modulate", orig, 0.1)
	if not body.is_in_group("player"):
		queue_free()
