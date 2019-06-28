import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Author } from './author';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../book/Book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  
  private urlAuthor: string = 'https://localhost:44319/api/Authors';//'../assets/data/authors.json';
  private urlBook: string = 'https://localhost:44319/api/Books';//'../assets/data/books.json';
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.urlAuthor).pipe(
      catchError(this.handleError)
    )
  }

  getAuthorById(id: number): Observable<Author> {
    return this.getAllAuthors().pipe(
      map((authors: Author[]) => authors.find(a => a.authorId == id))
    )
  }

  getAuthorByName(text: string): Observable<Author> {
    return this.getAllAuthors().pipe(
      map((authors: Author[]) => authors.find(a => a.name == text))
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

  getParamFromRoute(route: ActivatedRoute): number {
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      return +id;
    }
  }

  authorForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      username : ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        suite: ['', Validators.required],
        city: ['', Validators.required],
        zipcode: ['', Validators.required]
      })
    })
  }
  
  updateAuthor(author: Author): Observable<Author> {
    console.log("edit: ", author);
    /*
    P.S : deve ritornare un ": Observable<Author>" */ 
    const url = `${this.urlAuthor}/${author.authorId}`;
    return this.http.put<Author>(url, author, this.httpOptions)
      .pipe(
        tap(() => console.log('updateAuthor: ' + author.authorId)),
        // Return the Author on an update
        map(() => author),
        catchError(this.handleError)
      );
  }

  addAuthor(author: Author): Observable<Author> {
    console.log("add Author: ", JSON.stringify(author));
    //P.S : deve ritornare un ": Observable<Author>"   
    return this.http.post<Author>(this.urlAuthor, author, this.httpOptions);
  }

  deleteAuthor(id: number): Observable<{}> {
    console.log("delete: ", id);
    /*
    P.S : deve ritornare un ": Observable<{}>" */ 
    const url = `${this.urlAuthor}/${id}`; 
    return this.http.delete<Author>(url, this.httpOptions)
      .pipe(
        tap(data => console.log('deleteAuthor: ' + id)),
        catchError(this.handleError)
      );
  }

  getBookByAuthorId(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(this.urlBook).pipe(
      map((books: Book[]) => books.filter(b => b.authorId == id))
    )
  }

  goToAuthorHome(router: Router) {
    router.navigate(['/authors-home']);
  }

  goToAuthorList(router: Router) {
    router.navigate(['/authors-list']);
  }  

  goToAuthorEdit(router: Router, id: number) {
    router.navigate(['/author', id, 'edit']);
  }

  goToAuthorDetail(router: Router, id: number) {
    router.navigate(['/author-detail', id]);
  }

  goToBookDetail(router: Router, id: number) {
    router.navigate(['/book-detail', id]);
  }

  goToAuthorAdd(router: Router) {
    router.navigate(['/author-add']);
  }

}
