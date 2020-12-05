import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Book } from '../book';
import { DataService } from '../data.service';


@Component({
  selector: 'app-bookdata',
  templateUrl: './bookdata.component.html',
  styleUrls: ['./bookdata.component.css']
})
export class BookdataComponent implements OnInit {

  books: any
  bookName:any;
  
  constructor(private service:DataService,private router:Router) {
    this.reloaddata();
   }

  ngOnInit() {
    // let resp=this.service.dataFromapi();

    //  resp.subscribe((data)=>this.books=data);
    // this.reloaddata();
    // let resp=this.service.dataFromapi();

    // resp.subscribe((data)=>this.books=data);

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
    this.router.navigate(['updatebook',bookId]);
  }

  add()
  {
    this.router.navigate(['book'])
  }
  logout()
  {
    this.router.navigate(['/login'])
  }
  
  search(){
      if(this.bookName==""){
        this.reloaddata();
     }
     else{
       this.books=this.books.filter(res=>{
         return res.bookName.toLocaleLowerCase().match(this.bookName.toLocaleLowerCase());
       })
     }
  }
  
  
}
