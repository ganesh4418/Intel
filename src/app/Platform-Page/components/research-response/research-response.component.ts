import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-research-response',
  templateUrl: './research-response.component.html',
  styleUrls: ['./research-response.component.css']
})
export class ResearchResponseComponent {


  @Input() modalTitle: string = "";
  @Input() modalBody: string = "";

  @Output() modalClose = new EventEmitter();

  ngOnInit() {

  }
}
