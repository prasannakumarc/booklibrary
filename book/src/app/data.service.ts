import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private http:HttpClient) { }

  datatoapi(book:object):Observable<object>{
    return this.http.post(`http://localhost:8080/book`,book);

  }

  dataFromapi():Observable<any>
  {
    return this.http.get(`http://localhost:8080/books`)
  }

  deleteBook(bookId:number):Observable<any>
  {
    return this.http.delete(`http://localhost:8080/book/${bookId}`);
    
  }

  getBookById(bookId:number): Observable<any>{
    return this.http.get(`http://localhost:8080/books/${bookId}`);
  }

  updateBook(bookId:number,value:any):Observable<object>{

    return this.http.put(`http://localhost:8080/book/${bookId}`,value);
  }
  
}
