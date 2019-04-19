import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
}, {
  path: 'article',
  loadChildren: './pages/article/article.module#ArticleModule'
}];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false
});
