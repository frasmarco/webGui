import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {PopoverModule} from 'ngx-popover';

import {PublicHeaderComponent} from './header.component';

import {UtilsModule} from '../../utils/utils.module';
import {I18nModule} from '../../i18n/i18n.module';
import {UserModule} from '../../user/user.module';
import {BsDropdownModule} from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,

    FormsModule,

    BsDropdownModule,

    UtilsModule, I18nModule, UserModule, PopoverModule,
  ],
  declarations: [
    PublicHeaderComponent
  ],
  exports: [
    PublicHeaderComponent
  ]
})
export class PublicHeaderModule {}
