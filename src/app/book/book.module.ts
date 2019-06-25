import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookHomeComponent } from './book-home/book-home.component';
import { BooksListComponent } from './books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BookAddComponent } from './book-add/book-add.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookHomeComponent,
    BooksListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookAddComponent,
  ]
})
export class BookModule { }
