import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private service: ItemsService) {}

  ngOnInit(): void {}

  text: string = '';

  filter() {
    this.service.outputText.emit(this.text);
  }
}
