import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private service: ItemsService) { }

  ngOnInit(): void { }

  text: string = '';

  filter() {
    this.service.outputText.emit(this.text);
  }
}
