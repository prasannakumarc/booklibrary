import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegdataService } from '../regdata.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin=new Admin();
  msg='';

  constructor(private router:Router,private service:RegdataService) { }

  ngOnInit() {
  }

  adminLogin()
  {
      this.service.adminLoginFromRemote(this.admin).subscribe(
        data=>{
          console.log("response received")
        this.router.navigate(['/userdata'])
        },
      error=>{
        console.log("exception occured");
     this.msg="Email or Password incorrect"
      })
  }
}
