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
    this.items = [
      {
        id: 1,
        title: 'Comprar pan',
        price: 1000,
        quantity: 10,
        completed: false,
      },
      {
        id: 2,
        title: 'Comprar tomates',
        price: 2500,
        quantity: 5,
        completed: true,
      },
    ];
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
