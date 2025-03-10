from django.shortcuts import render
from django.http import JsonResponse , HttpResponse
# from django.contrib.auth.models import User
import json
from django.contrib.auth import authenticate , login , logout
from .models import Patientdata , Diagnosis , MedicalTest , Customuser , Paymentdata
from django.core.serializers import serialize
from rest_framework import status
from django_daraja.mpesa.core import MpesaClient
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def greetings(request):
    return JsonResponse({"message":"greetings from the django app"})


# Hospital personnel......
@csrf_exempt
def createuser(request):
    if request.method == "POST" :
        way = json.loads(request.body)
        username = way.get("username")
        useremail = way.get("useremail")
        password = way.get("userpassword")
        role = way.get("userrole")
        newuser = Customuser.objects.create_user(username=username,email=useremail,password=password,role=role)
        newuser.save()
        result = Customuser.objects.get(email=useremail)
        return JsonResponse({"userdata": {
            "username":result.username ,
            "email":result.email,
            "role":result.role,
        } , "status":status.HTTP_201_CREATED})
    else:
        return JsonResponse({"message":"Auth error"})
    


@csrf_exempt
def systemlogin(request):
    if request.method == "POST" :
        way = json.loads(request.body)
        username = way.get("username")
        userpassword = way.get("userpassword")
        userrole = way.get("userrole")
        user = authenticate(request,username=username,password=userpassword)
        if user is not None :
            login(request,user)
            userdata = Customuser.objects.get(username=username)
            return JsonResponse({"userdata":{
                "username":userdata.username,
                "email":userdata.email,
                "role":userdata.role
            },"status":status.HTTP_200_OK})
        else:
            return  JsonResponse({"message":"Invalid user credentials"})
        
    # else:
    #     return JsonResponse({"message":"Error logging user in"})


@csrf_exempt
def systemlogout(request):
    logout(request)
    return JsonResponse({"message":"SUCCESS","status":status.HTTP_200_OK})



@csrf_exempt
def registerpatient(request):
    if request.method == "POST":
        way = json.loads(request.body)
        first_name = way.get("firstname")
        lastname = way.get("lastname")
        age = way.get("age")
        gender = way.get("gender")
        phone_number = way.get("phone_number")
        newuser = Patientdata(first_name=first_name,last_name =lastname,age=age,gender=gender , phone_number =phone_number )
        newuser.save()
        usersaved = Patientdata.objects.get(first_name=first_name,last_name =lastname)
        return JsonResponse({"new user": {
            "first_name":usersaved.first_name,
            "last_name":usersaved.last_name,
            "age ":usersaved.age,
            "gender":usersaved.gender, 
        } ,"status":status.HTTP_201_CREATED})

    else:
        return JsonResponse({"message":"Invalid HTTP request"})
    # Python comment
    

# get patients data....
@csrf_exempt
def getpatientslist(request):
    # print("Here")
    allusers= Patientdata.objects.all()
    data = serialize("json",allusers,fields=("first_name","last_name","age","gender","phone_number"))
    return HttpResponse(data, content_type="application/json", status=status.HTTP_200_OK )


@csrf_exempt
def patientserach(request):
    if request.method == "GET":
        way = json.loads(request.body)
        first_name = way.get("firstname")
        last_name = way.get("firstname")
        Singlepatient = Patientdata.objects.get(first_name=first_name, last_name=last_name)
        data = serialize("json" , Singlepatient , fields=("first_name" , "last_name" , "age"  , "gender" ,"registration_date " , "phone_number" ) )
        return HttpResponse(data , content_type="application/json" , status = status.HTTP_200_OK)
    else:
        return JsonResponse({"message":"Invaid HTTP method"})



# For the doctor
@csrf_exempt
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
@csrf_exempt
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
        # 'patient_details':patientdata,
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


# For the doctor and other  wokers...
@csrf_exempt
def obtaintestresults(request):
    medicaltestresults = MedicalTest.objects.all()
    data  = serialize("json",medicaltestresults,fields=("patient_details","malariatestresults","bactrerial_infection","viral_infetion","Fungal_infetion","red_blood_cells_conc","white_blood_cells_conc","platelets_conc"))
    return HttpResponse(data,content_type="application/json" , status=status.HTTP_200_OK )



# payments intergration
# Prompt user payment....
@csrf_exempt
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


@csrf_exempt
def getpaymentdetails(request):
    if request.method =="GET" :
        detailsway = json.loads(request.body)
        patientid = detailsway.get("patient_ID")
        # Get payment details for the user...
        paymentdetails = Patientdata.objects.all()[patientid]
        balance = paymentdetails.totalbill - paymentdetails.amountpaid
        data = serialize("json",paymentdetails,fields=("patients_details","totalbill","amountpaid",balance))
        return HttpResponse(data, content_type="application/json" , status=status.HTTP_200_OK )
    else:
        return JsonResponse({"message":"Invalid HTTP method"})





