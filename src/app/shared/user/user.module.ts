

import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginInfoComponent} from './login-info/login-info.component';
import {LogoutComponent} from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import {I18nModule} from '../i18n/i18n.module';

@NgModule({
  imports: [CommonModule, I18nModule],
  declarations: [LoginInfoComponent, LogoutComponent, LoginComponent],
  exports: [LoginInfoComponent, LogoutComponent, LoginComponent]
})
export class UserModule {}
