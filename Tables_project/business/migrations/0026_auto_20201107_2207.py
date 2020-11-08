# Generated by Django 3.1.2 on 2020-11-07 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0025_auto_20201106_1339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='businessmodel',
            name='business_name',
            field=models.CharField(max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name='businessmodel',
            name='slug',
            field=models.SlugField(blank=True, max_length=40, unique=True),
        ),
    ]
