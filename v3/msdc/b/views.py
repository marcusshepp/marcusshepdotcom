import random
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods

from .models import Post


def index(request):
    return render(request, "base.html")


@require_http_methods(["GET"])
def get_posts(request):
    posts = Post.objects.all()
    return render(request, "posts.html", {"posts": posts})


@require_http_methods(["DELETE"])
def delete(request, id=None):
    return HttpResponse(random.randint(0, 100))
