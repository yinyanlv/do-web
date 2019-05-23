import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  data: {
    title: 'user',
    reuse: true
  }
}];

export const userRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);



