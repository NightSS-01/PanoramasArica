from django.http import Http404
from django.shortcuts import render
from .datos import ACTIVIDADES


def inicio(request):
    return render(request, './inicio.html', {'actividades': ACTIVIDADES})


def detalle(request, id):
    for actividad in ACTIVIDADES:
        if actividad['id'] == id:
            return render(request, 'detalle.html', {'actividad': actividad})
    raise Http404("Actividad no encontrada")