import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  editBookForm: FormGroup;
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.editBookForm = this.bookService.bookForm();
  }

  goToBookList(){
    this.bookService.goToBooksList(this.router);
  }

}
