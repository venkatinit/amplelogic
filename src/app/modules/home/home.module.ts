import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MigrationProcessComponent } from './migration-process/migration-process.component';


@NgModule({
  declarations: [
    MigrationProcessComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
