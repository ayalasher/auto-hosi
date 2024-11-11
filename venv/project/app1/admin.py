from django.contrib import admin
from .models import  Patientdata, MedicalTest , Diagnosis

# Register your models here.
admin.site.register(Patientdata)
admin.site.register(MedicalTest)
admin.site.register(Diagnosis)
