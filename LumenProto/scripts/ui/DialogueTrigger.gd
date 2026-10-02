extends Area2D

@export var dialogue_text: String = "..."
@export var duration: float = 4.0
var triggered: bool = false

func _ready():
	body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node2D):
	if not triggered and body.is_in_group("player"):
		triggered = true
		var ui = get_tree().get_first_node_in_group("ui")
		if ui and ui.has_method("show_dialogue"):
			ui.show_dialogue(dialogue_text, duration)
