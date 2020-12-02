import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineShopComponent } from './wine-shop/wine-shop.component';

import { FormsModule } from '@angular/forms';
import { WineAboutComponent } from './wine-about/wine-about.component';
import { WineContactComponent } from './wine-contact/wine-contact.component';
import { WineMainComponent } from './wine-main/wine-main.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';


@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
    WineShopComponent,
    WineAboutComponent,
    WineContactComponent,
    WineMainComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
