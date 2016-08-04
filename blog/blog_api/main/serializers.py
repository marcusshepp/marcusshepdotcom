from rest_framework import serializers as s

from main import models


class ArticleSerializer(s.HyperlinkedModelSerializer):
    class Meta:
        model = models.Article
        fields = (
            "title",
            "body",
            "comments",
        )

    def create(self, validated_data):
        article = models.Article(
            title=validated_data["title"],
            body=validated_data["body"],
            comments=validated_data.get("comments", None),
        )
        print "article", article
        article.save()
        return article


class CommentSerializer(s.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = (
            "author_name",
            "author_email",
            "body",
        )
