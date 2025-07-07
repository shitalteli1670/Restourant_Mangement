import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from './menu.service';

@Component({
  selector: 'app-menu-form',
  template: `
    <div>
      <h3>{{item?.id === 0 ? 'Add' : 'Edit'}} Menu Item</h3>
      <form (ngSubmit)="save()">
        <label>Name: <input [(ngModel)]="item.name" name="name" required></label><br>
        <label>Price: <input type="number" [(ngModel)]="item.price" name="price" required></label><br>
        <button type="submit">Save</button>
        <button type="button" (click)="cancel.emit()">Cancel</button>
      </form>
    </div>
  `
})
export class MenuFormComponent {
  @Input() item!: MenuItem;
  @Output() save = new EventEmitter<MenuItem>();
  @Output() cancel = new EventEmitter<void>();

  saveItem() {
    this.save.emit(this.item);
  }

  save() {
    this.saveItem();
  }
}
