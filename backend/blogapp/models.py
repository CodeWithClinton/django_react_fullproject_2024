from django.db import models
from django.utils.text import slugify

# Create your models here.
class Post(models.Model):
    CATEGORY = [
        ('Beginners', 'Beginners'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced')
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, null=True, blank=True)
    content = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY, blank=True, null=True)
    thumbnail = models.ImageField(upload_to="img", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title


    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
            unique_slug = self.slug
            counter = 1
            if Post.objects.filter(slug=unique_slug).exists():
                unique_slug = f'{self.slug}-{counter}'
                counter += 1
            self.slug = unique_slug
        
        super().save(*args, **kwargs)
