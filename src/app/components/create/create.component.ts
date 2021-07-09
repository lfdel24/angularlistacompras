import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {

  constructor(private service: ItemsService) {

    this.inputTitle.valueChanges.subscribe(
      value => console.log(value));

  }

  ngOnInit(): void {
  }

  inputTitle: FormControl = new FormControl('');
  inputPrice: FormControl = new FormControl('');
  inputQuantity: FormControl = new FormControl('');
  inputCompleted: FormControl = new FormControl('');

  create(): void {
    let item: Item = new Item();
    item.id = this.service.items.length + 1;
    item.title = this.inputTitle.value;
    item.price = this.inputPrice.value;
    item.quantity = this.inputQuantity.value;
    item.completed = this.inputCompleted.value;
    this.service.add(item);
    console.log(this.service.items);
  }

}
