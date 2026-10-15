from django.contrib.auth import login
from django.contrib.auth.views import LoginView
from django.shortcuts import redirect, render

from .forms import LoginForm, RegistroForm


class IngresoView(LoginView):
    template_name = 'cuentas/login.html'
    authentication_form = LoginForm
    redirect_authenticated_user = True


def registro(request):
    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            usuario = form.save()
            login(request, usuario)
            return redirect('inicio')
    else:
        form = RegistroForm()
    return render(request, 'cuentas/registro.html', {'form': form})