from django.contrib import admin
from core import models

admin.site.register(models.Profile)
admin.site.register(models.User)
admin.site.register(models.AutoBlogPost)
admin.site.register(models.AutoBlogSections)
admin.site.register(models.WebdevPost)
admin.site.register(models.WebdevComment)
admin.site.register(models.WebdevLike)

