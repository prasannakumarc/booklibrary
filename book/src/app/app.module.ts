import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookdataComponent } from './bookdata/bookdata.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ModifybookComponent } from './modifybook/modifybook.component';
import { BookupdatebyadminComponent } from './bookupdatebyadmin/bookupdatebyadmin.component';
import { BookaddbyadminComponent } from './bookaddbyadmin/bookaddbyadmin.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminloginComponent,
    BookComponent,
    ContactComponent,
    HeaderComponent,
    BookdataComponent,
    UpdatebookComponent,
    UserdataComponent,
    UpdateuserComponent,
    AdduserComponent,
    ModifybookComponent,
    BookupdatebyadminComponent,
    BookaddbyadminComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
        
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
