import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule} from '@angular/material';
import {JPipesModule} from '../../pipes/pipes.module';
import {JMaterialColorPickerComponent} from './material-color-picker.component';

@NgModule({
  declarations: [
    JMaterialColorPickerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    JPipesModule
  ],
  exports: [
    JMaterialColorPickerComponent
  ],
})
export class JMaterialColorPickerModule {
}
