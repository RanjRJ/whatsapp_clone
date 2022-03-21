import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  ldrbackgroundColor = '#d6d7d9';
  ldrpercentage = '0%';

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.ldrbackgroundColor = '#00a884';
      this.ldrpercentage = '50%';
    }, 100);
  }

}
