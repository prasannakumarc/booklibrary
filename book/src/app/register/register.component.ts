import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegdataService } from '../regdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm= new FormGroup({})

  msg='';

  constructor(private ob:FormBuilder,private service:RegdataService,private route:Router) { }

  ngOnInit() {
    this.regForm=this.ob.group({
      firstName:this.ob.control('',[Validators.required]),
      lastName:this.ob.control('',[Validators.required]),
      userName:this.ob.control('',[Validators.required]),
      gender:this.ob.control('',[Validators.required]),
      email:this.ob.control('',[Validators.required]),
      password:this.ob.control('',[Validators.required])
    })
  }

  postDatatoservice(regForm){
    this.service.regDatatoApi(regForm.value).subscribe(
      data=>{console.log("response received")
      this.route.navigate(['/login'])
      // this.msg="User register Successfully"
    }
    )


  }

}
