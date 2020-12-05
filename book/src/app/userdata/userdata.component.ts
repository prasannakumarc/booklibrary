import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegdataService } from '../regdata.service';
import { User } from '../user';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  users:any;
  userName:any
  constructor(private service:RegdataService,private route:Router) { 
    this.loadData();
  }

  ngOnInit() {
      
    
   }

  loadData()
  {
    let resp= this.service.getUserDataFromApi();

    resp.subscribe(data=>this.users=data);
  }
  add(){
    this.route.navigate(['/adduser']);
  }
  modifybook(){
    this.route.navigate(['/modifybook']);
  }

  logout()
  {
    this.route.navigate(['/adminlogin']);
  }

  delete(userId:number)
  {
    this.service.deleteUserrecord(userId).subscribe(data=>{
      // console.log(data);
      // this.route.navigate(['/userdata'])
      this.loadData();
    })
  }

  update(userId:number)
  {
    this.route.navigate(['/updateuser',userId]);
  }

  search(){
    if(this.userName==""){
      this.loadData();
   }
   else{
     this.users=this.users.filter(res=>{
       return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
     })
   }
}

}
