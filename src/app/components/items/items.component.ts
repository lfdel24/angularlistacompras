import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  constructor(private service: ItemsService) {
    this.items = this.service.items;
    this.calculateTotal();
  }

  ngOnInit(): void {
    this.service.loadItems();
    this.service.outputText.subscribe(
      (value) => (this.items = this.service.filter(value, this.service.items))
    );
  }

  items: Item[] = [];
  total: number = 0;

  onToggle(item: Item) {
    item.completed = !item.completed;
    this.calculateTotal();
  }

  onDelete(item: Item) {
    this.items = this.items.filter((i) => item.id !== i.id);
    this.calculateTotal();
  }

  calculateTotal() {
    this.service.calculateTotal();
  }
}
