import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-modifybook',
  templateUrl: './modifybook.component.html',
  styleUrls: ['./modifybook.component.css']
})
export class ModifybookComponent implements OnInit {

  books: Observable<Book[]>;
  constructor(private service:DataService,private router:Router) { 
    this.reloaddata();
  }

  ngOnInit() {
  }

  reloaddata()
  {
     let resp=this.service.dataFromapi();

     resp.subscribe(data=>this.books=data);
  }
  delete(bookId:number){
    this.service.deleteBook(bookId).subscribe(
      data=>{
        // console.log(data);
        // this.router.navigate(['/bookdata'])
        this.reloaddata();
      }
      
      )
      

      
      
    
  }
  update(bookId:number)
  {
    this.router.navigate(['bookupdatebyadmin',bookId]);
  }
  add()
  {
    this.router.navigate(['bookaddbyadmin']);
  }
  back()
  {
    this.router.navigate(['/userdata'])
  }

}
