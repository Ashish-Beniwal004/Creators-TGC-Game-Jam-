extends StaticBody2D

func _ready():
	var tex = load("res://assets/genrated assests/Gemini_Generated_Image_fuovs6fuovs6fuov_transparent.png")
	if tex:
		var sprite = Sprite2D.new()
		var atlas = AtlasTexture.new()
		atlas.atlas = tex
		# Pick a generic rock texture from the generated image
		atlas.region = Rect2(0, 0, 300, 200)
		sprite.texture = atlas
		
		# Floor collision is 8000x100
		# We want it to tile across the floor.
		sprite.texture_repeat = CanvasItem.TEXTURE_REPEAT_ENABLED
		sprite.region_enabled = true
		sprite.region_rect = Rect2(0, 0, 8000, 100)
		# Just scale it vertically a bit to match height
		sprite.scale = Vector2(1.0, 100.0/200.0)
		
		if has_node("ColorRect"):
			$ColorRect.queue_free()
		
		add_child(sprite)
