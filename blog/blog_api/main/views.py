from rest_framework import viewsets

from main import (
    serializers,
    models,
)


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = models.Article.objects.all()
    serializer_class = serializers.ArticleSerializer
    permission_classes = ()


class CommentViewSet(viewsets.ModelViewSet):
    queryset = models.Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    permission_classes = ()

