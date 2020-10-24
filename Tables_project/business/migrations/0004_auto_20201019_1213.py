# Generated by Django 3.1.2 on 2020-10-19 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0003_auto_20201019_0954'),
    ]

    operations = [
        migrations.AddField(
            model_name='businessmodel',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='businessmodel',
            name='is_open_now',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='businessmodel',
            name='all_tables',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='businessmodel',
            name='available_tables',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]