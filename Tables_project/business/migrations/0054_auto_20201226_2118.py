# Generated by Django 3.1.2 on 2020-12-26 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0053_auto_20201226_2034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]