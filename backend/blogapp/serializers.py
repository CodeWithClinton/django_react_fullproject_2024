from rest_framework import serializers 
from .models import Post 


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post 
        fields = [["id", "title", "slug", "category", "content", "thumbnail", "created_at", "updated_at"] ]