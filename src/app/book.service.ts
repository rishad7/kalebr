import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBookdata } from './bookdata';
import { Observable } from 'rxjs';
import { IAutocomplete } from './autocomplete';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _url: string;
  private rest_api_url = 'http://www.rishadkalebrproject.tk/';

  constructor(private http: HttpClient) { }

  // fetching a list of critically acclaimed books by sending a HTTP GET request
  getBookData(genre: any): Observable<IBookdata[]> {
    this._url = 'http://idreambooks.com/api/publications/recent_recos.json?key=87a4df24c1a3f60413ca13183bc2fc3f8edac7f3&slug=' + genre;
    return this.http.get<IBookdata[]>(this._url);
  }

  // Actually this API is not provided. By checking the entire code and find a way to autocomplete search. Where it is showing CORS header 'Access-Control-Allow-Origin' and hence i created rest api myself in php.
  getAutocompleteSearch(search_keyword: any): Observable<IAutocomplete[]> {
    this._url = this.rest_api_url + 'restapi/index.php?search_keyword=' + search_keyword;
    return this.http.get<IAutocomplete[]>(this._url);
  }

  // fetching data of the show mentions for the specified book
  getbookFeaturedInTvShows(search_keyword: any): Observable<any> {
    this._url = 'http://idreambooks.com/api/books/show_features.json?q=' + search_keyword + '&key=87a4df24c1a3f60413ca13183bc2fc3f8edac7f3';
    return this.http.get<any>(this._url);
  }

  // fetching data of  books featured in specified shows in the given time range
  getRecentlyFeaturedBooks(search_keyword: any): Observable<any> {
    this._url = 'http://idreambooks.com/api/shows/books_featured.json?key=87a4df24c1a3f60413ca13183bc2fc3f8edac7f3&shows=' + search_keyword;
    return this.http.get<any>(this._url);
  }

  // fetching critic reviews for a book by sending a HTTP GET request
  getCriticReviews(search_keyword: any): Observable<any> {
    this._url = 'http://idreambooks.com/api/books/reviews.json?q=' + search_keyword + '&key=87a4df24c1a3f60413ca13183bc2fc3f8edac7f3';
    return this.http.get<any>(this._url);
  }
}
