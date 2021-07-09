import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private service: ItemsService) {

    this.inputText.valueChanges.pipe(
      debounceTime(350)
    ).subscribe(
      value => this.service.outputText.emit(value)
    );

  }

  ngOnInit(): void { }

  inputText: FormControl = new FormControl('');

}
