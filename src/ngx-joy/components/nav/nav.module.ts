import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {JNavComponent} from './nav.component';
import {JNavHorizontalItemComponent} from './horizontal/item/item.component';
import {JNavHorizontalCollapsibleComponent} from './horizontal/collapsible/collapsible.component';
import {JNavVerticalItemComponent} from './vertical/item/item.component';
import {JNavVerticalCollapsibleComponent} from './vertical/collapsible/collapsible.component';
import {JNavVerticalGroupComponent} from './vertical/group/group.component';

const components = [
  JNavComponent,
  JNavHorizontalItemComponent,
  JNavHorizontalCollapsibleComponent,
  JNavVerticalItemComponent,
  JNavVerticalCollapsibleComponent,
  JNavVerticalGroupComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class JNavModule {
}
