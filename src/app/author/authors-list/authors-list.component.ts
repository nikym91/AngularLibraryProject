import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[];

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authorService.getAllAuthors().subscribe(
      a => {
        this.authors = a;
      }
    );
  }

  goToDetails(id: number){
    this.authorService.goToAuthorDetail(this.router, id);
  }

  goToEditAuthor(id: number){
    this.authorService.goToAuthorEdit(this.router, id);
  }

  goBack(){
    this.authorService.goToAuthorHome(this.router);
  }

}
