import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html'
})
export class AppComponent {
  public title = 'Speleo Web Gis';
  public constructor(private viewContainerRef: ViewContainerRef) {}
}
