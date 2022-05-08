import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: [],
})
export class OrderFoodComponent {
  @Input() order;
  @Output() orderFood = new EventEmitter();
  orderClick() {
    this.orderFood.emit(this.order);
  }
}
