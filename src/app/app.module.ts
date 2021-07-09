import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemsService } from './services/items.service';
import { NgModule } from '@angular/core';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ItemsComponent, CreateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ItemsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
