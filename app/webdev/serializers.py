from core.models import WebdevPost, WebdevLike
from rest_framework import serializers
from django.contrib.auth import get_user_model


USER = get_user_model()

class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebdevLike
        fields = ("user","webdev",)


class WebdevPostSerializer(serializers.ModelSerializer):
    liked_by = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=USER.objects.all())
    class Meta:
        model = WebdevPost
        fields = ("title","description","content","liked_by","owner","slug")
        lookup_field = 'slug'
        read_only_fields = ['id']
    def update(self, instance, validated_data):
        liked_by = validated_data.pop('liked_by')
        instance.liked_by.set([])
        for i in liked_by:
            instance.liked_by.add(i)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
    