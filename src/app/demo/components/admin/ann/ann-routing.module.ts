import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnComponent } from './ann.component';

const routes: Routes = [{ path: '', component: AnnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnRoutingModule { }
