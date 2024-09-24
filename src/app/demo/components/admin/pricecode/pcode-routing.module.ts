import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcodeComponent } from './pcode.component';

const routes: Routes = [{ path: '', component: PcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcodeRoutingModule { }
