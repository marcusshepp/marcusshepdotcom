# Generated by Django 5.1.2 on 2024-10-20 02:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('b', '0002_alter_post_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='date_created',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='date_modified',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='url',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='views',
            field=models.IntegerField(null=True),
        ),
    ]
