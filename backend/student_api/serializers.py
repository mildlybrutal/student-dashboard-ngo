from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'age', 'achievements', 'aboutUs', 'image']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if representation['achievements']:
            representation['achievements'] = representation['achievements'].split(',')
        else:
            representation['achievements'] = []
        return representation

    def to_internal_value(self, data):
        if 'achievements' in data and isinstance(data['achievements'], list):
            data['achievements'] = ','.join(data['achievements'])
        return super().to_internal_value(data)
