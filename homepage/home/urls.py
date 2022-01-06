from django.urls import path
from . import views

app_name = "home"

urlpatterns = [
    path('home', views.mostrar_homepage),
    path('envio_correo', views.envio_correo)
]