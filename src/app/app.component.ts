import { Component, ViewContainerRef , OnInit} from '@angular/core';
import { TokenService } from './shared/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html'
})
export class AppComponent implements OnInit {
  public title = 'Speleo Web Gis';
  public constructor(private viewContainerRef: ViewContainerRef, private tokenService: TokenService) {}

  ngOnInit() {
    this.tokenService.getToken()
    .subscribe();
  }
}
