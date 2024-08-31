from rest_framework import viewsets
from .models import Peliculas
from .serializers import PeliculasSerializer

# Create your views here.
class PeliculasViewSet(viewsets.ModelViewSet):
    queryset = Peliculas.objects.all()
    serializer_class = PeliculasSerializer