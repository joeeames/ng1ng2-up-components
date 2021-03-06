import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module';
import {Router} from '@angular/router';
import { ng2SettingsComponent } from './ng2Settings.component';
import { NestedNg2Component } from './nested-ng2.component';
import {setUpLocationSync} from '@angular/router/upgrade';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // upgrades & downgrades
  angular.module('app').directive('nested2', downgradeComponent({component: NestedNg2Component}));
  
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  
  // this doesn't appear to be required
  // setTimeout(() => {
  //   // this appears to be required if the initial route is a ng2 route, otherwise it won't show up    
  //   platformRef.injector.get(Router).initialNavigation();
  // }, 0);
  

  // is this only for push state routing? or also for # routing?
  setUpLocationSync(upgrade);

  console.log('hybrid app bootstrapped');
});
