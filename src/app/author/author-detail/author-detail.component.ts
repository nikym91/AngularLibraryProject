import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Author } from '../author';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  author: Author;

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private route: ActivatedRoute
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
      }
    )
  }

  goBack() {
    this.authorService.goToAuthorList(this.router);
  }

}
