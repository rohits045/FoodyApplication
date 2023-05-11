import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FavCousineService } from '../services/add-to-fav-services/fav-cousine.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

constructor(private addAddress:FavCousineService ,private snackBar :MatSnackBar,private router :Router){}

  Address=new FormGroup({
    houseNo:new FormControl('', [Validators.required]),
    street:new FormControl('', [Validators.required]),
    city:new FormControl('', [Validators.required]),
    pinCode:new FormControl('', [Validators.required]),
  })


  add_Address(form :FormGroup){
         const f= form.value
   this.addAddress.addAddress(f).subscribe(res=>{
            console.log(res)
            this.snackBar.open("Thank-You ,For Order !!", "Your Order Shipping Soon", {duration:4000})
          this.router.navigate(['/user-dashboard'])
   })
  }
}
