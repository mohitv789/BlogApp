"""
URL mappings for the recipe app.
"""
from django.urls import (
    path,
    include,
)
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register('blog', views.AutoPostViewSet)
router.register('sections', views.AutoSectionViewSet)
app_name = 'automotive'

urlpatterns = [
    path('', include(router.urls))
]
