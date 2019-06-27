import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Author } from '../author';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
  editAuthorForm: FormGroup;
  author: Author;
  title: string = "Edit: ";

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.editAuthorForm = this.authorService.authorForm();
    this.getAuthor();
  }

  getAuthor() {
    let id = this.authorService.getParamFromRoute(this.route);
    this.authorService.getAuthorById(id).subscribe(
      a => {
        this.author = a;
        this.patchValue(this.author);
      }
    )
  }

  patchValue(author: Author) {
    this.editAuthorForm.patchValue({
      name: author.name,
      username: author.username,
      address: {
        street: author.address.street,
        suite: author.address.suite,
        city: author.address.city,
        zip: author.address.zipcode
      }
    })
  }

  submitEditAuthor(){
    console.log("form value: ", this.editAuthorForm.value);
    this.checkValidity();
    console.log("form value: ", this.editAuthorForm.valid);
  }

  checkValidity() {
    if(this.editAuthorForm.valid){
      this.editAuthor(this.editAuthorForm.value);
    }
  }

  editAuthor(author: Author) {
    this.authorService.updateAuthor(author);
    this.authorService.goToAuthorList(this.router);
  }
}
