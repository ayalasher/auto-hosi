from django.shortcuts import render
from django.http import JsonResponse , HttpResponse
from django.contrib.auth.models import User
import json
from django.contrib.auth import authenticate , login , logout
from .models import Patientdata , Diagnosis
from django.core.serializers import serialize
from rest_framework import status
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




def registerpatient(request):
    if request.method == "POST":
        way = json.loads(request.body)
        first_name = way.get("firtsname")
        lastname = way.get("firtsname")
        age = way.get("age")
        gender = way.get("gender")
        newuser = Patientdata(first_name=first_name,lastname=lastname,age=age,gender=gender)
        newuser.save()
        return JsonResponse({"new user":newuser})

    else:
        return JsonResponse({"message":"Invalid HTTP request"})
    

def getpatientslist(reques):
    allusers= Patientdata.objects.all()
    data = serialize("json",allusers,fields=("first_name","last_name","age","gender"))
    return HttpResponse(data, content_type="application/json", status=status.HTTP_200_OK )






