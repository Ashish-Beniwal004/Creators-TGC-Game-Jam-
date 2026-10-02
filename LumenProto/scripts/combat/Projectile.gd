extends Area3D

var speed: float = 20.0
var damage: int = 15
var lifetime: float = 2.0

func _ready():
	body_entered.connect(_on_body_entered)
	var timer = Timer.new()
	timer.wait_time = lifetime
	timer.autostart = true
	timer.one_shot = true
	timer.timeout.connect(queue_free)
	add_child(timer)

func _physics_process(delta):
	global_position += -global_transform.basis.z * speed * delta

func _on_body_entered(body):
	if body.is_in_group("player"):
		return
	if body.has_method("take_damage"):
		body.take_damage(damage)
	queue_free()
