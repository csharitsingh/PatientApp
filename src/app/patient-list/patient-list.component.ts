import { Component, OnInit } from '@angular/core';
import { IpatientList, PatientList , pateintD } from 'src/patient';
import { PatientListService } from '../Services/patient-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  PatientID:any="Patient ID"
  TitleID:any = "Patient List"
  PatientD = pateintD;
  selectedPateintList !:PatientList

  constructor(
    private _router : Router,
    private _activatedRoute : ActivatedRoute,
    private pService: PatientListService) { }
  
  /*changeSelection(record:IpatientList){
    record.$selected =!record.$selected
  }*/

  onSelect(record: PatientList):void{
    this.selectedPateintList = record;
   
    
  }

  ngOnInit(): void {
    this.pService.getUser().subscribe(
      (response:any)=>{this.patients = response;},
      (error) => {console.log("Error Occured: "+error);}
    )
    }
  

 //columns= ["PatientID","CentralID","HospitalID","Age","Date of Consent" , "Gender" ,"SEMID"];

 //rows=["patientID","centerID","HospitalID","age","dateofconsent" , "gender" ,"SEMID"];

 patients:PatientList[]=[];

  gotoDetail(record: any):void {
    if(record) {
      this._router.navigate(['.' , record.patientID], {relativeTo: this._activatedRoute});
    }else{
      this._router.navigate(['.', '0'], {relativeTo: this._activatedRoute})
    }

  }



}
