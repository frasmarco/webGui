import { Component, OnInit } from '@angular/core';
import {FadeZoomInTop} from '../../animations/fade-zoom-in-top.decorator';

@FadeZoomInTop()
@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styles: []
})
export class PublicLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
