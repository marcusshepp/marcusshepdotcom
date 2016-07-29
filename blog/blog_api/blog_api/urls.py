from django.conf.urls import url, include
from django.contrib import admin

from main import urls as main_urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', main_urls)
]
