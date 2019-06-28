import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookService } from '../book.service';
import { Author } from 'src/app/author/author';
import { AuthorService } from 'src/app/author/author.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {
  addBookForm: FormGroup;
  authors: Author[];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addBookForm = this.bookService.bookForm();
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe(
      a => {
        this.authors = a;
      }
    )
  }
  
  goToBookHome(){
    this.bookService.goToBooksHome(this.router)
  }

  submitAddBook() {
    console.log("form value: ", this.addBookForm.value);
    this.checkValidityForm();
    console.log("form validity: ", this.addBookForm.valid)
    
  }

  checkValidityForm() {
    if(this.addBookForm.valid){
      console.log("Book Add: ", this.addBookForm.value)
      this.AddBook(this.addBookForm.value);
    }
  }

  AddBook(book: Book) {
    this.bookService.addBook(book).subscribe(
      () => this.bookService.goToBooksList(this.router)
    );
  }
}
