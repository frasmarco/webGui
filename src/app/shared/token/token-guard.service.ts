import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { TokenService } from './token.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.tokenService.getToken().map((token: string) => {
      if (token) {
        return true;
      } else {
        this.router.navigateByUrl('/');
        return false;
      }
    });
  }
}
