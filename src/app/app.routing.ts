import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: '**',
  loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
}];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false
});