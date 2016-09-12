from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

from main.views import (
    ArticleViewSet, 
    CommentViewSet,
    CategoryViewSet,
)


router = DefaultRouter()
router.register("articles", ArticleViewSet)
router.register("categories", CategoryViewSet)
router.register("comments", CommentViewSet)

urlpatterns = [
    url(r'^foo/', admin.site.urls),
    url(r'^api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
