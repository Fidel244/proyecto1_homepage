from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.


def mostrar_homepage(request):
    return render(request, 'index.html')