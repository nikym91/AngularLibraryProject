import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/book/Book';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-book',
  templateUrl: './author-book.component.html',
  styleUrls: ['./author-book.component.scss']
})
export class AuthorBookComponent implements OnInit {
  @Input() authorId;
  books: Book[];
  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authorService.getBookByAuthorId(this.authorId).subscribe(
      b => {
        this.books = b;
      }
    )
  }

  goToBookDetail(id: number){
    this.authorService.goToBookDetail(this.router, id);
  }

}
