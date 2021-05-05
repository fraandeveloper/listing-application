import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [RouterModule]
})
export class MainModule { }
