extends ParallaxBackground

func _ready():
	var ruins_tex = load("res://assets/genrated assests/Gemini_Generated_Image_fuovs6fuovs6fuov_transparent.png")
	
	if has_node("FarBackground/ColorRect"):
		$FarBackground/ColorRect.queue_free()
	if has_node("MidBackground/ColorRect"):
		$MidBackground/ColorRect.queue_free()
		
	if ruins_tex:
		# Far background
		var far_sprite = Sprite2D.new()
		var atlas1 = AtlasTexture.new()
		atlas1.atlas = ruins_tex
		atlas1.region = Rect2(0, 500, 1000, 500) # Generic dark area
		far_sprite.texture = atlas1
		far_sprite.texture_repeat = CanvasItem.TEXTURE_REPEAT_ENABLED
		far_sprite.region_enabled = true
		far_sprite.region_rect = Rect2(0, 0, 8000, 1000)
		far_sprite.position = Vector2(4000, 100)
		far_sprite.modulate = Color(0.2, 0.2, 0.3, 1.0) # Dark blue tint
		$FarBackground.add_child(far_sprite)
		
		# Mid background (pillars/arches)
		var mid_sprite = Sprite2D.new()
		var atlas2 = AtlasTexture.new()
		atlas2.atlas = ruins_tex
		atlas2.region = Rect2(0, 1000, 800, 800) # Assuming pillars are here
		mid_sprite.texture = atlas2
		mid_sprite.texture_repeat = CanvasItem.TEXTURE_REPEAT_ENABLED
		mid_sprite.region_enabled = true
		mid_sprite.region_rect = Rect2(0, 0, 8000, 800)
		mid_sprite.position = Vector2(4000, 200)
		mid_sprite.modulate = Color(0.4, 0.4, 0.5, 1.0)
		$MidBackground.add_child(mid_sprite)
