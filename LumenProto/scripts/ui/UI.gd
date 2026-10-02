extends Control

@onready var hp_label = $MarginContainer/VBoxContainer/HPLabel
@onready var level_label = $MarginContainer/VBoxContainer/LevelLabel
@onready var xp_label = $MarginContainer/VBoxContainer/XPLabel

func update_ui(hp: int, level: int, xp: int):
	hp_label.text = "HP: " + str(hp)
	level_label.text = "Level: " + str(level)
	xp_label.text = "XP: " + str(xp)
