from core.models import AutoBlogPost, AutoBlogSections
from rest_framework import viewsets,authentication
from rest_framework import status
from rest_framework.response import Response
from .serializer import AutoBlogSectionSerializer, AutoBlogSerializer
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from .permissions import IsOwnerOrReadOnly

class AutoPostViewSet(viewsets.ModelViewSet):
    """View for manage recipe APIs."""
    serializer_class = AutoBlogSerializer
    queryset = AutoBlogPost.objects.all()
    permission_classes = (permissions.IsAuthenticated,IsOwnerOrReadOnly)
    lookup_field = 'slug'
    def _params_to_ints(self, qs):
        """Convert a list of strings to integers."""
        return [int(str_id) for str_id in qs.split(',')]

    def get_queryset(self):
        """Retrieve recipes for authenticated user."""
        queryset = self.queryset
        return queryset.filter().order_by('-id').distinct()

    def get_obj(self, slug):
        obj = get_object_or_404(AutoBlogPost, slug=slug)
        self.check_object_permissions(self.request, obj)
        return obj

    def perform_create(self, request):
        print(request.data)
        serialized = self.serializer_class(data=request.data)
        if serialized.is_valid():
            serialized.save(owner=self.request.user)
            return Response(status=status.HTTP_202_ACCEPTED)
        else:
            return Response(self.serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class AutoSectionViewSet(viewsets.ModelViewSet):
    """View for manage recipe APIs."""
    serializer_class = AutoBlogSectionSerializer
    queryset = AutoBlogSections.objects.all()
    permission_classes = (permissions.IsAuthenticated, )
    lookup_field = 'slug'
    def _params_to_ints(self, qs):
        """Convert a list of strings to integers."""
        return [int(str_id) for str_id in qs.split(',')]

    def get_queryset(self):
        """Retrieve recipes for authenticated user."""
        explain_snippets = self.request.query_params.get('explain_snippets')
        queryset = self.queryset

        if explain_snippets:
            explain_snippets_ids = self._params_to_ints(explain_snippets)
            queryset = queryset.filter(explain_snippets__id__in=explain_snippets_ids)

        return queryset.filter().order_by('-id').distinct()

    def perform_create(self, serializer):
        
        serializer.save(owner=self.request.user)