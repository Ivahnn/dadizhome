from django.shortcuts import redirect
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from .forms import SignupForm
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        print(request.POST)  # Debugging: Check what data is received in request.POST
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True, 'message': 'Signup successful'})
        else:
            print(form.errors)  # Debugging: Check form validation errors
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)
    return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)


@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return JsonResponse({'success': True, 'message': 'Login successful'})
        return JsonResponse({'success': False, 'message': 'Invalid credentials'}, status=400)
    return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)

def user_logout(request):
    logout(request)
    return JsonResponse({'success': True, 'message': 'Logout successful'})
