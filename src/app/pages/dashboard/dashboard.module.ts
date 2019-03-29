import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {dashboardRoutingModule} from './dashboard.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    dashboardRoutingModule
  ]
})
export class DashboardModule {
}
