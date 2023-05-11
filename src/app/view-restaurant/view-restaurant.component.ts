import { Component } from '@angular/core';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent {
  _email_id:any=localStorage.getItem('_a_email')
}
