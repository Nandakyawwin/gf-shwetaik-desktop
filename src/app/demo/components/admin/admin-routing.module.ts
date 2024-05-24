import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users',  data: { breadcrumb: 'Button' }, loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'roles',  data: { breadcrumb: 'Button' }, loadChildren: () => import('./role/role.module').then(m => m.RoleModule) },
  { path: 'systems', data: { breadcrumb: 'Button' }, loadChildren: () => import('./system/system.module').then(m => m.SystemModule) },
  { path: 'languages', data: { breadcrumb: 'Button' }, loadChildren: () => import('./language/language.module').then(m => m.LanguageModule) },
  { path: 'tables',  data: { breadcrumb: 'Button' }, loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'filters',  data: { breadcrumb: 'Button' }, loadChildren: () => import('./filter/filter.module').then(m => m.FilterModule) },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
