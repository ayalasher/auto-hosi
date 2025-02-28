from django.shortcuts import render
from django.http import JsonResponse , HttpResponse
# from django.contrib.auth.models import User
import json
from django.contrib.auth import authenticate , login , logout
from .models import Patientdata , Diagnosis , MedicalTest , Customuser
from django.core.serializers import serialize
from rest_framework import status
from django_daraja.mpesa.core import MpesaClient
# Create your views here.
def greetings(request):
    return JsonResponse({"message":"greetings from the django app"})


# Hospital personnel......
def createuser(request):
    if request.method == "POST" :
        way = json.loads(request.body)
        username = way.get("username")
        useremail = way.get("useremail")
        password = way.get("password")
        role = way.get("userrole")
        newuser = Customuser.objects.create_user(username=username,useremail=useremail,password=password,role=role)
        newuser.save()
        return JsonResponse({"userdata":newuser})
    else:
        return JsonResponse({"message":"Auth error"})
    


def systemlogin(request):
    if request.method == "POST" :
        way = json.loads(request.body)
        username = way.get("username")
        userpassword = way.get("password")
        userrole = way.get("userrole")
        user = authenticate(request,username=username,password=userpassword)
        if user is not None :
            login(request,user)
            return JsonResponse({"username":user.USERNAME_FIELD,"role":user.role})
        else:
            JsonResponse({"message":"Invalid user credentials"})


def systemlogout(request):
    logout(request)
    return JsonResponse({"message":"SUCCESS","status":status.HTTP_200_OK})




def registerpatient(request):
    if request.method == "POST":
        way = json.loads(request.body)
        first_name = way.get("firtsname")
        lastname = way.get("firtsname")
        age = way.get("age")
        gender = way.get("gender")
        newuser = Patientdata(first_name=first_name,lastname=lastname,age=age,gender=gender)
        newuser.save()

        return JsonResponse({"new user":newuser,"status":status.HTTP_201_CREATED})

    else:
        return JsonResponse({"message":"Invalid HTTP request"})
    # Python comment
    

def getpatientslist(request):
    allusers= Patientdata.objects.all()
    data = serialize("json",allusers,fields=("first_name","last_name","age","gender"))
    return HttpResponse(data, content_type="application/json", status=status.HTTP_200_OK )



# For the doctor
def uploadpatientdiagnosis(request):
    if request.method == "POST":
        way = json.loads(request.body)
        patientdetails = way.get("patients_details")
        patientID = way.get("patientID")
        patientID = patientID-1
        patient_diagnosis = way.get("patient diagnosis")
        patient_tests = way.get("patient tests")
        currentpatient = Patientdata.objects.all()[patientID]
        patient_results= MedicalTest.objects.all()[currentpatient]
        uploadeddiagnosis = Diagnosis( patient_details=patientdetails ,diagnosis=patient_diagnosis,tests=patient_tests)
        uploadeddiagnosis.save()
        return HttpResponse(uploadeddiagnosis , content_type="application/json" , status=status.HTTP_201_CREATEDs)
    else:
        return JsonResponse({"message":"Invalid HTTP method"})
    



#function for the lab tech
def updatetestresults(request):
    way = json.loads(request.body)
    patientdata = way.get("patients_data")
    malariatestresults = way.get("Malaria_test_results")
    bactrerial_infection = way.get("bacterial_infection")
    viral_infetion = way.get("Viral_infection")
    Fungal_infetion = way.get("Funal_infection")
    red_blood_cells_conc = way.get("red_blood_cells")
    white_blood_cells_conc = way.get("white_blood_cells")
    platelets_conc = way.get("platelets_conc")
    # The results for disease components are going to be of boolean nature
    results_data = {
        'patient_details':patientdata,
        'malariatestresults':malariatestresults,
        'bactrerial_infection': bactrerial_infection ,
        'viral_infetion':viral_infetion,
        'Fungal_infetion':Fungal_infetion,
        'red_blood_cells_conc': red_blood_cells_conc ,
        'white_blood_cells_conc': white_blood_cells_conc ,
        'platelets_conc':platelets_conc
    }
    updatetestresultvariable = MedicalTest(**results_data)
    updatetestresultvariable.save()
    return JsonResponse({"message":"Items saved to the system ","status":status.HTTP_201_CREATED,"data":updatetestresultvariable})


# For the doctor
def obtaintestresults(request):
    medicaltestresults = MedicalTest.objects.all()
    data  = serialize("json",medicaltestresults,fields=("patient_details","malariatestresults","bactrerial_infection","viral_infetion","Fungal_infetion","red_blood_cells_conc","white_blood_cells_conc","platelets_conc"))
    return HttpResponse(data,content_type="application/json" , status=status.HTTP_200_OK )



def djangodarajafuntion(request):
    if request.method =="POST":
        way = json.loads("Phone number")
        patientphonenumber = way.get("phonenumber")
        patientamount = way.get("amountpaid")
        cl = MpesaClient()
        phone_number = patientphonenumber
        amount = patientamount
        account_reference = 'reference'
        transaction_desc = 'Description'
        callback_url = 'https://api.darajambili.com/express-payment'
        response = cl.stk_push(phone_number, amount, account_reference, transaction_desc, callback_url)
        return HttpResponse(response)






