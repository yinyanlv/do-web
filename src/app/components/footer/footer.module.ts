import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {FooterComponent} from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    MatToolbarModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {
}
