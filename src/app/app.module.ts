import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import {provideRoutes} from '@angular/router';
import {RequesterService} from './requester.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EmployeedetailsComponent} from './employeedetails/employeedetails.component';
import {InsertdetailsComponent} from './insertdetails/insertdetails.component';
import {UpdatedetailsComponent} from './updatedetails/updatedetails.component';
import {DeletedetailsComponent} from './deletedetails/deletedetails.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    InsertdetailsComponent,
    UpdatedetailsComponent,
    DeletedetailsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule, DataTablesModule, AppRoutingModule, HttpClientModule, FormsModule

  ],
  providers: [RequesterService],
  bootstrap: [AppComponent]
})
export class AppModule {}



