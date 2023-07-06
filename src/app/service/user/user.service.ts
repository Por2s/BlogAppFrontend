import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserRequest} from "../../model/user.request";
import {UserRegister} from "../../model/user.register";
import {UserResponse} from "../../model/user.response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public loginUser(userLogin: UserRequest):Observable<UserResponse> {
    return this.http.post<UserResponse>(this.usersUrl + '/login', userLogin);
  }

  public save(userRegister: UserRegister): Observable<boolean> {
    return this.http.post<boolean>(this.usersUrl + '/register', userRegister);
  }

  public getAll(): Observable<UserRegister[]> {
    return this.http.get<UserRegister[]>(this.usersUrl);
  }

  public getById(userId: number): Observable<UserRegister> {
    return this.http.get<UserRegister>(this.usersUrl + '/' + userId);
  }
}
