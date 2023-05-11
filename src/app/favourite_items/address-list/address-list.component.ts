import { Component, OnInit } from '@angular/core';
import { AddRecipesService } from 'src/app/services/restaurant-services/add-recipes.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
constructor(private addresListService:AddRecipesService){}
  ngOnInit(): void {
    this.getAddressData();
  }

addressData:any;
getAddressData(){
  this.addresListService.getAddressList().subscribe(res=>{
    this.addressData = res;
    console.log(res)
  })
}

}
