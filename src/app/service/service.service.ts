import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IBook } from '../model/IBook';



const API = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.httpClient.get(API);
  }

  getBookById(id : any): Observable<any> {
    return this.httpClient.get(API+  `/${id}`);
  }

  create(book: IBook): Observable<any> {

    return this.httpClient.post<IBook>(API,book);
  }

  update(book: IBook): Observable<any> {
    return this.httpClient.put<IBook>(API+`/${book.id}`,book);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<IBook>(API+`/${id}`);
  }
}
