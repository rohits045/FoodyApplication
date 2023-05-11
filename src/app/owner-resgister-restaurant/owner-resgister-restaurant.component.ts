import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FileHandle } from '../model/FileHandle';
import { AddRestaurantService } from '../services/restaurant-services/add-restaurant.service';

@Component({
  selector: 'app-owner-resgister-restaurant',
  templateUrl: './owner-resgister-restaurant.component.html',
  styleUrls: ['./owner-resgister-restaurant.component.css']
})
export class OwnerResgisterRestaurantComponent {
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
    restaurant_rating: new FormControl(''),
    cuisineList:new FormGroup({ 
      cuisineId:new FormControl(''),
      cuisineName:new FormControl(''),
      image:new FormControl(''),
   price:new FormControl(''),
   qty:new FormControl(''),
   cuisineDescription:new FormControl('')
  })
   

 
  });

  get restaurantId(){return this.RegisterData.get("restaurantId")};
  get restaurantName(){return this.RegisterData.get("restaurantName")};
  get restaurantLocation(){return this.RegisterData.get("restaurantLocation")};
  get typeOfRestaurant(){return this.RegisterData.get("typeOfRestaurant")};
  get addressOfRestaurant(){return this.RegisterData.get("addressOfRestaurant")};
  get picByte(){return this.RegisterData.get("picByte")};
  get restaurant_rating(){return this.RegisterData.get("restaurant_rating")};
  get cuisineId(){return this.RegisterData.get("cuisineList.cuisineId")};
  get cuisineName(){return this.RegisterData.get("cuisineList.cuisineName")};
  get recipe_image(){return this.RegisterData.get("cuisineList.recipe_image")};
  get price(){return this.RegisterData.get("cuisineList.price")};
  get qty(){return this.RegisterData.get("cuisineList.qty")};
  get cuisineDescription(){return this.RegisterData.get("cuisineList.cuisineDescription")};


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
