# Generated by Django 3.1.2 on 2020-12-02 22:18

from decimal import Decimal
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0047_auto_20201202_1320'),
    ]

    operations = [
        migrations.AddField(
            model_name='businessmodel',
            name='current_guests',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='businessmodel',
            name='max_capacity',
            field=models.IntegerField(default=0),
        ),
        migrations.AddConstraint(
            model_name='businessmodel',
            constraint=models.CheckConstraint(check=models.Q(all_tables__gte=Decimal('0')), name='all_tables_gt_0'),
        ),
        migrations.AddConstraint(
            model_name='businessmodel',
            constraint=models.CheckConstraint(check=models.Q(available_tables__gte=Decimal('0')), name='available_tables_gt_0'),
        ),
        migrations.AddConstraint(
            model_name='businessmodel',
            constraint=models.CheckConstraint(check=models.Q(max_capacity__gte=Decimal('0')), name='max_capacity_gt_0'),
        ),
        migrations.AddConstraint(
            model_name='businessmodel',
            constraint=models.CheckConstraint(check=models.Q(current_guests__gte=Decimal('0')), name='current_guests_gt_0'),
        ),
    ]
