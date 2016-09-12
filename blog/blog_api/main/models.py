from __future__ import unicode_literals

from django.db import models


class TimeStamp(models.Model):
    class Meta:
        abstract = True
    datetime_created = models.DateTimeField(auto_now_add=True)
    datetime_updated = models.DateTimeField(auto_now=True)


class Article(TimeStamp):
    title = models.CharField(max_length=150)
    body = models.TextField()
    thumbnail = models.FileField(upload_to="media/", null=True)
    categories = models.ManyToManyField("Category")
     
    def body_preview(self):
        pass


class Category(TimeStamp):
    title = models.CharField(max_length=100)


class Comment(TimeStamp):
    author_name = models.CharField(max_length=50)
    author_email = models.CharField(max_length=150)
    body = models.TextField()
    article = models.ForeignKey("Article")
    comments = models.ManyToManyField("self")

