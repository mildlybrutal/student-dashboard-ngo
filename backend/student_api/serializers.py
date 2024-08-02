from rest_framework import serializers
from .models import Student
import json

class StudentSerializer(serializers.ModelSerializer):
    gallery = serializers.ListField(child=serializers.CharField(), required=False)

    class Meta:
        model = Student
        fields = ['id', 'name', 'age', 'date_of_birth', 'latitude', 'longitude', 'achievements', 'aboutUs', 'image', 'gallery']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if representation['achievements']:
            representation['achievements'] = json.loads(representation['achievements'])
        else:
            representation['achievements'] = []

        if instance.gallery:
            representation['gallery'] = json.loads(instance.gallery)
        else:
            representation['gallery'] = []

        return representation

    def to_internal_value(self, data):
        if 'achievements' in data and isinstance(data['achievements'], list):
            data['achievements'] = json.dumps(data['achievements'])

        if 'gallery' in data and isinstance(data['gallery'], list):
            data['gallery'] = json.dumps(data['gallery'])

        return super().to_internal_value(data)
