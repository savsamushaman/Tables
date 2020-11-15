from django.db import models

from accounts.models import CustomUser
from business.models import ProductModel, TableModel, BusinessModel

ORDER_STATUS_CHOICES = (
    ('U', 'Unplaced'),
    ('PL', 'Placed'),
    ('S', 'Serving'),
    ('P', 'Paid')
)


class OrderModel(models.Model):
    customer = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING)
    business = models.ForeignKey(BusinessModel, on_delete=models.DO_NOTHING)
    table = models.ForeignKey(TableModel, on_delete=models.DO_NOTHING)
    date_ordered = models.DateTimeField(auto_now_add=True)
    status = models.CharField(choices=ORDER_STATUS_CHOICES, default='Unplaced', max_length=2)
    total = models.DecimalField(max_digits=20, decimal_places=2, default=0)

    def __str__(self):
        return f'OrderId: {self.id} / Table: {self.table} / Customer: {self.customer}'


class OrderItem(models.Model):
    product = models.ForeignKey(ProductModel, on_delete=models.CASCADE)
    order = models.ForeignKey(OrderModel, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def total_price(self):
        return self.quantity * self.product.price

    def __str__(self):
        return f'{self.product}'
