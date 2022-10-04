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
  recordId!:number;
  patientdetails : PatientDetailsInterface = {
    patientID: 11,
    patientName:"Gojo",
    HospitalID : "AF321" ,
    mobile: "635590351",
    dateofconsent : "19/09/2022",
    age:21,
    gender:"Male",
    SEMID:155,
    dailyCigarettesCount:5
  }
  patID !: PatientDetailsInterface

  constructor(
    private _activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    var id = this._activatedRoute.snapshot.paramMap.get("id");
    if(id){
      this.recordId = Number(id);
    }
  }

  /*getPatient():void{
    const id = Number(this.route.snapshot.paramMap('patientID'));
    this.patientDetailsSevice.getPatient(id).subscribe()
  }*/

  OnSave(){

  }

  OnCancel(){

  }

  OnBack(){
    
  }


}
