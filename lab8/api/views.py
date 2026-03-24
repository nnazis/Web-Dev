from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.values().get(id=id)
        return JsonResponse(product, safe=False)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)


def category_list(request):
    categories = list(Category.objects.values())
    return JsonResponse(categories, safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.values().get(id=id)
        return JsonResponse(category, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = list(category.products.values())
        return JsonResponse(products, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)