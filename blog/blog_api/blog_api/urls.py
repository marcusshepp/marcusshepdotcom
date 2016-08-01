from django.conf.urls import url
from django.contrib import admin

from main.views import (
    foo,
    bar,
)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    #main
    url(r'^bar/$', bar),
    url(r'^$', foo),
]
