import {NgModule} from '@angular/core';
import {JPerfectScrollbarDirective} from './perfect-scrollbar.directive';
import {JMatSidenavHelperDirective} from './mat-sidenav-helper.directive';
import {JMatSidenavTogglerDirective} from './mat-sidenav-toggler.directive';

const directives = [
  JPerfectScrollbarDirective,
  JMatSidenavHelperDirective,
  JMatSidenavTogglerDirective
];

@NgModule({
  declarations: [
    ...directives
  ],
  exports: [
    ...directives
  ]
})
export class JDirectivesModule {

}
