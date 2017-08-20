import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LayoutService } from '../../layout/layout.service';
import { TokenService } from '../../token/token.service';

@Component({
  selector: 'sa-login-info',
  templateUrl: './login-info.component.html'
})
export class LoginInfoComponent implements OnInit {
  user: any;
  hasToken = this.tokenService.tokenNotExpired();

  constructor(
    private userService: UserService,
    private layoutService: LayoutService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.userService.getLoginInfo().subscribe(user => {
      this.user = user;
    });
  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle();
  }
}
