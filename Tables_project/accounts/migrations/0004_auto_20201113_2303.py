# Generated by Django 3.1.2 on 2020-11-13 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20201113_2216'),
    ]

    operations = [
        migrations.AlterField(
            model_name='countrymodel',
            name='currency',
            field=models.CharField(default='-', max_length=3),
        ),
    ]