# Generated by Django 3.1.2 on 2020-11-15 21:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0034_auto_20201115_2342'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tray', '0008_ordermodel_total'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordermodel',
            name='business',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='business.businessmodel'),
        ),
        migrations.AlterField(
            model_name='ordermodel',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='accounts.customuser'),
        ),
        migrations.AlterField(
            model_name='ordermodel',
            name='table',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='business.tablemodel'),
        ),
        migrations.AlterField(
            model_name='ordermodel',
            name='total',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=20),
        ),
    ]