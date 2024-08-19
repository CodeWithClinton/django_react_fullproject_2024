from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import PostSerializer 
from .models import Post 
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def post_list_create(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)
