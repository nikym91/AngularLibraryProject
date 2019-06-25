import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from './Book';
import { Router, ActivatedRoute } from '@angular/router';
import { Author } from '../author/author';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private urlBook: string = '../assets/data/books.json';
  private urlAuthor: string = '../assets/data/authors.json';
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.urlBook).pipe(
      catchError(this.handleError)
    );
  }

  getBookById(id: number): Observable<Book> {
    return this.getAllBooks().pipe(
      map((book: Book[]) => book.find(b => b.id == id))
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  updateBook(book: Book) {
    console.log("edit: ", book);
    /*
    P.S : deve ritornare un ": Observable<Book>"   
    const url = `${this.urlBook}/${book.id}`;
    return this.http.put<Book>(url, book, this.httpOptions)
      .pipe(
        tap(() => console.log('updateBook: ' + book.id)),
        // Return the Book on an update
        map(() => book),
        catchError(this.handleError)
      );*/
  }

  addBook(book: Book) {
    console.log("add book: ", JSON.stringify(book));
    //P.S : deve ritornare un ": Observable<Book>"   
    //return this.http.post<Book>(this.urlBook, book, this.httpOptions);
  }

  deleteBook(id: number) {
    console.log("delete: ", id);
    /*
    P.S : deve ritornare un ": Observable<{}>"  
    const url = `${this.urlBook}/${id}`; 
    return this.http.delete<Book>(url, this.httpOptions)
      .pipe(
        tap(data => console.log('deleteBook: ' + id)),
        catchError(this.handleError)
      );*/
  }

  getAuthorByBookAuthorId(id: number): Observable<Author> {
    return this.http.get<Author[]>(this.urlAuthor).pipe(
      map((author: Author[]) => author.find(a => a.id == id)),
      catchError(this.handleError)
    )
  }

  getIdFromRoute(route: ActivatedRoute): number {
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      return +id;
    }
  }

  bookForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      publisher: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
    })
  }

  goToBooksHome(router: Router) {
    router.navigate(['/books-home']);
  }

  goToBooksList(router: Router) {
    router.navigate(['/books-list']);
  }

  goToAuthorAdd(router: Router) {
    router.navigate(['/book-add']);
  }

  goToBookEdit(router: Router, id: number) {
    router.navigate(['/book', id, 'edit']);
  }

  goToBookDetail(router: Router, id: number) {
    router.navigate(['/book-detail', id]);
  }

  goToAuthorDetail(router: Router, id: number) {
    router.navigate(['/author-detail', id]);
  }
}
