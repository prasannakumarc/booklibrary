import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookComponent } from './book/book.component';
import { BookaddbyadminComponent } from './bookaddbyadmin/bookaddbyadmin.component';
import { BookdataComponent } from './bookdata/bookdata.component';
import { BookupdatebyadminComponent } from './bookupdatebyadmin/bookupdatebyadmin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModifybookComponent } from './modifybook/modifybook.component';
import { RegisterComponent } from './register/register.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserdataComponent } from './userdata/userdata.component';


const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'book',component:BookComponent},
{path:'contact',component:ContactComponent},
{path:'bookdata',component:BookdataComponent},
{path:'updatebook/:bookId',component:UpdatebookComponent},
{path:'updateuser/:userId',component:UpdateuserComponent},
{path:'userdata',component:UserdataComponent},
{path:'adduser',component:AdduserComponent},
{path:'modifybook',component:ModifybookComponent},
{path:'bookupdatebyadmin/:bookId',component:BookupdatebyadminComponent},
{path:'bookaddbyadmin',component:BookaddbyadminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
