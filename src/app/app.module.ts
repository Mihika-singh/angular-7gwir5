import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OrderFoodComponent } from './order-food/order-food.component';
 
import { AppComponent } from './app.component';
 

 
@NgModule({
  imports: [BrowserModule, FormsModule ],
  declarations: [AppComponent, OrderFoodComponent ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
