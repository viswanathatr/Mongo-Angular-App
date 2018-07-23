import {Component, OnInit, ViewChild} from '@angular/core';

import {RequesterService} from '../requester.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Employeedetails} from '../employeedetails';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  display: String = 'none';
  @ViewChild(ModalComponent) modalComponent;

  employeedetails = new Employeedetails();
  submitted = false;

  constructor(
    private requesterService: RequesterService
  ) {}

  ngOnInit(): void {
      $( 'li' ).removeClass('active');
    $( '#update' ).addClass('active');
  }

  onSubmit(): void {
    this.submitted = true;
    this.requesterService.update(this.employeedetails);
    this.openModal();
  }
openModal() {
       this.modalComponent.display = 'block';
       this.modalComponent.message = 'Successfully updated';
       this.modalComponent.title = 'Info';
    }

}
