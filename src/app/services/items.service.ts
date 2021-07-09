import { EventEmitter, Injectable, Output } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {
    this.loadItems();
  }

  items: Item[] = [];
  @Output() outputText: EventEmitter<string> = new EventEmitter();
  total: number = 0;

  loadItems() {
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        id: i,
        title: 'Title',
        price: i,
        quantity: i,
        completed: false,
      });
    }
    this.calculateTotal();
  }

  filter(text: string, items: Item[]): Item[] {
    if (text.length <= 0) {
      return items;
    }
    return items.filter((value) =>
      value.title.toUpperCase().includes(text.toUpperCase())
    );
  }

  add(item: Item) {
    // this.items.unshift(item);
    // this.calculateTotal();
  }

  delete(item: Item) {
    // this.items = this.items.filter((i) => i.id !== item.id);
    // this.calculateTotal();
  }

  calculateTotal() {
    // this.total = 0;
    // this.items.filter((item) =>
    //   item.completed ? (this.total += item.quantity * item.price) : 0
    // );
  }

  completed(item: Item) {
    item.completed = !item.completed;
    this.calculateTotal();
  }
}
