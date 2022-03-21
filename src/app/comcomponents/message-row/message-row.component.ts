import {Component, Input, OnInit} from '@angular/core';
import {LabelNamesPipe} from '../../pipes/label-names.pipe';

@Component({
  selector: 'app-message-row',
  templateUrl: './message-row.component.html',
  styleUrls: ['./message-row.component.scss'],
  providers: [LabelNamesPipe]
})
export class MessageRowComponent implements OnInit {

  userMessage: any = null;
  ismouseover = false;

  @Input() set message(value) {
    this.userMessage = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
