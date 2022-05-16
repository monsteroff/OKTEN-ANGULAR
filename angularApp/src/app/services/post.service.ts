import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IPost} from '../interfaces/IPost';
import {IPostDetails} from '../interfaces/IPostDetails';
import {urls} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url = urls.posts;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this._url);
  }

  getById(id: string): Observable<IPostDetails> {
    return this.http.get<IPostDetails>(this._url + '/' + id);
  }
}
