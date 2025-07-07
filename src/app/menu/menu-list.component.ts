import { Component } from '@angular/core';
import { MenuService, MenuItem } from './menu.service';

@Component({
  selector: 'app-menu-list',
  template: `
    <h2>Menu Items</h2>
    <button (click)="addItem()">Add Item</button>
    <ul>
      <li *ngFor="let item of menuItems">
        {{item.name}} - {{item.price | currency}}
        <button (click)="editItem(item)">Edit</button>
        <button (click)="deleteItem(item)">Delete</button>
      </li>
    </ul>
    <app-menu-form *ngIf="editingItem" [item]="editingItem" (save)="onSave($event)" (cancel)="editingItem = null"></app-menu-form>
  `
})
export class MenuListComponent {
  menuItems: MenuItem[] = [];
  editingItem: MenuItem | null = null;

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }

  addItem() {
    this.editingItem = { id: 0, name: '', price: 0 };
  }

  editItem(item: MenuItem) {
    this.editingItem = { ...item };
  }

  deleteItem(item: MenuItem) {
    this.menuService.deleteMenuItem(item.id);
    this.menuItems = this.menuService.getMenuItems();
  }

  onSave(item: MenuItem) {
    if (item.id === 0) {
      this.menuService.addMenuItem(item);
    } else {
      this.menuService.updateMenuItem(item);
    }
    this.menuItems = this.menuService.getMenuItems();
    this.editingItem = null;
  }
}
