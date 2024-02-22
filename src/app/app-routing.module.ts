import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home-module/home-module.module').then(m => m.HomeModuleModule)
  },
  {
    path: 'blue-zone',
    loadChildren: () => import('./blue-zone/blue-zone.module').then(m => m.BlueZoneModule)
  },
  {
    path: 'green-zone',
    loadChildren: () => import('./green-zone/green-zone.module').then(m => m.GreenZoneModule)
  },
  {
    path: 'exhibitors',
    loadChildren: () => import('./exhibitors/exhibitors.module').then(m => m.ExhibitorsModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  },
  
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  //   canActivate: [AuthGuard, PermissionGuard],
  // },
  // {
  //   path: 'account',
  //   loadChildren: () =>
  //     import('@volo/abp.ng.account/public').then(m => m.AccountPublicModule.forLazy()),
  // },
  // {
  //   path: 'gdpr',
  //   loadChildren: () => import('@volo/abp.ng.gdpr').then(m => m.GdprModule.forLazy()),
  // },
  // {
  //   path: 'identity',
  //   loadChildren: () => import('@volo/abp.ng.identity').then(m => m.IdentityModule.forLazy()),
  // },
  // {
  //   path: 'language-management',
  //   loadChildren: () =>
  //     import('@volo/abp.ng.language-management').then(m => m.LanguageManagementModule.forLazy()),
  // },
  // {
  //   path: 'saas',
  //   loadChildren: () => import('@volo/abp.ng.saas').then(m => m.SaasModule.forLazy()),
  // },
  // {
  //   path: 'audit-logs',
  //   loadChildren: () =>
  //     import('@volo/abp.ng.audit-logging').then(m => m.AuditLoggingModule.forLazy()),
  // },
  // {
  //   path: 'openiddict',
  //   loadChildren: () =>
  //     import('@volo/abp.ng.openiddictpro').then(m => m.OpeniddictproModule.forLazy()),
  // },
  // {
  //   path: 'text-template-management',
  //   loadChildren: () =>
  //     import('@volo/abp.ng.text-template-management').then(m =>
  //       m.TextTemplateManagementModule.forLazy()
  //     ),
  // },
  // {
  //   path: 'setting-management',
  //   loadChildren: () =>
  //     import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  // },
  // {
  //   path: 'gdpr-cookie-consent',
  //   loadChildren: () =>
  //     import('./gdpr-cookie-consent/gdpr-cookie-consent.module').then(
  //       m => m.GdprCookieConsentModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
