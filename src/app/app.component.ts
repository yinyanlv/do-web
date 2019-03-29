import { Component } from '@angular/core';

import {fakeNavItems} from 'src/fake-db/nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'do-web';

  navItems: any;

  constructor() {

    this.navItems = fakeNavItems;
  }
}
