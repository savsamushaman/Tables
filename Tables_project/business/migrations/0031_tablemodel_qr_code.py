# Generated by Django 3.1.2 on 2020-11-14 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0030_auto_20201114_1320'),
    ]

    operations = [
        migrations.AddField(
            model_name='tablemodel',
            name='qr_code',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
