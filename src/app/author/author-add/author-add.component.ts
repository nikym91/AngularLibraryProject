import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.scss']
})
export class AuthorAddComponent implements OnInit {

  title: string = "Aggiungi Autore";
  addAuthorForm: FormGroup;

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addAuthorForm = this.authorService.authorForm();
  }

  submitaddAuthor(){
    console.log("form: ", this.addAuthorForm.value)
    console.log("form: ", this.addAuthorForm.valid)
    this.checkValidity();
  }

  checkValidity() {
    if(this.addAuthorForm.valid){
      this.addAuthor();
    }
  }

  addAuthor() {
    this.authorService.addAuthor(this.addAuthorForm.value)
    .subscribe(
      () => this.goToAuthorsList()
    );
  }

  goToAuthorsList() {
    this.authorService.goToAuthorList(this.router);
  }
}
