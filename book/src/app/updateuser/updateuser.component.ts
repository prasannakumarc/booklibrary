import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegdataService } from '../regdata.service';
import { User } from '../user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userId:number;
  user:User;

  constructor(private service:RegdataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

    this.user=new User();
    this.userId=this.route.snapshot.params['userId'];
    this.service.getuserById(this.userId).subscribe(data=>{
      console.log(data);
      this.user=data;
    },
    error=>console.log(error));
  }
  
  updateUser()
  {
    this.service.updateUser(this.userId,this.user).subscribe(data=>{
      console.log(data)
      this.user=new User();
    },
    error=>console.log(error));
    this.router.navigate(['/userdata'])
  }
  onsubmit(){
    this.updateUser();
  }
  back()
  {
    this.router.navigate(['/userdata'])
  }

}
