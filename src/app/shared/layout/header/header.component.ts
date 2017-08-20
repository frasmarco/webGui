import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { TokenService } from '../../token/token.service';

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  searchMobileActive = false;
  hasToken = this.tokenService.tokenNotExpired();

  constructor(private router: Router, private tokenService: TokenService) {
  }

  ngOnInit() {
  }


  toggleSearchMobile() {
    this.searchMobileActive = !this.searchMobileActive;

    $('body').toggleClass('search-mobile', this.searchMobileActive);
  }

  onSubmit() {
    this.router.navigate(['/miscellaneous/search']);

  }
}
