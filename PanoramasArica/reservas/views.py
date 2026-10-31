from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from .datos_demo import RESERVAS_DEMO


@login_required
def mis_reservas(request):
    pestana = request.GET.get('pestana', 'proximas')
    if pestana not in ('proximas', 'historial'):
        pestana = 'proximas'

    proximas = [r for r in RESERVAS_DEMO if r['proxima']]
    historial = [r for r in RESERVAS_DEMO if not r['proxima']]

    return render(request, 'mis_reservas.html', {
        'pestana': pestana,
        'reservas': proximas if pestana == 'proximas' else historial,
        'total_proximas': len(proximas),
        'total_historial': len(historial),
    })