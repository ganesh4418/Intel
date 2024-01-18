import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'response-dialog',
  templateUrl: './response-dialog.component.html',
  styleUrls: ['./response-dialog.component.css']
})
export class ResponseDialogComponent {

  @Input() modalTitle: string = "";
  @Input() modalBody: string = "";

  @Output() modalClose = new EventEmitter();

  ngOnInit() {

  }

  close() {
    this.modalClose.emit();
  }
}
