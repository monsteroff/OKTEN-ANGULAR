import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IComment} from '../interfaces/IComment';
import {ICommentDetails} from '../interfaces/ICommentDetails';
import {urls} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _url = urls.comments;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this._url)
  }

  getById(id: string): Observable<ICommentDetails> {
    return this.http.get<ICommentDetails>(this._url + '/' + id)
  }
}
