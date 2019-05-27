import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {UserComponent} from './user.component';
import {userRoutingModule} from './user.routing';
import {QueryComponent} from './query/query.component';
import {GridComponent} from './grid/grid.component';

@NgModule({
  declarations: [
    UserComponent,
    QueryComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    userRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxDatatableModule
  ],
  entryComponents: [
    QueryComponent,
    GridComponent
  ]
})
export class UserModule {
}
