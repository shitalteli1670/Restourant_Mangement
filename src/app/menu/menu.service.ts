import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menuItems: MenuItem[] = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 7 },
    { id: 3, name: 'Pasta', price: 8 }
  ];
  private nextId = 4;

  getMenuItems(): MenuItem[] {
    return [...this.menuItems];
  }

  addMenuItem(item: MenuItem) {
    item.id = this.nextId++;
    this.menuItems.push({ ...item });
  }

  updateMenuItem(item: MenuItem) {
    const idx = this.menuItems.findIndex(i => i.id === item.id);
    if (idx > -1) {
      this.menuItems[idx] = { ...item };
    }
  }

  deleteMenuItem(id: number) {
    this.menuItems = this.menuItems.filter(i => i.id !== id);
  }
}
