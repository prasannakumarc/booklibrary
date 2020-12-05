import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegdataService } from '../regdata.service';
import { User } from '../user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user:User = new User();
  constructor(private service:RegdataService,private router:Router) { }

  ngOnInit() {
  }

  newUser():void
  {
     this.user= new User();
  }

  save()
  {
    this.service.addDatatoApi(this.user).subscribe(data=>{

      console.log(data);
      this.user=new User();
    },
    error=>console.log(error));
    this.router.navigate(['/userdata']);
  }

  onsubmit(){
    this.save();
  }
  back()
  {
    this.router.navigate(['/userdata']);
  }

}
