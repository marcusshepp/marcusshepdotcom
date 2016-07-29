from django.shortcuts import render
from django.http import JsonResponse

def main(req, *a, **kw):
    return JsonResponse({"bar":"foo"})
