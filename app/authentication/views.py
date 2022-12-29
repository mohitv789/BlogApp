from rest_framework import generics, status, permissions
from .serializers import RegisterSerializer, LoginSerializer, LogoutSerializer
from rest_framework.permissions import AllowAny
from django.http import HttpResponsePermanentRedirect
from rest_framework.response import Response
from .renderers import UserRenderer
import os
class CustomRedirect(HttpResponsePermanentRedirect):
    
    allowed_schemes = [os.environ.get('APP_SCHEME'), 'http', 'https']
class UserRegistrationViewSet(generics.GenericAPIView):
    
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    renderer_classes = (UserRenderer,)
    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data      
        return Response(user_data, status=status.HTTP_201_CREATED)



class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)

