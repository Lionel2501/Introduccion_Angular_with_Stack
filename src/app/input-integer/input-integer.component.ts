import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wine } from '../wine-list/Wine';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  wine: Wine;
  @Input() quantity: number;
  @Input() max: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  downQuantity():void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity():void{
    if(this.quantity <= this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit("Se alcanso el stock");
    }
  }

  changeQuantity(event): void{
    this.quantityChange.emit(this.quantity);
    console.log(event);
  }
}
