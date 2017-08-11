import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  public title = 'Speleo Web Gis';
  public constructor(private viewContainerRef: ViewContainerRef) {}
}
