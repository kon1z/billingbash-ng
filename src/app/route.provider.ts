import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true }
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application
      },
      {
        name: '::Menu:Consumption',
        iconClass: 'fas fa-home',
        order: 2,
        layout: eLayoutType.application
      },
      {
        path: '/consumption-record',
        name: '::Menu:Consumption-list',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
        parentName: '::Menu:Consumption'
      },
      {
        path: '/consumption-record/create',
        name: '::Menu:Consumption-create',
        iconClass: 'fas fa-home',
        order: 2,
        layout: eLayoutType.application,
        parentName: '::Menu:Consumption'
      }
    ]);
  };
}
