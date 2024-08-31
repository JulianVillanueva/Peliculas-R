from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PeliculasViewSet

router = DefaultRouter()
router.register(r'peliculas', PeliculasViewSet)

urlpatterns = [
    path('api/', include(router.urls))
]
