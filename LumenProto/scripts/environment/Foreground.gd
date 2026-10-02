extends ParallaxLayer

func _ready():
	var ruins_tex = load("res://assets/genrated assests/Gemini_Generated_Image_fuovs6fuovs6fuov_transparent.png")
	
	if has_node("ColorRect"):
		$ColorRect.queue_free()
		
	if ruins_tex:
		var fg_sprite = Sprite2D.new()
		var atlas = AtlasTexture.new()
		atlas.atlas = ruins_tex
		atlas.region = Rect2(800, 0, 800, 300) # Debris / rocks
		fg_sprite.texture = atlas
		fg_sprite.texture_repeat = CanvasItem.TEXTURE_REPEAT_ENABLED
		fg_sprite.region_enabled = true
		fg_sprite.region_rect = Rect2(0, 0, 8000, 300)
		fg_sprite.position = Vector2(4000, 550)
		fg_sprite.modulate = Color(0.1, 0.1, 0.1, 1.0) # Very dark silhouette
		add_child(fg_sprite)
