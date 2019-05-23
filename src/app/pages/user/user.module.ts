import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {userRoutingModule} from './user.routing';
import {QueryComponent} from './query/query.component';
import {GridComponent} from './grid/grid.component';

@NgModule({
  declarations: [UserComponent, QueryComponent, GridComponent],
  imports: [
    CommonModule,
    userRoutingModule
  ]
})
export class UserModule {
}
