from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('cuentas/', include('cuentas.urls')),
<<<<<<< HEAD
    path('proveedor/', include('actividades.urls')),
    path('reservas/', include('reservas.urls')),
=======
>>>>>>> 259bbc8a6c66420c770da79a4ddd573f3297bf15
]
