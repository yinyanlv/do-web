import {InMemoryDbService} from 'angular-in-memory-web-api';

import {ProjectDashboardDb} from 'src/mock/dashboard-project';
import {AnalyticsDashboardDb} from 'src/mock/dashboard-analytics';
import {QuickPanelDb} from 'src/mock/quick-panel';
import {ContactsDb} from '../../mock/contacts';

export class MockService implements InMemoryDbService {
  createDb(): any {
    return {
      // dashboard
      'project-dashboard-projects': ProjectDashboardDb.projects,
      'project-dashboard-widgets': ProjectDashboardDb.widgets,
      'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

      // quick panel
      'quick-panel-notes': QuickPanelDb.notes,
      'quick-panel-events': QuickPanelDb.events,

      // data table
      'contacts': ContactsDb.contacts
    };
  }
}
