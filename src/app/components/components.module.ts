import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AsideComponent } from './aside/aside.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [MenuComponent, AsideComponent, CardComponent],
  imports: [CommonModule, RouterModule, MatCardModule, MatChipsModule, MatButtonModule, MatRippleModule],
  exports: [MenuComponent, AsideComponent, CardComponent]
})
export class ComponentsModule { }
