from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario

# Register your models here.
@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    list_display = ('email', 'first_name', 'rol', 'is_active', 'is_staff')
    list_filter = ('rol', 'is_active', 'is_staff')
    search_fields = ('email', 'first_name')
    ordering = ('email',)
    fieldsets = UserAdmin.fieldsets + (
        ('Rol en Panoramas Arica', {'fields': ('rol',)}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Datos de la cuenta', {'fields': ('email', 'first_name', 'rol')}),
    )