from django.shortcuts import render

def inicio(request):
    return render(request, './inicio.html')
def acerca(request):
    return render(request, 'acerca.html')