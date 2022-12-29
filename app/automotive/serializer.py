from core.models import AutoBlogPost,AutoBlogSections
from rest_framework import serializers



class AutoBlogSectionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AutoBlogSections
        fields = ("title","description","problem","solution","ref_image","slug")  
        lookup_field = 'slug'
        read_only_fields = ['id']
    



class AutoBlogSerializer(serializers.ModelSerializer):
    sections = AutoBlogSectionSerializer(many=True)

    class Meta:
        model = AutoBlogPost
        fields = ("title","description","sections","poster","slug","owner")
        read_only_fields = ['id']        
        lookup_field = 'slug'

    def _get_or_create_sections(self, sections, blogPost):
        section_list = []
        for section in sections:
            section_obj , created = AutoBlogSections.objects.get_or_create(
                **section
            )
            section_list.append(section_obj)
        blogPost.sections.set(section_list)

    def create(self, validated_data):
        sections = validated_data.pop('sections', [])
        blogPost = AutoBlogPost.objects.create(**validated_data)
        self._get_or_create_sections(sections, blogPost)

        return blogPost

    def update(self, instance, validated_data):
        sections = validated_data.pop('sections', None)

        if sections is not None:
            instance.sections.clear()
            self._get_or_create_sections(sections, instance)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance


