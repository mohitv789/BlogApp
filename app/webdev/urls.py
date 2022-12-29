from django.urls import (
    path,
    include,
)
from rest_framework import routers
from . import views


router = routers.DefaultRouter()

router.register('blog',views.WebdevPostViewSet)
router.register('likes', views.LikesViewSet)

app_name = 'webdev'

urlpatterns = [
    path('', include(router.urls))
]
