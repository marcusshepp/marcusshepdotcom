from __future__ import unicode_literals

from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=150)
    body = models.TextField()
    comments = models.ManyToManyField("Comment")


class Comment(models.Model):
    author_name = models.CharField(max_length=50)
    author_email = models.CharField(max_length=150)
    body = models.TextField()



