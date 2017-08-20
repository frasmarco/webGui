import {Component, OnInit} from '@angular/core';
import {LoginInfoComponent} from '../../user/login-info/login-info.component';
import { TokenService } from '../../token/token.service';


@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  hasToken = this.tokenService.tokenNotExpired();

  constructor(private tokenService: TokenService ) {
  }

  ngOnInit() {
  }

}
