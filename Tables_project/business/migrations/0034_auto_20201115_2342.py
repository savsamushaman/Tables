# Generated by Django 3.1.2 on 2020-11-15 21:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_auto_20201115_2342'),
        ('business', '0033_auto_20201114_1942'),
    ]

    operations = [
        migrations.AlterField(
            model_name='businessmodel',
            name='business_name',
            field=models.CharField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name='businessmodel',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='business.businesscategory'),
        ),
        migrations.AlterField(
            model_name='businessmodel',
            name='country',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='accounts.countrymodel'),
        ),
        migrations.AlterField(
            model_name='businessmodel',
            name='displayed_address',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='productcategory',
            name='business',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='business.businessmodel'),
        ),
    ]