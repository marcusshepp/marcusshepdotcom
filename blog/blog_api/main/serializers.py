from rest_framework import serializers as s

from main import models


class CategorySerializer(s.ModelSerializer):
    class Meta:
        model = models.Category
        fields = (
            "title",
        )


class ArticleSerializer(s.HyperlinkedModelSerializer):
    categories = models.Category.objects.all()
    categories = CategorySerializer(categories, many=True, read_only=True)
    class Meta:
        model = models.Article
        fields = (
            "title",
            "body",
            "categories",
        )


class CommentSerializer(s.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = (
            "author_name",
            "author_email",
            "body",
        )
