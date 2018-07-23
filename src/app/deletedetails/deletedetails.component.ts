import {Component, OnInit, ViewChild} from '@angular/core';

import {RequesterService} from '../requester.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Employeedetails} from '../employeedetails';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-deletedetails',
  templateUrl: './deletedetails.component.html',
  styleUrls: ['./deletedetails.component.css']
})
export class DeletedetailsComponent implements OnInit {
  display: String = 'none';
  @ViewChild(ModalComponent) modalComponent;
  
  employeedetails = new Employeedetails() ;
  submitted = false;

  constructor(
    private requesterService: RequesterService
  ) {}

  ngOnInit(): void {
    $( 'li' ).removeClass('active');
    $( '#delete' ).addClass('active');
  }
  delete(): void {
    this.requesterService.delete(this.employeedetails.id);
    this.openModal();
  }
 openModal() {
       this.modalComponent.display = 'block';
       this.modalComponent.message = 'Successfully deleted';
       this.modalComponent.title = 'Info';
    }
}
