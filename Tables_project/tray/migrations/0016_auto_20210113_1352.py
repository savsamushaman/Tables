# Generated by Django 3.1.2 on 2021-01-13 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tray', '0015_ordermodel_handler'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordermodel',
            name='status',
            field=models.CharField(choices=[('U', 'Unplaced'), ('PL', 'Placed'), ('S', 'Serving'), ('P', 'Paid'), ('C', 'Cancelled'), ('R', 'Rejected')], default='Unplaced', max_length=2),
        ),
    ]