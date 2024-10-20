from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=300)
    sub_title = models.CharField(max_length=500)
    img = models.ImageField(upload_to="media")
    date_created = models.DateField(null=True)
    date_modified = models.DateField(null=True)
    views = models.IntegerField(null=True)
    url = models.CharField(max_length=300, null=True)

    def __str__(self):
        return self.title
