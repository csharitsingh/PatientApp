import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { PatientList } from 'src/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientListService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/PatientList"
  
  
  getUser(){
    return this.http.get<PatientList[]>(this.url)
  }
}
