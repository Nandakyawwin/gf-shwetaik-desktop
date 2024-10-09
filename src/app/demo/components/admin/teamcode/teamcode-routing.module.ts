import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamcodeComponent } from './teamcode.component';

const routes: Routes = [{ path: '', component: TeamcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamCodeRoutingModule { }
