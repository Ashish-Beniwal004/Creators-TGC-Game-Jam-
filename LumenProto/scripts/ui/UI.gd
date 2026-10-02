extends Control

@onready var hp_label = $MarginContainer/VBoxContainer/HPLabel
@onready var level_label = $MarginContainer/VBoxContainer/LevelLabel
@onready var xp_bar = $MarginContainer/VBoxContainer/XPBar
@onready var xp_label = $MarginContainer/VBoxContainer/XPBar/XPLabel
@onready var level_up_label = $MarginContainer/VBoxContainer/LevelUpLabel

func update_ui(hp: int, level: int, xp: int, max_xp: int = 10):
	hp_label.text = "HP: " + str(hp)
	level_label.text = "Level: " + str(level)
	xp_bar.max_value = max_xp
	xp_bar.value = xp
	xp_label.text = "XP: " + str(xp) + "/" + str(max_xp)

func show_level_up():
	level_up_label.visible = true
	var timer = get_tree().create_timer(2.0)
	timer.timeout.connect(func(): level_up_label.visible = false)

func show_death_screen():
	if has_node("DeathScreen"):
		$DeathScreen.visible = true
