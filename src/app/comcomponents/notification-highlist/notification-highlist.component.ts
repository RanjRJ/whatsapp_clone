import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification-highlist',
  templateUrl: './notification-highlist.component.html',
  styleUrls: ['./notification-highlist.component.scss']
})
export class NotificationHighlistComponent implements OnInit {

  userData = null;
  ismouseover = false

  @Input() set data(value) {
    this.userData = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
