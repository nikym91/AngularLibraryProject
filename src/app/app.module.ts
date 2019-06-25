import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { BookModule } from './book/book.module';
import { BookService } from './book/book.service';
import { AuthorModule } from './author/author.module';
import { AuthorService } from './author/author.service';

@NgModule({
   declarations: [
      AppComponent,
      MasterPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BookModule,
      AuthorModule
   ],
   providers: [
      BookService,
      AuthorService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
