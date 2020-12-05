import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bookaddbyadmin',
  templateUrl: './bookaddbyadmin.component.html',
  styleUrls: ['./bookaddbyadmin.component.css']
})
export class BookaddbyadminComponent implements OnInit {

  book: Book = new Book();

  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
  }
  newBook():void{
    
    this.book= new Book();
  }
  save()
  {
    this.service.datatoapi(this.book).subscribe(data=>{
      console.log(data)
      this.book= new Book();
      
    },
    error=>console.log(error));
    this.router.navigate(['/modifybook']);
    
  }
  onsubmit(){
    this.save();
  }

  back()
  {
    this.router.navigate(['/modifybook'])
  }

}
