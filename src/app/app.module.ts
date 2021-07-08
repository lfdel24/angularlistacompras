import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsService } from './services/items.service';
import { ItemsComponent } from './components/items/items.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ItemsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
