# Generated by Django 3.1.2 on 2020-11-14 17:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0031_tablemodel_qr_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tablemodel',
            name='business',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='business.businessmodel'),
        ),
    ]