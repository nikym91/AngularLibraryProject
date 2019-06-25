import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[];

  constructor(
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      b => {
        this.books = b;
        console.log("Books: ", this.books)
      }
    )
  }

  goBack() {
    this.bookService.goToBooksHome(this.router);
  }

  goToDetails(id: number){
    this.bookService.goToBookDetail(this.router, id);
  }

  goToEdit(id:number){
    this.bookService.goToBookEdit(this.router,id);
  }

}
