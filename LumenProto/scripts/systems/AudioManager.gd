extends Node

var music_player: AudioStreamPlayer
var ambient_player: AudioStreamPlayer
var sfx_players: Array[AudioStreamPlayer] = []
var num_sfx_players: int = 16

enum MusicState { DARK_WORLD, ICE_BIOME, COLD_BLOOD, JUNGLE, OVERGROWTH, VICTORY, DEATH }
var current_music_state: MusicState = MusicState.DARK_WORLD

func _ready():
	process_mode = Node.PROCESS_MODE_ALWAYS
	
	music_player = AudioStreamPlayer.new()
	music_player.bus = "Music"
	add_child(music_player)
	
	ambient_player = AudioStreamPlayer.new()
	ambient_player.bus = "Music"
	add_child(ambient_player)
	
	for i in range(num_sfx_players):
		var p = AudioStreamPlayer.new()
		p.bus = "SFX"
		add_child(p)
		sfx_players.append(p)
		
	# Placeholder: Missing external audio assets.
	# Audio files should be placed in assets/audio/...

func play_sfx(stream_name: String):
	# If we had actual streams, we would load them here.
	# For now, it's a structural hook.
	print("[Audio] Play SFX: ", stream_name)
	pass

func set_music_state(state: MusicState):
	if current_music_state == state:
		return
	current_music_state = state
	print("[Audio] Music State changed to: ", MusicState.keys()[state])
	# Here we would crossfade music_player to the new state's track.

func set_ambient_state(biome: String):
	print("[Audio] Ambient State changed to: ", biome)
	# Here we would crossfade ambient_player to the new biome's ambience.
