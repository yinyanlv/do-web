import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {appRouting} from './app.routing';
import {AppComponent} from './app.component';
import {NgxJoyModule} from '../ngx-joy/ngx-joy.module';
import {jConfig} from './ngx-joy.config';
import {LayoutsModule} from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxJoyModule.forRoot(jConfig),
    appRouting,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
