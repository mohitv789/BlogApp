from django.shortcuts import render
from .serializers import WebdevPostSerializer,LikesSerializer
from core.models import WebdevPost,WebdevLike
from rest_framework import viewsets
from rest_framework import permissions
from collections import defaultdict

class LikesViewSet(viewsets.ModelViewSet):
    queryset = WebdevLike.objects.all()
    serializer_class = LikesSerializer
    permission_classes = (permissions.IsAuthenticated, )




class WebdevPostViewSet(viewsets.ModelViewSet):
    serializer_class = WebdevPostSerializer
    queryset = WebdevPost.objects.all()
    permission_classes = (permissions.IsAuthenticated, )
    lookup_field = 'slug'
    def _params_to_ints(self, qs):
        return [int(str_id) for str_id in qs.split(',')]

    def get_queryset(self):
        queryset = self.queryset
        return queryset.filter().order_by('-id').distinct()

    def perform_create(self, serializer):        
        serializer.save(owner=self.request.user)
