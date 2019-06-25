import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-home',
  templateUrl: './author-home.component.html',
  styleUrls: ['./author-home.component.scss']
})
export class AuthorHomeComponent implements OnInit {

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToAuthorList(){
    this.authorService.goToAuthorList(this.router);
  }
}
