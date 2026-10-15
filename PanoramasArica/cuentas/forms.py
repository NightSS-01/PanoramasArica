from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from .models import Usuario


class LoginForm(AuthenticationForm):
    username = forms.EmailField(
        label='Correo',
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'nombre@correo.com'}),
    )
    password = forms.CharField(
        label='Contraseña',
        widget=forms.PasswordInput(attrs={'class': 'form-control'}),
    )


class RegistroForm(UserCreationForm):
    class Meta:
        model = Usuario
        fields = ('first_name', 'email')
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['first_name'].label = 'Nombre'
        self.fields['first_name'].required = True
        self.fields['email'].label = 'Correo'
        self.fields['password1'].label = 'Contraseña'
        self.fields['password2'].label = 'Confirmar contraseña'
        for campo in self.fields.values():
            campo.widget.attrs['class'] = 'form-control'
    def save(self, commit=True):
        usuario = super().save(commit=False)
        usuario.username = usuario.email
        if commit:
            usuario.save()
        return usuario