import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bookupdatebyadmin',
  templateUrl: './bookupdatebyadmin.component.html',
  styleUrls: ['./bookupdatebyadmin.component.css']
})
export class BookupdatebyadminComponent implements OnInit {
  bookId:number;
  book: Book;

  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { }

  ngOnInit() {
    this.book= new Book();
    this.bookId=this.route.snapshot.params['bookId'];
    this.service.getBookById(this.bookId).subscribe(data=>{
      console.log(data);
      this.book= data;
      
    },
    error=>console.log(error));
  }

  UpdateBook()
  {
    this.service.updateBook(this.bookId,this.book).subscribe(data=>{
      console.log(data);
      this.book= new Book();
      
    },
    error=>console.log(error));
    this.router.navigate(['/modifybook'])
    
  }
  onsubmit(){
    this.UpdateBook();
  }
  back(){
    this.router.navigate(['/modifybook'])
  }

}
