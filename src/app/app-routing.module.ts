import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {path:'',redirectTo:'patientlist',pathMatch:'full'},
  {path:'patientlist',component:PatientListComponent},
  {path:'patientdetails',component:PatientDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
