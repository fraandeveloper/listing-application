import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatTabsModule,
    MatCardModule,
    MatPaginatorModule,
    MainRoutingModule],
  exports: [RouterModule]
})
export class MainModule { }
