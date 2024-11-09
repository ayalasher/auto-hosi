from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
import json
from django.contrib.auth import authenticate , login , logout
# Create your views here.
def greetings(request):
    return JsonResponse({"message":"greetings from the django app"})


def createuser(request):
    if request.method == "POST" :
        way = json.loads(request.body)
        username = way.get("username")
        useremail = way.get("useremail")
        password = way.get("password")
        role = way.get("userrole")
        newuser = User.objects.create_user(username=username,useremail=useremail,password=password,first_name=role)
        newuser.save()
        return JsonResponse({"userdata":newuser})
    

def systemlogin(request):
    if request.method == "POST" :
        way = json.loads(request.body)
        username = way.get("username")
        userpassword = way.get("password")
        userrole = way.get("userrole")
        user = authenticate(request,username=username,password=userpassword)
        if user is not None :
            login(request,user)
            return JsonResponse({"username":user.USERNAME_FIELD,"role":userrole})
        else:
            JsonResponse({"message":"Invalid user credentials"})


def systemlogout(request):
    logout(request)


