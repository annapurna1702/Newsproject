import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectnewsComponent } from './correctnews/correctnews.component';
import { DeleteComponent } from './delete/delete.component';
import { UserentryComponent } from './userentry/userentry.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [{path:"",component:ViewadminComponent},{path:"userentry",component:UserentryComponent},{path:"viewuser",component:ViewuserComponent},{path:"accept",component:CorrectnewsComponent},{path:"deletenews",component:DeleteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
