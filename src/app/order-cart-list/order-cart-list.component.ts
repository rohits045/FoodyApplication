import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-cart-list',
  templateUrl: './order-cart-list.component.html',
  styleUrls: ['./order-cart-list.component.css']
})
export class OrderCartListComponent implements OnInit{
constructor(private orderService : OrderService){}
  ngOnInit(): void {
    this.ShowOrderList();
    
  }


  orderListData:any=[]
 ShowOrderList(){
 this.orderService.getOrderDetails().subscribe(result=>{
  this.orderListData = result;
  console.log(result)
 })
 }

}
