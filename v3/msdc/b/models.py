from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=300)
    sub_title = models.CharField(max_length=500)
    img = models.ImageField(upload_to="media")

    def __str__(self):
        return self.title
