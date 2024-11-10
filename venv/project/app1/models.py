from django.db import models

# Create your models here.
class Patientdata(models.Model):
    first_name= models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    age = models.CharField(max_length=200)
    gender_choices =[
        ('M','Male') , 
        ('F','Female') ,
    ]
    gender = models.CharField(max_length=1,choices=gender_choices)



class Treatment(models.Model):
    patient_name = models.ForeignKey(Patientdata,on_delete=models.CASCADE)
    diagnosis = models.CharField(max_length=2500)
    tests = models.CharField(max_length=2500)
    testresults = models.CharField(max_length=2500)