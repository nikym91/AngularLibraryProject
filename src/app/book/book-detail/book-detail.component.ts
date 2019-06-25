import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../Book';
import { Author } from 'src/app/author/author';
import { AuthorService } from 'src/app/author/author.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book = null;
  author: Author;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.getIdFromRoute();

  }

  getIdFromRoute() {
    let id: number = this.bookService.getIdFromRoute(this.route);
    this.getBookById(id);
  }

  getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(b => {
      this.book = b;
      this.getAuthorOfBook(b.authorId);
    });
  }

  getAuthorOfBook(id: number) {
    this.authorService.getAuthorById(id).subscribe(
      a => {
        this.author = a;
      }
    )
  }

  deleteBook(id: number){
    console.log("delete")
    if(confirm(`sei sicuro di voler eliminare definitivamente: ${this.book.title}?`)){
      this.bookService.deleteBook(id);
      this.goToBooksList();
    }
  }

  goToBooksList() {
    this.bookService.goToBooksList(this.router);
  }

  goBack() {
    this.bookService.goToBooksList(this.router);
  }

  goToAuthorDetail(id: number) {
    this.bookService.goToAuthorDetail(this.router, id);
  }
}
