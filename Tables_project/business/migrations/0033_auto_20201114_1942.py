# Generated by Django 3.1.2 on 2020-11-14 17:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20201113_2305'),
        ('business', '0032_auto_20201114_1939'),
    ]

    operations = [
        migrations.AlterField(
            model_name='businessmodel',
            name='country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.countrymodel'),
        ),
        migrations.AlterField(
            model_name='productmodel',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='business.productcategory'),
        ),
        migrations.AlterField(
            model_name='tablemodel',
            name='business',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='business.businessmodel'),
        ),
    ]