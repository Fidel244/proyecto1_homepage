from django.urls import path
from . import views

app_name = "home"

urlpatterns = [
    path('home', views.mostrar_homepage, name="mostrar_page")
]