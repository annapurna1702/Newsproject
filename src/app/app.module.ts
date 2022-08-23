import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { FormsModule } from '@angular/forms';
import { UserfinalComponent } from './userfinal/userfinal.component';
import { DeleteComponent } from './delete/delete.component';
import { CorrectnewsComponent } from './correctnews/correctnews.component';
import { UserentryComponent } from './userentry/userentry.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewadminComponent,
    ViewuserComponent,
    UserfinalComponent,
    DeleteComponent,
    CorrectnewsComponent,
    UserentryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
