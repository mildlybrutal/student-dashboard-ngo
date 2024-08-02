from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer
from rest_framework.response import Response
from rest_framework import status
import logging
import os
from django.conf import settings

logger = logging.getLogger(__name__)

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        logger.info(f"Received data: {request.data}")

        # Handle gallery images
        gallery_images = request.FILES.getlist('gallery', [])

        # Create a mutable copy of request.data
        mutable_data = request.data.copy()

        # Remove gallery from the data to be validated by the serializer
        mutable_data.pop('gallery', None)

        serializer = self.get_serializer(data=mutable_data)
        if serializer.is_valid():
            student = serializer.save()

            # Process and save gallery images
            gallery_paths = []
            for image in gallery_images:
                # Generate a unique filename
                file_name = f"{student.id}_{image.name}"
                file_path = os.path.join('gallery', file_name)
                full_path = os.path.join(settings.MEDIA_ROOT, file_path)

                # Ensure the directory exists
                os.makedirs(os.path.dirname(full_path), exist_ok=True)

                # Save the image
                with open(full_path, 'wb+') as destination:
                    for chunk in image.chunks():
                        destination.write(chunk)
                gallery_paths.append(file_path)

            # Update the student's gallery field
            student.set_gallery(gallery_paths)
            student.save()

            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            logger.error(f"Serializer errors: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        # Handle gallery images
        gallery_images = request.FILES.getlist('gallery', [])

        # Create a mutable copy of request.data
        mutable_data = request.data.copy()

        # Remove gallery from the data to be validated by the serializer
        mutable_data.pop('gallery', None)

        serializer = self.get_serializer(instance, data=mutable_data, partial=partial)
        if serializer.is_valid():
            self.perform_update(serializer)

            # Process and save new gallery images
            if gallery_images:
                existing_gallery = instance.get_gallery()
                for image in gallery_images:
                    # Generate a unique filename
                    file_name = f"{instance.id}_{image.name}"
                    file_path = os.path.join('gallery', file_name)
                    full_path = os.path.join(settings.MEDIA_ROOT, file_path)

                    # Ensure the directory exists
                    os.makedirs(os.path.dirname(full_path), exist_ok=True)

                    # Save the image
                    with open(full_path, 'wb+') as destination:
                        for chunk in image.chunks():
                            destination.write(chunk)
                    existing_gallery.append(file_path)

                # Update the student's gallery field
                instance.set_gallery(existing_gallery)
                instance.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
