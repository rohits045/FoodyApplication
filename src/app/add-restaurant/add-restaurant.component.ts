import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FileHandle } from '../model/FileHandle';
import { AddRestaurantService } from '../services/restaurant-services/add-restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {


  constructor(private adminservice:AddRestaurantService,private sanitizer: DomSanitizer,
    private route:Router,private snackBar : MatSnackBar
    ){}


  RegisterData = new FormGroup({
    restaurantId:new FormControl(''),
    restaurantName:new FormControl(''),
    restaurantLocation:new FormControl(''),
    typeOfRestaurant: new FormControl(''),
    addressOfRestaurant:new FormControl(''),
    picByte:new FormControl(''),
    restaurant_rating: new FormControl('')
  });

  get restaurantId(){return this.RegisterData.get("restaurantId")};
  get restaurantName(){return this.RegisterData.get("restaurantName")};
  get restaurantLocation(){return this.RegisterData.get("restaurantLocation")};
  get typeOfRestaurant(){return this.RegisterData.get("typeOfRestaurant")};
  get addressOfRestaurant(){return this.RegisterData.get("addressOfRestaurant")};
  get picByte(){return this.RegisterData.get("picByte")};
  get restaurant_rating(){return this.RegisterData.get("restaurant_rating")};



  public userFile1:any = File;
  public userFile2:any = File;
  rest_Data:any;
  signUp(submitForm:FormGroup)
  {
    const favRes = submitForm.value;
    const formData = new FormData();
   formData.append('favRes', JSON.stringify(favRes));
     formData.append('file',this.userFile2);
    this.adminservice.addRestaurantAccordingToAdmin_email(formData).subscribe(
      response =>
      {    this.rest_Data = response
        console.log(response)
        this.snackBar.open("Restaurant Registration done !!", "Thank You", {duration:200});           

        // alert("Restaurant Registration done")
        this.goToMenuItem();
       
      }
    )
  }
  addRestaurantToRestaurantService(addRestaurant:FormGroup){
    const restaurant = addRestaurant.value;
    const formData = new FormData();
   formData.append('restaurant', JSON.stringify(restaurant));
     formData.append('file',this.userFile2);
    this.adminservice.addRestaurantToRestaurantService(formData).subscribe(
      response =>
      {    this.rest_Data = response
        console.log(response)
        // this.snackBar.open("Restaurant Registration done !!", "Thank You", {duration:200});           

  })
}
  onChangeFileFiled(event:any){
    console.log(event.target.files[0])
    const file=event.target.files[0];
    const fileHandle : FileHandle= {
      file: file ,
            url:this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
      this.userFile1 = fileHandle;
      this.userFile2 = fileHandle.file;
      }

      goToMenuItem(){
  this.route.navigate(['add-menu-to-restaurant'])
      }
}
