import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TestModule} from 'ngx-joy/test';
import {ServicesModule} from 'ngx-joy/services';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    TestModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
