# Generated by Django 3.2.16 on 2022-12-30 15:55

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_alter_profile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='autoblogpost',
            name='sections',
            field=models.ManyToManyField(blank=True, related_name='blog_sections', to='core.AutoBlogSections'),
        ),
        migrations.AlterField(
            model_name='webdevpost',
            name='liked_by',
            field=models.ManyToManyField(blank=True, related_name='liked_by', through='core.WebdevLike', to=settings.AUTH_USER_MODEL),
        ),
    ]
