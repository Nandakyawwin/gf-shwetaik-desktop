import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users',  data: { breadcrumb: 'Button' }, loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'roles',  data: { breadcrumb: 'Button' },loadChildren: () => import('./role/role.module').then(m => m.RoleModule) },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
