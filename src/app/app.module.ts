import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPage1Component } from './test-page1/test-page1.component';
import { TestPage2Component } from './test-page2/test-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPage1Component,
    TestPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
