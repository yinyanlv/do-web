import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
}, {
  path: 'article',
  loadChildren: './pages/article/article.module#ArticleModule'
}, {
  path: 'user',
  loadChildren: './pages/user/user.module#UserModule'
}];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false
});
