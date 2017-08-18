import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ApolloModule } from 'apollo-angular';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

// Core providers
import {CoreModule } from './core/core.module';
import {SmartadminLayoutModule} from './shared/layout/layout.module';
import { provideClient } from './graphql/client';
import { TokenService } from './shared/token/token.service';
import { TokenGuard } from './shared/token/token-guard.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FormsModule,
    HttpModule,
    CoreModule,
    ApolloModule.forRoot(provideClient),
    SmartadminLayoutModule,
    routing
  ],
  providers: [
    TokenService,
    TokenGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
