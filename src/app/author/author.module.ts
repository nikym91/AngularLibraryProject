import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
   AuthorsListComponent,
   AuthorHomeComponent,
   AuthorDetailComponent,
   AuthorEditComponent
  ]
})
export class AuthorModule { }