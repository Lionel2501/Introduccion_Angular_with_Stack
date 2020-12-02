import { Component, OnInit } from '@angular/core';
import { WineServiceShopService } from '../wine-service-shop.service';
import { Wine } from '../wine-list/Wine';

@Component({
  selector: 'app-wine-shop',
  templateUrl: './wine-shop.component.html',
  styleUrls: ['./wine-shop.component.css']
})
export class WineShopComponent implements OnInit {

  shopList: Wine[] = [];

  constructor(private shop: WineServiceShopService) {
    shop.shopList.subscribe(c => this.shopList = c);
   }

  ngOnInit(): void {
  }

}
