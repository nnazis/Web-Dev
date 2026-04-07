from django.urls import path
from .views import (ProductListCreateAPIView, ProductRetrieveUpdateDestroyAPIView, CategoryListAPIView, CategoryRetrieveAPIView, CategoryProductsListAPIView)

urlpatterns = [
    path('products/', ProductListCreateAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductRetrieveUpdateDestroyAPIView.as_view(), name='product-detail'),
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryRetrieveAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsListAPIView.as_view(), name='category-products'),
]