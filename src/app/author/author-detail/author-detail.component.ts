import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Author } from '../author';
import { Book } from 'src/app/book/Book';
import { BookService } from 'src/app/book/book.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  author: Author;
  books: Book[];

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.GetIdFromRoute();
  }

  GetIdFromRoute() {
    let id = this.authorService.getParamFromRoute(this.route);
    this.getAuthorById(id);
  }

  getAuthorById(id: number) {
    this.authorService.getAuthorById(id).subscribe(
      a => {
        this.author = a;
        this.getBooksOfAuthor(this.author.id);
      }
    )
  }

  getBooksOfAuthor(id: number) {
     this.authorService.getBookByAuthorId(id).subscribe(
      b => {
        this.books = b;
      }
    )
  }

  goBack() {
    this.authorService.goToAuthorList(this.router);
  }

  goToBookDetail(id: number){
    this.bookService.goToBookDetail(this.router, id);
  }

  deleteAuthor(id: number){
    console.log("delete")
    if(confirm(`sei sicuro di voler eliminare definitivamente: ${this.author.name}?`)){
      this.authorService.deleteAuthor(id);
      this.authorService.goToAuthorList(this.router);
    }
  }
}
