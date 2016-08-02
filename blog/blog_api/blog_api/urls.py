from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from main.views import foo, bar

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', foo),
    url(r'^bar/$', bar),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
