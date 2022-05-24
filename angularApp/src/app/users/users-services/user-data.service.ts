import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this._url);
  }

  getById(id: string): Observable<UserModel>{
    return this.httpClient.get<UserModel>(this._url + '/' + id);
  }
}
