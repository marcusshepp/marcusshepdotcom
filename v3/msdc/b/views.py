import random
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods

def index(request):
    return render(request, 'base.html')

@require_http_methods(['DELETE'])
def delete(request, id=None):
    return HttpResponse(random.randint(0, 100))