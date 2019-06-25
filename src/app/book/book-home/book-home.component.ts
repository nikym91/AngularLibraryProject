import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.scss']
})
export class BookHomeComponent implements OnInit {

  constructor(
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  goToBookList(){
    this.bookService.goToBooksList(this.router);
  }

  goToBookAdd(){
    this.bookService.goToAuthorAdd(this.router);
  }

}
