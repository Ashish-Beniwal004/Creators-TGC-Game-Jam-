extends Area2D

func _ready():
	body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node2D):
	if body.is_in_group("player"):
		var light_power = body.get_node_or_null("LightPower")
		if light_power:
			light_power.upgrade_light(1)
			print("Blue Core Acquired! Hope is restored.")
			queue_free()
