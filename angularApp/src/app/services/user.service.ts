import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUser} from '../interfaces/IUser';
import {IUserDetails} from '../interfaces/IUserDetails';
import {urls} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = urls.users;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

  getById(id: string): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(this._url + '/' + id);
  }
}
