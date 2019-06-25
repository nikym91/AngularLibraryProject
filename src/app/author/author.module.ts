import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorBookComponent } from './author-book/author-book.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
   AuthorsListComponent,
   AuthorHomeComponent,
   AuthorDetailComponent,
   AuthorBookComponent
  ]
})
export class AuthorModule { }