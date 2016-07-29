from django.conf.urls import url, include
from django.contrib import admin

import main

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', main.urls)
]
