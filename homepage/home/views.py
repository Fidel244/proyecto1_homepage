from django.shortcuts import render, redirect
import yagmail
# Create your views here.


def mostrar_homepage(request):
    return render(request, 'index.html')

def envio_correo(request):

    Nombre = request.POST["name"]
    Apellido = request.POST['surname']
    Correo = request.POST["email"]

    yag = yagmail.SMTP(user="contactokarinauri@gmail.com", password="AzzwwX98")
    yag.send(to=["contactokarinauri@gmail.com"], subject="Alguien quiere contactarla", contents=[f"{Nombre} {Apellido} es un posible cliente... este es su correo: {Correo}"])
    yag.send(to=[Correo], subject="Karina Uriarte ya tiene tus datos!", contents=["Usted acaba de colocar sus datos en el formulario de contacto de Karina Uriarte con éxito."])
    return redirect('/home#contacto-section')
    