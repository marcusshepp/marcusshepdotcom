# Generated by Django 5.1.2 on 2024-10-19 00:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('b', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='img',
            field=models.ImageField(upload_to='media'),
        ),
    ]