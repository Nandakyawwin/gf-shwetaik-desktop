import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', data: { breadcrumb: 'Button' }, loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'roles', data: { breadcrumb: 'Button' }, loadChildren: () => import('./role/role.module').then(m => m.RoleModule) },
  { path: 'systems', data: { breadcrumb: 'Button' }, loadChildren: () => import('./system/system.module').then(m => m.SystemModule) },
  { path: 'languages', data: { breadcrumb: 'Button' }, loadChildren: () => import('./language/language.module').then(m => m.LanguageModule) },
  { path: 'tables', data: { breadcrumb: 'Button' }, loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'filters', data: { breadcrumb: 'Button' }, loadChildren: () => import('./filter/filter.module').then(m => m.FilterModule) },
  { path: 'lists', data: { breadcrumb: 'Button' }, loadChildren: () => import('./table List/list.module').then(m => m.ListModule) },
  { path: 'pcodes', data: { breadcrumb: 'Button' }, loadChildren: () => import('./pricecode/pcode.module').then(m => m.PcodeModule) },
  { path: 'productcode', data: { breadcrumb: 'Button' }, loadChildren: () => import('./productcode/productcode.module').then(m => m.ProductcodeModule) },
  { path: 'ann', data: { breadcrumb: 'Button' }, loadChildren: () => import('./ann/ann.module').then(m => m.AnnModule) },
  { path: '**', redirectTo: '/notfound' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
