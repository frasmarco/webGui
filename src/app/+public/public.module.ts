import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRouting } from './public.routing';
import { SmartadminModule } from '../shared/smartadmin.module';
import { PublicComponent } from './public.component';
import { MapModule } from '../shared/map/map.module';

@NgModule({
  imports: [CommonModule, PublicRouting, SmartadminModule, MapModule],
  declarations: [PublicComponent]
})
export class PublicModule {}
