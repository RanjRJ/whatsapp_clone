import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalComponent} from "../../comcomponents/modal/modal.component";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.matDialog.closeAll();
    const modalConfig = new MatDialogConfig();
    modalConfig.width = 'auto';
    modalConfig.minWidth = '400px';
    modalConfig.id = 'login';
    modalConfig.data = {
      type: 'login'
    };

    const dialog = this.matDialog.open(ModalComponent, modalConfig);
  }

}
