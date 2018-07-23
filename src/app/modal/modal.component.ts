import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  display = 'none';
  title = 'default';
  message = 'default';

  constructor() {}

  ngOnInit() {
  }

  onCloseHandled() {
    this.display = 'none';
   // this.router.navigate(['./SomewhereElse']);
  }

}
