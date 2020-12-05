import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { RegisterComponent } from './register/register.component';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegdataService {

  constructor(private http:HttpClient) { }

  regDatatoApi(regdata:User): Observable<any>
  {
    return this.http.post(`http://localhost:8080/addresgisteruser`,regdata);
  }

  addDatatoApi(addData:User):Observable<any>
  {
    return this.http.post(`http://localhost:8080/addresgisteruser`,addData);
  }


  
   
  loginuserFromRemote(user: User):Observable<any>{
    
    return this.http.post<any>(`http://localhost:8080/userlogin`,user);

  }
 
  adminLoginFromRemote(admin: Admin):Observable<any>
  {
    return this.http.post<any>(`http://localhost:8080/adminlogin`,admin);
  }
  

  getUserDataFromApi():Observable<any>
  {
     return this.http.get(`http://localhost:8080/getRegisterusers`);
  }

  deleteUserrecord(userId:number):Observable<any>
  {
    return this.http.delete(`http://localhost:8080/getRegisterusers/${userId}`);
  }

  getuserById(userId:number):Observable<any>
  {
    return this.http.get(`http://localhost:8080/getRegisterusers/${userId}`);
  }

  updateUser(userId:number,value:any):Observable<object>
  {
    return this.http.put(`http://localhost:8080/getRegisterusers/${userId}`,value);
  }

}
