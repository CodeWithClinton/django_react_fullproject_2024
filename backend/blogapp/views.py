from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import PostSerializer 
from rest_framework.pagination import PageNumberPagination
from .models import Post 
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def post_list_create(request):
    posts = Post.objects.all()
    paginator = PageNumberPagination()
    paginated_posts = paginator.paginate_queryset(posts, request)
    serializer = PostSerializer(paginated_posts, many=True)
    return paginator.get_paginated_response(serializer.data)
