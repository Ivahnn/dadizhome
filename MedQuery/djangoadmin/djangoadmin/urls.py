from django.contrib import admin
from django.urls import path, include   
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..'))

from backend.views import front

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", front, name="front"),
    path('app/', include('backend.urls')),
]

admin.site.index_title = "MedQuery Administration"
admin.site.site_header = "MedQuery: Medisina medisina medisina -because"
admin.site.site_title = "MedQuery"
