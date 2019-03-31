import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';
import {NgxJoyModule} from 'src/ngx-joy/ngx-joy.module';
import {JSharedModule} from 'src/ngx-joy/shared.module';
import {JProgressBarModule, JSidebarModule} from 'src/ngx-joy/components';
import {jConfig} from './config/ngx-joy.config';
import {FakeDbService} from './services/fake-db.service';
import {AppComponent} from './app.component';
import {ThemeOptionsModule} from './components/theme-options/theme-options.module';
import {LayoutsModule} from './layouts/layouts.module';
import {appRoutingModule} from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    appRoutingModule,
    TranslateModule.forRoot(),
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    MatButtonModule,
    MatIconModule,
    NgxJoyModule.forRoot(jConfig),
    JProgressBarModule,
    JSharedModule,
    JSidebarModule,
    ThemeOptionsModule,
    LayoutsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
