import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material';
import {ArticleComponent} from './article.component';
import {articleRoutingModule} from './article.routing';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    MatInputModule,
    articleRoutingModule
  ]
})
export class ArticleModule {
}
