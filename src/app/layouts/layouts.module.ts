import {NgModule} from '@angular/core';
import {VerticalLayoutDefaultModule} from './vertical/default/default.module';
import {VerticalLayoutNavUnsplitModule} from './vertical/nav-unsplit/nav-unsplit.module';
import {VerticalLayoutGapModule} from './vertical/gap/gap.module';
import {HorizontalLayoutDefaultModule} from './horizontal/default/default.module';

const modules = [
  VerticalLayoutDefaultModule,
  VerticalLayoutNavUnsplitModule,
  VerticalLayoutGapModule,
  HorizontalLayoutDefaultModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class LayoutsModule {
}
