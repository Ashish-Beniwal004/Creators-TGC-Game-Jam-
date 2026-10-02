extends StaticBody2D

func _ready():
	var tex = load("res://assets/genrated assests/Gemini_Generated_Image_fuovs6fuovs6fuov_transparent.png")
	if tex:
		var sprite = Sprite2D.new()
		var atlas = AtlasTexture.new()
		atlas.atlas = tex
		# Use an approximate region for a brick block (from top left area)
		atlas.region = Rect2(0, 0, 300, 200)
		sprite.texture = atlas
		
		# Platform collision is 100x20
		sprite.scale = Vector2(100.0/300.0, 20.0/200.0)
		
		if has_node("ColorRect"):
			$ColorRect.queue_free()
		
		add_child(sprite)
