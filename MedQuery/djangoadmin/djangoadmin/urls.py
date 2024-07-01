from django.contrib import admin
from django.urls import path, include
from backend.views import user_login  # Import your login view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', include('backend.urls')),  # Assuming signup is handled in backend.urls
    path('login/', user_login, name='login'),  # Assuming user_login is your login view
    path('logout/', include('backend.urls')),  # Assuming logout is handled in backend.urls
    path('', user_login),  # Redirect root URL to login page
]
