import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MainRoutingModule],
  exports: [RouterModule]
})
export class MainModule { }
