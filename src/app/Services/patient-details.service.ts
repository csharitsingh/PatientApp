import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {
  url="http://localhost:3000/PatientDetailsArray"


  constructor(private http:HttpClient) {}
    patientsDetailsArray(){
      return this.http.get(this.url);
    }
   }

