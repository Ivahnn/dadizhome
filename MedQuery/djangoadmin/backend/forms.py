from django import forms
from .models import CustomUser

class SignupForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    password2 = forms.CharField(widget=forms.PasswordInput, label='Confirm Password')

    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password', 'password2']

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password2 = cleaned_data.get('password2')
        if password != password2:
            raise forms.ValidationError('Passwords must match.')
        return cleaned_data
