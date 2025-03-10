from django.http import HttpResponse
from . import views
from django.urls import path

urlpatterns = [
    path( "" , views.greetings , name="greetings"  ),
    path("user/signup/", views.createuser ,name="user signup"),
    path("user/login/", views.systemlogin , name="user login"),
    path("user/logout/" , views.systemlogout , name="user logout"  ),
    path("patient/patientregistration/" , views.registerpatient  , name="Patient registration"  ),
    path("patient/patientslist/" , views.getpatientslist , name="Patients list"  ),
    path("uploadpatientsdiagnosis/", views.uploadpatientdiagnosis ,name="upload diagnosis" ),
    path("updatetestresults/" , views.updatetestresults ,name="upate test results" ),
    path("obtaintestresults",views.obtaintestresults , name="obtaintestresults"  ),
    path("djangodaraja/", views.djangodarajafuntion , name="Django daraja function" ),
    path("getpaymentdetails/",views.getpaymentdetails , name="get payment details"),
]