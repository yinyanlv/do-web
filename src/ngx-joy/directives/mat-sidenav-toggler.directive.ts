import {Directive, Input, HostListener} from '@angular/core';

import {JMatSidenavHelperService} from '../services/mat-sidenav-helper.service';

@Directive({
  selector: '[jMatSidenavToggler]'
})
export class JMatSidenavTogglerDirective {
  @Input()
  jMatSidenavToggler: string;

  constructor(
    private _jMatSidenavHelperService: JMatSidenavHelperService) {
  }

  @HostListener('click')
  onClick(): void {
    this._jMatSidenavHelperService.getSidenav(this.jMatSidenavToggler).toggle();
  }
}
