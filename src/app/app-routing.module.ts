import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';
import { BookHomeComponent } from './book/book-home/book-home.component';
import { BooksListComponent } from './book/books-list/books-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { AuthorHomeComponent } from './author/author-home/author-home.component';
import { AuthorsListComponent } from './author/authors-list/authors-list.component';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookAddComponent } from './book/book-add/book-add.component';

const routes: Routes = [
  { path: 'home', component: MasterPageComponent },
  { path: 'books-home', component: BookHomeComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'book-detail/:id', component: BookDetailComponent},
  { path: 'book/:id/edit', component:BookEditComponent },
  { path: 'authors-home', component: AuthorHomeComponent},
  { path: 'authors-list', component: AuthorsListComponent},
  { path: 'author-detail/:id', component: AuthorDetailComponent},
  { path: '', component:MasterPageComponent },
  { path: '**', component: MasterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
