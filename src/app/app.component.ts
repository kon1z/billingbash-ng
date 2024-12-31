import { Component } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { MyApplicationLayoutComponent } from './components/my-application-layout/my-application-layout.component';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { MyNavItemsComponent } from './components/my-nav-items/my-nav-items.component';
import { MyRoutesComponent } from './components/my-routes/my-routes.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <abp-internet-status></abp-internet-status>
  `
})
export class AppComponent {
  constructor(
    private replaceableComponents: ReplaceableComponentsService
  ) {
    this.replaceableComponents.add({
        component: MyApplicationLayoutComponent,
        key: eThemeBasicComponents.ApplicationLayout
      }
    );
    this.replaceableComponents.add({
        component: MyNavItemsComponent,
        key: eThemeBasicComponents.NavItems
      }
    );
    this.replaceableComponents.add({
      component: MyRoutesComponent,
      key: eThemeBasicComponents.Routes
    });
  }
}
