import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material';
import {DashboardComponent} from './dashboard.component';
import {dashboardRoutingModule} from './dashboard.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatInputModule,
    dashboardRoutingModule
  ]
})
export class DashboardModule {
}
