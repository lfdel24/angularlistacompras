import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {

  constructor(
    private service: ItemsService,
    private route: Router
  ) {

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
    this.service.add(this.getItem());
    this.resetInputs();
    console.log(this.service.items);
    //TODO: create class route url
    this.route.navigateByUrl('');
  }

  getItem() {
    let item: Item = new Item();
    //TODO: Debe ser dynamic this.service.items.length + 1
    item.id = this.service.items.length + 1;
    item.title = this.inputTitle.value;
    item.price = this.inputPrice.value;
    item.quantity = this.inputQuantity.value;
    item.completed = this.inputCompleted.value;
    return item;
  }

  resetInputs() {
    this.inputTitle.setValue('');
    this.inputPrice.setValue('');
    this.inputQuantity.setValue('');
    this.inputCompleted.setValue('');
  }

}
