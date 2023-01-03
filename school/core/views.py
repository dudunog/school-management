from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import get_user_model
from django.core import serializers


# Create your views here.
def index(request):
  User = get_user_model()
  users = serializers.serialize('json', User.objects.all())
  return HttpResponse(users, content_type='application/json')
