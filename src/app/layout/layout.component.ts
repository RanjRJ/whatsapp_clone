import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

}
