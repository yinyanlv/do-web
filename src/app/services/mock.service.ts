import {InMemoryDbService} from 'angular-in-memory-web-api';

import {ProjectDashboardDb} from 'src/mock/dashboard-project';
import {AnalyticsDashboardDb} from 'src/mock/dashboard-analytics';
import {QuickPanelDb} from 'src/mock/quick-panel';

export class MockService implements InMemoryDbService {
  createDb(): any {
    return {
      // Dashboards
      'project-dashboard-projects': ProjectDashboardDb.projects,
      'project-dashboard-widgets': ProjectDashboardDb.widgets,
      'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

      // Quick Panel
      'quick-panel-notes': QuickPanelDb.notes,
      'quick-panel-events': QuickPanelDb.events
    };
  }
}
