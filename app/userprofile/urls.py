from django.urls import (
    path, include
)
from rest_framework import routers
from . import views

app_name = 'userprofile'
router = routers.DefaultRouter()
router.register('all', views.ProfileViewSet, basename='all')
router.register('', views.MyProfileViewSet, basename='mine')

urlpatterns = [
    path('', include(router.urls))
]
