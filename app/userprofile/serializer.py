from core.models import Profile
from rest_framework import serializers


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"
        read_only_fields = ["id", "user", "gender", "first_name",
                            "last_name", "city", "avatar", "url", "bio"]


class MyProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = "__all__"
        read_only_fields = ["id"]
