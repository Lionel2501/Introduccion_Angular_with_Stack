import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Wine } from './wine-list/Wine';

@Injectable({
  providedIn: 'root'
})
export class WineServiceShopService {

  private _shopList: Wine [] = [];
  shopList: BehaviorSubject<Wine[]> = new BehaviorSubject(this._shopList);
  
  constructor() { }
  
  addToShop(wine: Wine){
    let item: Wine = this._shopList.find((v1) => v1.name == wine.name);
    if(!item){
      this._shopList.push({... wine});
    } else {
      item.quantity += wine.quantity;
    }
    console.log(this._shopList);
    this.shopList.next(this._shopList);
  }

}
