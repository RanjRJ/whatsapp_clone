import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MaterialModule } from './material/material.module';
import { LoaderComponent } from './comcomponents/loader/loader.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducers/login.reducers';
import {EffectsModule} from '@ngrx/effects';
import {appEffects} from './store/effects/app.effects';
import {HttpClientModule} from '@angular/common/http';
import { NotificationHighlistComponent } from './comcomponents/notification-highlist/notification-highlist.component';
import { MessageRowComponent } from './comcomponents/message-row/message-row.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot(appEffects)
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
