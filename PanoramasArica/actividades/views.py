from django.shortcuts import render


def panel_proveedor(request):
    return render(request, 'actividades/panel.html')