import { AbsoluteSourceSpan } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminnewsComponent } from './adminnews/adminnews.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CorrectnewsComponent } from './correctnews/correctnews.component';
import { CurrnewshomeComponent } from './currnewshome/currnewshome.component';
import { DeleteComponent } from './delete/delete.component';
import { EnglishComponent } from './english/english.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { HiniComponent } from './hini/hini.component';
import { HomeComponent } from './home/home.component';
import { LogadminComponent } from './logadmin/logadmin.component';
import { LoginComponent } from './login/login.component';
import { MalayalamComponent } from './malayalam/malayalam.component';
import { NewspageComponent } from './newspage/newspage.component';
import { NewsviewComponent } from './newsview/newsview.component';
import { SignupComponent } from './signup/signup.component';
import { UnloggedComponent } from './unlogged/unlogged.component';
import { UserentryComponent } from './userentry/userentry.component';
import { UserfinalComponent } from './userfinal/userfinal.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [{path:"",component:CurrnewshomeComponent},{path:"adminpost",component:AdminnewsComponent},{path:"newsview",component:NewsviewComponent},{path:"malayalam",component:MalayalamComponent},{path:"hindi",component:HiniComponent},{path:"english",component:EnglishComponent},{path:"userfinaladview",component:UserfinalComponent},{path:"unlog",component:UnloggedComponent},{path:"signup",component:SignupComponent},{path:"adminpage",component:AdminpageComponent},{path:"viewadmin",component:ViewadminComponent},{path:"aboutus",component:AboutusComponent},{path:"guideline",component:GuidelinesComponent},{path:"feedback",component:FeedbackComponent},{path:"contactus",component:ContactusComponent},{path:"login",component:LoginComponent},{path:"adminlogin",component:LogadminComponent},{path:"newspage",component:NewspageComponent},{path:"userentry",component:UserentryComponent},{path:"viewuser",component:ViewuserComponent},{path:"accept",component:CorrectnewsComponent},{path:"deletenews",component:DeleteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
