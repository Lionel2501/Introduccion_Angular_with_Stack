import { Component, OnInit } from '@angular/core';
import { WineServiceShopService } from '../wine-service-shop.service';
import { WineShopComponent } from '../wine-shop/wine-shop.component';
import { Wine } from './Wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  wines: Wine [] = [
    {
      name:"Santa Julia",
      type: "Tinto",
      price:300,
      stock:10,
      image:"assets/img/santajulia.png",
      clearance:false,
      quantity:0
    },
    {
      name:"Catena Zapata",
      type: "Tinto",
      price:0,
      stock:5,
      image:"assets/img/catena.png",
      clearance:false,
      quantity:0
    },
    {
      name:"Trumpeter",
      type: "Tinto",
      price:350,
      stock:0,
      image:"assets/img/trumpeter.png",
      clearance:true,
      quantity:0
    },
    {
      "name":"Nicasia",
      "type": "Blanco",
      "price":320,
      "stock":10,
      "image":"assets/img/nicasia.png",
      clearance:false,
      quantity:0
    },
    {
      "name":"Sylvestra",
      "type": "Blanco",
      "price":250,
      "stock":13,
      "image":"assets/img/sylvestra.png",
      clearance:false,
      quantity:0
    },
    {
      "name":"Vicentin",
      "type": "Blanco",
      "price":330,
      "stock":4,
      "image":"assets/img/vicentin.png",
      clearance:false,
      quantity:0
    },
    {
      "name":"Cuvelier",
      "type": "Rosado",
      "price":300,
      "stock":1,
      "image":"assets/img/cuvelier.png",
      clearance:false,
      quantity:0
    },
    {
      "name":"La Posta",
      "type": "Rosado",
      "price":270,
      "stock":11,
      "image":"assets/img/laposta.png",
      clearance:false,
      quantity:0
    },
    {
      "name":"Trapezio",
      "type": "Rosado",
      "price":360,
      "stock":7,
      "image":"assets/img/trapezio.png",
      clearance:false,
      quantity:0
    },
  ];

  constructor(private shop: WineServiceShopService) {
   }

  ngOnInit(): void {
  }

  addToShop(wine): void{
    this.shop.addToShop(wine);
    wine.stock -= wine.quantity;
    wine.quantity = 0;
  }

  maxReached(m:string){
    alert(m);
  }


}
