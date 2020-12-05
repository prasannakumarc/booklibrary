import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book = new Book();
  submitted=false;
  

  constructor(private ob:FormBuilder,private service:DataService,private router:Router) { }

  
  ngOnInit() {
    // this.bookForm=this.ob.group({
    //   bookName:this.ob.control('',[Validators.required]),
    //   bookAuther:this.ob.control('',[Validators.required]),
    //   bookTitle:this.ob.control('',[Validators.required]),
    //   bookCategory:this.ob.control('',[Validators.required]),
    //   bookPublisherName:this.ob.control('',[Validators.required]),
    //   bookStatus:this.ob.control('',[Validators.required])

    // })
  }
  // postDatatoservice(bookForm)
  // {
  //    this.service.datatoapi(bookForm.value).subscribe(

  //     // data=> console.log('book added!',data),
  //     // error=> console.error('error',error)
      
  //       data=>{
  //         console.log(data)
  //         this.gotolist();
  //       }
    
  //    );
    
     
  // }

  newBook():void{
    this.submitted=false;
    this.book= new Book();
  }

  save()
  {
    this.service.datatoapi(this.book).subscribe(data=>{
      console.log(data)
      this.book= new Book();
      
    },
    error=>console.log(error));
    this.router.navigate(['/bookdata']);
    
  }

  onsubmit(){
    this.submitted=true;
    this.save();
  }

  back()
  {
    this.router.navigate(['/bookdata']);
  }

  
  // add()
  // {
  //   this.router.navigate(['/bookdata']);
  // }

  

}
