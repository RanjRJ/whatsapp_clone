import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HomeComponent} from "../pages/home/home.component";
import {MatDialogModule} from "@angular/material/dialog";
import { LoginComponent } from '../pages/login/login.component';
import { ModalComponent } from '../comcomponents/modal/modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from '../pages/register/register.component';
import { ForgetPasswordComponent } from '../pages/forget-password/forget-password.component';
import {LoaderComponent} from '../comcomponents/loader/loader.component';
import {MatButtonModule} from '@angular/material/button';
import {NotificationHighlistComponent} from '../comcomponents/notification-highlist/notification-highlist.component';
import {FileuploadDirective} from '../material/fileupload.directive';
import {MessageRowComponent} from '../comcomponents/message-row/message-row.component';
import {MatMenuModule} from '@angular/material/menu';
import {LabelNamesPipe} from '../pipes/label-names.pipe';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ModalComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    LoaderComponent,
    NotificationHighlistComponent,
    FileuploadDirective,
    MessageRowComponent,
    LabelNamesPipe
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatMenuModule
    ],
  entryComponents: [
    ModalComponent,
    LoaderComponent
  ]
})
export class LayoutModule { }
