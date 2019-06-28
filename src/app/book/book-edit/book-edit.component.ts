import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Book } from '../Book';
import { Author } from 'src/app/author/author';
import { AuthorService } from 'src/app/author/author.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  editBookForm: FormGroup;
  book: Book;
  author: Author;
  authors: Author[];
  authorId: number;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.editBookForm = this.bookService.bookForm();
    this.getIdFromRoute();
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe(
      a => {
        this.authors = a;
      }
    )
  }

  getIdFromRoute() {
    let id = this.bookService.getIdFromRoute(this.route);
    this.getBookById(id);
  }

  getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(
      b => {
        this.book = b;
        this.getAuthorByBookAuthorId(this.book);

      }
    );
  }

  getAuthorByBookAuthorId(book: Book) {
    this.bookService.getAuthorByBookAuthorId(book.bookId).subscribe(
      a => {
        this.author = a;
        this.patchValueForm(book, this.author);
      }
    )
  }

  patchValueForm(book: Book, author: Author) {
    this.editBookForm.patchValue({
      title: book.title,
      subtitle: book.subtitle,
      publisher: book.publisher,
      description: book.description,
      authorId: author.authorId
    })
  }

  goToBookList() {
    this.bookService.goToBooksList(this.router);
  }

  submitEditBook() {
    console.log("form value: ", this.editBookForm.value);
    this.checkValidityForm();
    console.log("form validity: ", this.editBookForm.valid)
    
  }

  checkValidityForm() {
    if(this.editBookForm.valid){
      this.editBook(this.editBookForm.value);
    }
  }

  editBook(book: Book) {
    const b = { ...this.book, ...book };
    this.bookService.updateBook(b)
    .subscribe(
      () => this.bookService.goToBooksList(this.router)
    );
    //
  }
}
