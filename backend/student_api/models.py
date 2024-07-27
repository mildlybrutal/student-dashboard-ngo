import json
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(null=True, blank=True)
    achievements = models.TextField(blank=True, default='[]')
    aboutUs = models.TextField(blank=True)
    image = models.ImageField(upload_to='student_images/', null=True, blank=True)

    def __str__(self):
        return self.name

    def set_achievements(self, achievements):
        self.achievements = json.dumps(achievements)

    def get_achievements(self):
        return json.loads(self.achievements)
