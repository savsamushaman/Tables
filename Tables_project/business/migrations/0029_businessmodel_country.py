# Generated by Django 3.1.2 on 2020-11-13 21:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20201113_2305'),
        ('business', '0028_remove_productmodel_service'),
    ]

    operations = [
        migrations.AddField(
            model_name='businessmodel',
            name='country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='accounts.countrymodel'),
        ),
    ]
