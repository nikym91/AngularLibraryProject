import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book = null;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getIdFromRoute();
  }

  getIdFromRoute(){
    let id: number = this.bookService.getIdFromRoute(this.route);
    this.getBookById(id);
  }

  getBookById(id: number){
    this.bookService.getBookById(id).subscribe(b => {
      this.book = b;
    });
  }

  goBack() {
    this.bookService.goToBooksList(this.router);
  }

}
