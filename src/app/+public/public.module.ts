import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRouting } from './public.routing';
import { SmartadminModule } from '../shared/smartadmin.module';
import { PublicComponent } from './public.component';

@NgModule({
  imports: [CommonModule, PublicRouting, SmartadminModule],
  declarations: [PublicComponent]
})
export class PublicModule {}
