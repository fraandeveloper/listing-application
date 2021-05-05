import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AsideComponent } from './aside/aside.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent, AsideComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, AsideComponent]
})
export class ComponentsModule { }
