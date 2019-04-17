import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
  data: {
    text: 'dashboard',
    reuse: true
  }
}, {
  path: 'article',
  loadChildren: './pages/article/article.module#ArticleModule',
  data: {
    text: 'article',
    reuse: true
  }
}];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false
});
