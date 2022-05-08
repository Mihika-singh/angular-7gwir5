import { Component } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';
 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   hasChoosen=false;
  restaurantList = {
    count: 0,
    titles: '',
    price: 0,
  };
  Res1 = {
    title: 'Momos',
    stars: 5.0,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8nzdUaDRUAywYNrTdizaqVN6a1h9LsVYgQ&usqp=CAU',
    price: 100,
  };
  Res2 = {
    title: 'Manchurian with fried rice',
    stars: 4.7,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_emBkLTu2WPk6EcjxclsPKNHV4eNStuH5aQ&usqp=CAU',
    price: 300,
  };

  orderClick(order) {
    if(!this.hasChoosen){
      
    if (this.restaurantList.count > 0) {
      
      this.restaurantList.titles += ' , ' + order.title;
      this.restaurantList.price += order.price;

      this.restaurantList.count++;
    } else {
     
      this.restaurantList.titles += order.title;
      this.restaurantList.price += order.price;
      this.restaurantList.count++;
    }
    this.hasChoosen=true;}
    console.log('restaurant  added ');
  }

  // Feel free to put your own data here if you have other favorite flops
  flops = FLOP_DATA;
   totalamount(){
     this.hasChoosen=false;
   }
}
