import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {NavHorizontalItemComponent} from './horizontal/item/item.component';
import {NavHorizontalCollapsibleComponent} from './horizontal/collapsible/collapsible.component';
import {NavVerticalItemComponent} from './vertical/item/item.component';
import {NavVerticalCollapsibleComponent} from './vertical/collapsible/collapsible.component';
import {NavVerticalGroupComponent} from './vertical/group/group.component';

@NgModule({
  declarations: [
    NavComponent,
    NavHorizontalItemComponent,
    NavHorizontalCollapsibleComponent,
    NavVerticalItemComponent,
    NavVerticalCollapsibleComponent,
    NavVerticalGroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavModule {
}
