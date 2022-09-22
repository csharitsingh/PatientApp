import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientDetailsInterface } from 'src/patientDetail';
import { PatientDetailsService } from '../Services/patient-details.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patientdetails : PatientDetailsInterface = {
    patientID: 1,
    patientName:"Gojo",
    HospitalID : "AF321" ,
    dateofconsent : "19/09/2022",
    age:21,
    gender:"Male",
    SEMID:155,
    dailyCigarettesCount:5
  }
  patID !: PatientDetailsInterface

  constructor() { }

  ngOnInit(): void {
  }

  /*getPatient():void{
    const id = Number(this.route.snapshot.paramMap('patientID'));
    this.patientDetailsSevice.getPatient(id).subscribe()
  }*/


}
