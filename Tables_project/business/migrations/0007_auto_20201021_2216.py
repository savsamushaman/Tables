# Generated by Django 3.1.2 on 2020-10-21 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0006_productmodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productmodel',
            name='description',
            field=models.TextField(blank=True, max_length=500),
        ),
    ]
