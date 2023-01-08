import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.model';
import jwt_decode from 'jwt-decode';
export interface AuthResponseData {
  email: 'string',
  tokens: {
    access: string;
    refresh: string;
  }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;
  private decoded: any;
  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders(
        {
         'Content-Type': 'application/json'
        }
      )
    }
    return this.http
      .post<any>(
        'http://localhost:8000/auth/register/',
        {
          email: email,
          password: password
        },
        httpOptions
      )
      .subscribe(
        (resData) => {
          console.log(resData);
        }
      );
  }

  login(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Content-Type': 'application/json'
      })
    }
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8000/auth/login/',
        {
          email: email,
          password: password
        },
        httpOptions
      )
      .subscribe(
        (resData) => {
          console.log(resData);          
          this.handleAuthentication(resData.tokens["access"],resData.tokens["refresh"]);
          localStorage.setItem("email",JSON.stringify(resData.email));
        }
      );
  }

  logout() {
    this.user.next(null!);
    this.router.navigate(['/auth']);
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('userid');
    localStorage.removeItem('email');
    localStorage.removeItem('profileid');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  autoLogin() {
    let access = JSON.parse(localStorage.getItem('access')!);
    this.decoded = jwt_decode(access);
    if (!access) {
      return;
    }
    const loadedUser = new User(access);

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = this.timeDifference(this.decoded.exp);
      this.autoLogout(expirationDuration*1000);
    }
  }

  private handleAuthentication(
    access: string,
    refresh: string
  ) {
    const decoded: any = jwt_decode(access);
    const expirationDuration = this.timeDifference(decoded.exp);
    const user = new User(access);
    this.user.next(user);
    this.autoLogout(expirationDuration*1000);
    console.log(decoded);
    localStorage.setItem('access', JSON.stringify(access));
    localStorage.setItem('refresh', JSON.stringify(refresh));
    localStorage.setItem('userid', JSON.stringify(decoded["user_id"]))
    this.router.navigate(["/auto"])
  }

  private timeDifference(date1:any) {
    let currentDate = new Date().getTime();
    var difference = date1 - currentDate/1000;
    var secondsDifference = Math.floor(difference);
    console.log(difference);
    return secondsDifference;
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

  get_token() {
    let token = JSON.parse(localStorage.getItem('token')!);
    return token
  }
}

