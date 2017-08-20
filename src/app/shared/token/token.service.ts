import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TokenService {
  // Token is not meant to be accessed directly but using getToken()
  private token: string;
  private jwtHelper: JwtHelper;

  constructor(private http: Http) {
    this.jwtHelper = new JwtHelper();
    const currentToken = sessionStorage.getItem('token');
    if (currentToken && !this.jwtHelper.isTokenExpired(currentToken)) {
      this.token = currentToken;
    } else {
      this.refreshToken();
    }
  }

  refreshToken(): Observable<boolean> {
    return this.http.get('/auth/token').map((response: Response) => {
      // login successful if there's a jwt token in the response
      const token = response.json() && response.json().token;
      if (token) {
        // set token property
        this.token = token;

        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', token);

        // return true to indicate successful login
        return true;
      } else {
        // return false to indicate failed login
        return false;
      }
    });
  }

  getToken(): Observable<string> {
    if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
      return Observable.of(this.token);
    } else {
      return this.refreshToken().map((result: Boolean) => {
        if (result) {
          return this.token;
        } else {
          return null;
        }
      });
    }
  }

  /**
 * Checks for presence of token and that token hasn't expired.
 * For use with the @CanActivate router decorator and NgIf
 * Adapted from auth0/angular2-jwt to use the service's token, not directly the persisted one.
 * TODO / WARNING: does not refresh the token!
 */
  tokenNotExpired(): boolean {
    return this.token != null && !this.jwtHelper.isTokenExpired(this.token);
  }

  /**
 * Clears token from local storage and from the service to log user out.
 */
  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
  }
}
