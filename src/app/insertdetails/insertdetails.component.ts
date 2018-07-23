import {Component, OnInit, ViewChild} from '@angular/core';

import {RequesterService} from '../requester.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Employeedetails} from '../employeedetails';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-insertdetails',
  templateUrl: './insertdetails.component.html',
  styleUrls: ['./insertdetails.component.css']
})
export class InsertdetailsComponent implements OnInit {
  display: String = 'none';
  @ViewChild(ModalComponent) modalComponent;

  employeedetails = new Employeedetails;
  submitted = false;
  constructor(private dataService: RequesterService) {}

  ngOnInit() {
    $( 'li' ).removeClass('active');
    $('#insert').addClass('active');
  }

  newCustomer(): void {
    this.submitted = false;
    this.employeedetails = new Employeedetails();
  }

  private save(): void {
    this.dataService.create(this.employeedetails);
    this.openModal();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  openModal() {
       this.modalComponent.display = 'block';
       this.modalComponent.message = 'Successfully added';
       this.modalComponent.title = 'Info';
    }
}
