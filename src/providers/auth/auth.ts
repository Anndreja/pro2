import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface myData {
  status: boolean,
  message: string
}

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  private user = null;
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', this.loggedInStatus);
    if (!value)
      localStorage.removeItem('loggedIn');
  }
  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus);
  }
  setUser(data) {
    this.user = data;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  get getUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user;
  }
  get getUserId() {
    if (!!this.user)
      return this.user.id;
    else return null;
  }
  getUserDetails(username, password) {
    const body = new HttpParams()
      .set('username', username)
      .append('password', password);
    return this.http.post<myData>('/sonia-api/login', body);
  }

}
