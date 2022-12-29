"""
URL mappings for the recipe app.
"""
from django.urls import (
    path
)
from .views import UserRegistrationViewSet
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import LogoutAPIView, LoginAPIView


app_name = 'authentication'

urlpatterns = [
    path('register/', UserRegistrationViewSet.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]
