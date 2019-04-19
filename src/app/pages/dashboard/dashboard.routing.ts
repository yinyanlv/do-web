import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  data: {
    title: 'dashboard',
    reuse: false
  }
}];

export const dashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
