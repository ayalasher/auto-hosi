from django.contrib import admin
from .models import  Patientdata, MedicalTest , Diagnosis , Customuser

# Register your models here.
admin.site.register(Patientdata)
admin.site.register(MedicalTest)
admin.site.register(Diagnosis)
admin.site.register(Customuser)
