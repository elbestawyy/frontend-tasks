import { Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor() { }

 ngOnInit(): void {
   
}

confirm = output<boolean>();

onConfirm() {
  this.confirm.emit(true);
}

onCancel() {
  this.confirm.emit(false);
}

}
