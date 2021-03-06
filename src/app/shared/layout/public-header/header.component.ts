import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'sa-public-header',
  templateUrl: './header.component.html',
})
export class PublicHeaderComponent implements OnInit {

  searchMobileActive = false;

  constructor(private router: Router) {
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
