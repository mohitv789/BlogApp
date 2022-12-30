from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .permissions import IsOwnerOrReadOnly
from .serializer import ProfileSerializer, MyProfileSerializer
from core.models import Profile
from rest_framework import status, permissions
from rest_framework import viewsets, mixins
# Create your views here.


class ProfileViewSet(mixins.ListModelMixin,
                     viewsets.GenericViewSet):
    """View for manage recipe APIs."""
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)

    def get_queryset(self):

        return self.queryset.filter().order_by('-id').distinct()


class MyProfileViewSet(viewsets.ModelViewSet):
    """View for manage recipe APIs."""
    serializer_class = MyProfileSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)

    def get_queryset(self):
        queryset = Profile.objects.all()

        return queryset.filter(
            user=self.request.user
        )

    def get_obj(self):
        obj = get_object_or_404(Profile, user=self.request.user)
        return obj

    # def perform_create(self, request):
    #     serialized = self.serializer_class(data=request.data)
    #     if serialized.is_valid():
    #         serialized.save(user=self.request.user)
    #         return Response(status=status.HTTP_201_CREATED)
    #     else:
    #         return Response(self.serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

    # def put(self, request):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save(user=self.request.user)
    #     return Response(status=status.HTTP_202_ACCEPTED, data=serializer.data)

    def post(self, request):
        user_id = request.data.get('user', None)
        if not id:
            # perform creation
            serializer = MyProfileSerializer(data=request.data)
        else:
            # perform updation
            profile = Profile.objects.get(user_id=int(user_id))
            serializer = MyProfileSerializer(profile, data=request.data)

        if (serializer.is_valid()):
            serializer.save()
            return Response(True)
        else:
            return Response(serializer.errors)
