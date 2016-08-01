from django.shortcuts import render

from django.http import JsonResponse

# Create your views here.
def foo(request, *a, **kw):
    return JsonResponse({"foo": "bar"})
    
    
def bar(request, *a, **kw):
    return HttpResponse("Marcus Was Here!")