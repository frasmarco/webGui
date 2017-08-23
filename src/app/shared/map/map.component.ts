import { Component, OnInit } from '@angular/core';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import Control from 'ol/control';
import FullScreen from 'ol/control/fullscreen';
import MousePosition from 'ol/control/mouseposition';
import ScaleLine from 'ol/control/scaleline';
import Interaction from 'ol/interaction';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const controls: ol.Collection<ol.control.Control> = Control.defaults() ;
    controls.extend([new FullScreen,
      new MousePosition,
      new ScaleLine]);

    const map: Map = new Map({
      controls: controls,
//      interactions: Map.interaction.defaults().extend([
//        new Interaction.DragRotateAndZoom()
//      ]),
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

}
