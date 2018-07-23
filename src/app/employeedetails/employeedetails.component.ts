import {Component, OnInit} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import {Observable} from 'rxjs/Observable';
import {RequesterService} from '../requester.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Employeedetails} from '../employeedetails';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  obsTextMsg: Observable<string>;
  obsEmployees: Observable<Employeedetails[]>;
  employees: Employeedetails[];

  employeeName: string;
  dtOptions: {};

  constructor(private requesterService: RequesterService) {}

  ngOnInit() {
    $( 'li' ).removeClass('active');
    $( '#detail' ).addClass('active');

   // this.getEmployees();

    $('#employeeTable').DataTable( {
        'ajax': {
            'url': 'http://172.28.102.69:7001/com-springmvc/user',
            'dataSrc': ''

        },
        'columns': [
            { 'data': 'id' },
            { 'data': 'name' }
        ]
        //,
         //'iDisplayLength': 25

    } );
  }


  getEmployees() {
    this.obsEmployees = this.requesterService.getEmployees();
  }
}
