extends Node

var player_level: int = 1
var player_xp: int = 0
var player_xp_to_next: int = 10
var checkpoint_position: Vector2 = Vector2.ZERO

func save_player_state(level: int, xp: int, xp_to_next: int):
	player_level = level
	player_xp = xp
	player_xp_to_next = xp_to_next

func reset_state():
	player_level = 1
	player_xp = 0
	player_xp_to_next = 10
	checkpoint_position = Vector2.ZERO
