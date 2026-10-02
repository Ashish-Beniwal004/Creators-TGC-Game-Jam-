extends Control

@onready var hp_label = $MarginContainer/VBoxContainer/HPLabel
@onready var level_label = $MarginContainer/VBoxContainer/LevelLabel
@onready var xp_bar = $MarginContainer/VBoxContainer/XPBar
@onready var xp_label = $MarginContainer/VBoxContainer/XPBar/XPLabel
@onready var level_up_label = $MarginContainer/VBoxContainer/LevelUpLabel
@onready var boss_health_container = $BossHealthContainer
@onready var boss_name_label = $BossHealthContainer/BossNameLabel
@onready var boss_health_bar = $BossHealthContainer/BossHealthBar

func _ready():
	add_to_group("ui")

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

func show_boss_health(boss_name: String, current_hp: int, max_hp: int):
	boss_health_container.visible = true
	boss_name_label.text = boss_name
	boss_health_bar.max_value = max_hp
	boss_health_bar.value = current_hp

func update_boss_health(current_hp: int):
	boss_health_bar.value = current_hp

func hide_boss_health():
	boss_health_container.visible = false

func show_dialogue(text: String, duration: float):
	if has_node("DialogueContainer/DialogueLabel"):
		$DialogueContainer.visible = true
		$DialogueContainer/DialogueLabel.text = text
		var timer = get_tree().create_timer(duration)
		timer.timeout.connect(func(): $DialogueContainer.visible = false)
