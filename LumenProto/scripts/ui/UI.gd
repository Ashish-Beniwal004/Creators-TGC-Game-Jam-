extends Control

@onready var hp_label = $MarginContainer/VBoxContainer/HPLabel
@onready var level_label = $MarginContainer/VBoxContainer/LevelLabel
@onready var xp_bar = $MarginContainer/VBoxContainer/XPBar
@onready var xp_label = $MarginContainer/VBoxContainer/XPBar/XPLabel
@onready var level_up_label = $MarginContainer/VBoxContainer/LevelUpLabel
@onready var boss_health_container = $BossHealthContainer
@onready var boss_name_label = $BossHealthContainer/BossNameLabel
@onready var boss_health_bar = $BossHealthContainer/BossHealthBar

var pause_menu: Control

func _ready():
	add_to_group("ui")
	process_mode = Node.PROCESS_MODE_ALWAYS
	_setup_pause_menu()

func _setup_pause_menu():
	pause_menu = ColorRect.new()
	pause_menu.color = Color(0, 0, 0, 0.8)
	pause_menu.set_anchors_preset(Control.PRESET_FULL_RECT)
	pause_menu.visible = false
	add_child(pause_menu)
	
	var center = CenterContainer.new()
	center.set_anchors_preset(Control.PRESET_FULL_RECT)
	pause_menu.add_child(center)
	
	var vbox = VBoxContainer.new()
	center.add_child(vbox)
	
	var title = Label.new()
	title.text = "LUMEN\nPaused"
	title.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	title.add_theme_font_size_override("font_size", 48)
	vbox.add_child(title)
	
	var instructions = Label.new()
	instructions.text = "\nPress ESC to Resume\nPress R to Restart\nPress Q to Quit"
	instructions.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	vbox.add_child(instructions)

func _input(event):
	if event is InputEventKey and event.pressed and event.keycode == KEY_ESCAPE:
		if get_tree().paused:
			_resume_game()
		else:
			if not has_node("DeathScreen") or not $DeathScreen.visible:
				_pause_game()
			
	if get_tree().paused:
		if event is InputEventKey and event.pressed:
			if event.keycode == KEY_R:
				_resume_game()
				var players = get_tree().get_nodes_in_group("player")
				if players.size() > 0 and is_instance_valid(players[0]):
					GameState.save_player_state(players[0].level, players[0].xp, players[0].xp_to_next_level)
				get_tree().reload_current_scene()
			elif event.keycode == KEY_Q:
				get_tree().quit()

func _pause_game():
	get_tree().paused = true
	pause_menu.visible = true
	AudioManager.play_sfx("ui_pause")

func _resume_game():
	get_tree().paused = false
	pause_menu.visible = false
	AudioManager.play_sfx("ui_resume")

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
		$DeathScreen.modulate.a = 0.0
		var tween = get_tree().create_tween().set_pause_mode(Tween.TWEEN_PAUSE_PROCESS)
		tween.tween_property($DeathScreen, "modulate:a", 1.0, 1.0)

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
