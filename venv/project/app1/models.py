from django.db import models
import datetime
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
    registration_date = models.DateField(auto_now=True)




class MedicalTest(models.Model):
    patient_details= models.ForeignKey(Patientdata, on_delete=models.CASCADE)
    malariatestresults = models.BooleanField(default=False)
    bactrerial_infection = models.BooleanField(default=False)
    viral_infetion = models.BooleanField(default=False)
    Fungal_infetion = models.BooleanField(default=False)
    red_blood_cells_conc = models.IntegerField()
    white_blood_cells_conc = models.IntegerField()
    platelets_conc = models.IntegerField()





class Diagnosis(models.Model):
    patient_details = models.ForeignKey(Patientdata,on_delete=models.CASCADE)
    diagnosis = models.TextField(max_length=10000)
    tests = models.TextField(max_length=10000)  
    testresults = models.ForeignKey(MedicalTest , on_delete=models.CASCADE)