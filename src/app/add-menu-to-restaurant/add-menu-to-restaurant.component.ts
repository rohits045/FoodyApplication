import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FileHandle } from '../model/FileHandle';
import { AddRecipesService } from '../services/restaurant-services/add-recipes.service';

@Component({
  selector: 'app-add-menu-to-restaurant',
  templateUrl: './add-menu-to-restaurant.component.html',
  styleUrls: ['./add-menu-to-restaurant.component.css']
})
export class AddMenuToRestaurantComponent {
  
  constructor(private adminservice:AddRecipesService,private sanitizer: DomSanitizer,private router :Router){}

  RegisterData= new FormGroup({

    cuisineId:new FormControl(''),
    cuisineName:new FormControl(''),
    image:new FormControl(''),
 price:new FormControl(''),
 qty:new FormControl(''),
 cuisineDescription:new FormControl(''),
  })
  get cuisineId(){return this.RegisterData.get("cuisineId")};
  get cuisineName(){return this.RegisterData.get("cuisineName")};
  get recipe_image(){return this.RegisterData.get("recipe_image")};
  get price(){return this.RegisterData.get("price")};
  get qty(){return this.RegisterData.get("qty")};
  get cuisineDescription(){return this.RegisterData.get("cuisineDescription")};


  public userFile1:any = File;
  public userFile2:any = File;
 
  addMenu(submitForm:FormGroup)
  {
    const restaurantMenuItem = submitForm.value;
    const formData = new FormData();
   formData.append('favCuisine', JSON.stringify(restaurantMenuItem));
     formData.append('file',this.userFile2);
   this.adminservice.addMenuItemInRestaurantApi(formData).subscribe(
    res=>{
      console.log(res);
      alert("menu items is added in restaurant list done !!")
      this.goToViewRestaurant();
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
      goToViewRestaurant(){
        this.router.navigate(['view-restaurant'])
        window.location.reload();
      }
}
