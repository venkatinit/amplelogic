import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MigrationProcessComponent } from './migration-process/migration-process.component';

const routes: Routes = [
  {path:'',component:MigrationProcessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
