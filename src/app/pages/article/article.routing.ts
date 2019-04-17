import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticleComponent} from './article.component';

const routes: Routes = [{
  path: '',
  component: ArticleComponent
}];

export const articleRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
