# Generated by Django 5.0.6 on 2024-08-18 01:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('slug', models.SlugField(blank=True, max_length=200, null=True)),
                ('content', models.TextField()),
                ('category', models.CharField(blank=True, choices=[('Beginners', 'Beginners'), ('Intermediate', 'Intermediate'), ('Advanced', 'Advanced')], max_length=50, null=True)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='img')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]