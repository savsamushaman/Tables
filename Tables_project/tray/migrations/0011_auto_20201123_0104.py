# Generated by Django 3.1.2 on 2020-11-22 23:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tray', '0010_auto_20201115_2357'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordermodel',
            name='status',
            field=models.CharField(choices=[('U', 'Unplaced'), ('PL', 'Placed'), ('S', 'Serving'), ('P', 'Paid'), ('C', 'Cancelled')], default='Unplaced', max_length=2),
        ),
    ]
