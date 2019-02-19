import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ComponentsModule} from 'ngx-joy';

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
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
