import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { TokenService } from './token.service';

@Injectable()
export class TokenGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate() {
    if (this.tokenService.tokenNotExpired()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
