from django.contrib.auth.views import LogoutView
from django.urls import path

from . import views

app_name = 'cuentas'

urlpatterns = [
    path('login/', views.IngresoView.as_view(), name='login'),
    path('registro/', views.registro, name='registro'),
    path('salir/', LogoutView.as_view(), name='salir'),
]