import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'cop16.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'cop16.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
