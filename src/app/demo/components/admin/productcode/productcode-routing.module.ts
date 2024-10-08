import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductcodeComponent } from './productcode.component';

const routes: Routes = [{ path: '', component: ProductcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCodeRoutingModule { }
