import json
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from .forms import SignupForm
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)  # Parse JSON data
        form = SignupForm(data)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True, 'message': 'Signup successful'})
        else:
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)
    return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)


@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            user = authenticate(email=email, password=password)
            if user:
                login(request, user)
                return JsonResponse({'success': True, 'username': user.username, 'message': 'Login successful'})
            else:
                return JsonResponse({'success': False, 'message': 'Invalid credentials'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': 'Invalid JSON format in request body'}, status=400)
    return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)

def user_logout(request):
    logout(request)
    return JsonResponse({'success': True, 'message': 'Logout successful'})
