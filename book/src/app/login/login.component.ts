import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RegdataService } from '../regdata.service';
import  {NgForm} from '@angular/forms';
import { User } from '../user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg='';
  
  

  constructor(private service: RegdataService, private route:Router) { }

  ngOnInit() {
  }

  // login(form)
  // {
  //   this.email= form.value.email;
  //   this.password=form.value.password;
  //   this.service.logintoapi(this.email, this.password).subscribe(data=>{

  //     console.log(data);
  //     // this.user= localStorage.setItem('userdata',data.)
  //   })
  // }
  login(){

    this.service.loginuserFromRemote(this.user).subscribe(
      data=>{console.log("response received")
      this.route.navigate(['/bookdata'])
    },
      error=>{console.log("exception occured");
     this.msg="Email or Password incorrect"
  }
    )

  }

}
