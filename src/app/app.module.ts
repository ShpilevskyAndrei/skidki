import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdsModule } from './modules/ads/ads.module';
import { SharedModule } from './modules/shared/shared.module';
import { OverallModule } from './modules/overall/overall.module';
import { interceptorProviders } from './modules/shared/interceptors/interceptors-provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverallModule,
    AdsModule,
    HttpClientModule,
    SharedModule,
    MatNativeDateModule,
  ],
  providers: [
    interceptorProviders.progressBar,
    interceptorProviders.auth,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
