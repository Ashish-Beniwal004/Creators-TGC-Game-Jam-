extends Area3D

@export var boss_path: NodePath

func _ready():
	body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node3D):
	if body.is_in_group("player"):
		if has_node(boss_path):
			var boss = get_node(boss_path)
			if boss and boss.has_method("activate"):
				boss.activate()
				print("Boss Arena Activated!")
				queue_free()
