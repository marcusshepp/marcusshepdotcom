from django.contrib import admin
from django.urls import include, path

from b import urls as burls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(burls)),
]
