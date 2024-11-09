from django.http import HttpResponse
from . import views
from django.urls import path

urlpatterns = [
    path( "" , views.greetings , name="greetings"  ),
    path("signup/", views.createuser ,name="user signup"),
    path("userlogin/", views.systemlogin , name="user login"),
    path("logout/" , views.systemlogout , name="user logout"  )
]