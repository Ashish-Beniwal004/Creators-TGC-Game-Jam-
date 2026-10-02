extends Node

enum LightColor { WHITE, BLUE, GREEN, RED }
var current_level: int = 1
var current_color: LightColor = LightColor.WHITE

func upgrade_light(new_color: LightColor):
	current_level += 1
	current_color = new_color
	print("Light upgraded! Level: ", current_level, " Color: ", current_color)

func get_damage_multiplier() -> float:
	return 1.0 + (current_level - 1) * 0.5

func get_speed_multiplier() -> float:
	return 1.0 + (current_level - 1) * 0.2

func get_size_multiplier() -> float:
	return 1.0 + (current_level - 1) * 0.2

func get_light_energy() -> float:
	return 1.0 + (current_level - 1) * 0.5

func get_light_color_value() -> Color:
	match current_color:
		LightColor.WHITE: return Color.WHITE
		LightColor.BLUE: return Color(0.2, 0.5, 1.0)
		LightColor.GREEN: return Color(0.2, 1.0, 0.2)
		LightColor.RED: return Color(1.0, 0.2, 0.2)
	return Color.WHITE
