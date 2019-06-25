import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
  editAuthorForm: FormGroup;
  author: Author;

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.editAuthorForm = this.authorService.authorForm();
  }

}
