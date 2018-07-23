import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EmployeedetailsComponent} from './employeedetails/employeedetails.component';
import {InsertdetailsComponent} from './insertdetails/insertdetails.component';
import {UpdatedetailsComponent} from './updatedetails/updatedetails.component';
import {DeletedetailsComponent} from './deletedetails/deletedetails.component';

const routes: Routes = [
  {path: 'com-springmvc/dist', pathMatch: 'full', redirectTo: '/employeedetails'},
  {path: 'employeedetails', component: EmployeedetailsComponent},
  {path: 'insertdetails', component: InsertdetailsComponent},
  {path: 'updatedetails', component: UpdatedetailsComponent},
  {path: 'deletedetails', component: DeletedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [EmployeedetailsComponent, InsertdetailsComponent, UpdatedetailsComponent, DeletedetailsComponent];
}
