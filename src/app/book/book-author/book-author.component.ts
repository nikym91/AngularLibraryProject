import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.scss']
})
export class BookAuthorComponent implements OnInit {
  @Input() authorId;
  authorName: string;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookService.getAuthorByBookId(this.authorId).subscribe(
      a => {
        this.authorName = a.name;
        console.log(this.authorName)
      }
    );
  }

  goToAuthorDetail(id: number){
    this.bookService.goToAuthorDetail(this.router, id);
  }

}
