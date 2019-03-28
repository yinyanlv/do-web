import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {JDirectivesModule} from '../../../ngx-joy/directives/directives.module';
import {JMaterialColorPickerModule} from '../../../ngx-joy/components/material-color-picker/material-color-picker.module';
import {JSidebarModule} from '../../../ngx-joy/components/sidebar/sidebar.module';
import {ThemeOptionsComponent} from './theme-options.component';

@NgModule({
  declarations: [
    ThemeOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    JDirectivesModule,
    JMaterialColorPickerModule,
    JSidebarModule
  ],
  exports: [
    ThemeOptionsComponent
  ]
})
export class FuseThemeOptionsModule {
}
