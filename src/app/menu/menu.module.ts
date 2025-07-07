import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuListComponent } from './menu-list.component';
import { MenuFormComponent } from './menu-form.component';

@NgModule({
  declarations: [MenuListComponent, MenuFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [MenuListComponent]
})
export class MenuModule {} 