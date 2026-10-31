from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('actividad/<int:id>/', views.detalle, name='detalle'),
]