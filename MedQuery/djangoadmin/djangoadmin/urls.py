from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('backend.urls')), 
    path("accounts/", include("allauth.urls")),  
]

admin.site.index_title = "MedQuery Administration"
admin.site.site_header = "MedQuery: Your digital medical advisor"
admin.site.site_title = "MedQuery"