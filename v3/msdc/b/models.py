from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=300)
    sub_title = models.CharField(max_length=500)
    img_url = models.CharField(max_length=500)

    def __str__(self):
        return self.title
