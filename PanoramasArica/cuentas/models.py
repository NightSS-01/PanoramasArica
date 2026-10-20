from django.contrib.auth.models import AbstractUser
from django.db import models

# AbstractUser ya trae contraseña cifrada, nombres, sesiones, permisos
class Usuario(AbstractUser):
    class Rol(models.TextChoices):
        USUARIO = 'usuario', 'Usuario'
        PROVEEDOR = 'proveedor', 'Proveedor'
        ADMINISTRADOR = 'administrador', 'Administrador'

    email = models.EmailField(unique=True) # evita que dos cuentas se creen con el mismo correo
    rol = models.CharField(max_length=20, choices=Rol.choices, default=Rol.USUARIO) # esto hace que toda cuenta nueva se cree como Usuario. para proveedor y administrador lo asignaremos aparte.

    USERNAME_FIELD = 'email' # hace que se inicie sesión con el correo
    REQUIRED_FIELDS = ['username'] #mantiene username como dato interno obligatorio. No se le mostrara al usuario. en el registro lo rellenamos con el correo