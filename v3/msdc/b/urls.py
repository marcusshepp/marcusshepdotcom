from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("posts", views.get_posts, name="posts"),
    path("post/<slug:slug>", views.get_post, name="post"),
]
