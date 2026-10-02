extends Area2D

@export var dialogue_text: String = "..."
@export var dialogue_line_2: String = ""
@export var duration: float = 3.0
@export var ambient_state: String = ""
var triggered: bool = false

func _ready():
	body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node2D):
	if not triggered and body.is_in_group("player"):
		triggered = true
		if ambient_state != "":
			AudioManager.set_ambient_state(ambient_state)
			
		var ui = get_tree().get_first_node_in_group("ui")
		if ui and ui.has_method("show_dialogue"):
			ui.show_dialogue("LUMEN\n" + dialogue_text, duration)
			if dialogue_line_2 != "":
				get_tree().create_timer(duration + 0.5).timeout.connect(func():
					if ui.has_method("show_dialogue"):
						ui.show_dialogue("LUMEN\n" + dialogue_line_2, duration)
				)
