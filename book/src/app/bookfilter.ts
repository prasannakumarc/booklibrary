import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { Book } from './book';

@Pipe({
    name:'bookfilter'
})
export class Bookfilter implements PipeTransform {
    transform(books:Book[]):Book[]{

        if(!books){
            return books;
        }

        // return books.filter(book=>
        //     book.bookname.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1);

    

}
}
