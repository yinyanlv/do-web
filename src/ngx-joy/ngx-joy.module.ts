import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {J_CONFIG} from './services/config.service';

@NgModule()
export class NgxJoyModule {
  constructor(@Optional() @SkipSelf() parentModule: NgxJoyModule) {
    if (parentModule) {
      throw new Error('NgxJoyModule is already loaded. Import it in the AppModule only!');
    }
  }

  static forRoot(config): ModuleWithProviders {

    return {
      ngModule: NgxJoyModule,
      providers: [{
        provide: J_CONFIG,
        useValue: config
      }]
    };
  }
}
