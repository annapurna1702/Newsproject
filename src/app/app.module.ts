import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewuserComponent } from './viewuser/viewuser.component';

import { UserfinalComponent } from './userfinal/userfinal.component';
import { DeleteComponent } from './delete/delete.component';
import { CorrectnewsComponent } from './correctnews/correctnews.component';
import { UserentryComponent } from './userentry/userentry.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { NewspageComponent } from './newspage/newspage.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LogadminComponent } from './logadmin/logadmin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UnloggedComponent } from './unlogged/unlogged.component';
import { CurrnewshomeComponent } from './currnewshome/currnewshome.component';
import { PollComponent } from './poll/poll.component';
import { MalayalamComponent } from './malayalam/malayalam.component';
import { HiniComponent } from './hini/hini.component';
import { EnglishComponent } from './english/english.component';
import { NewsviewComponent } from './newsview/newsview.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewadminComponent,
    ViewuserComponent,
    UserfinalComponent,
    DeleteComponent,
    CorrectnewsComponent,
    UserentryComponent,
    HomeComponent,
    FeedbackComponent,
    LoginComponent,
    NewspageComponent,
    GuidelinesComponent,
    AboutusComponent,
    SignupComponent,
    AdminloginComponent,
    ContactusComponent,
    LogadminComponent,
    AdminpageComponent,
    UnloggedComponent,
    CurrnewshomeComponent,
    PollComponent,
    MalayalamComponent,
    HiniComponent,
    EnglishComponent,
    NewsviewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
