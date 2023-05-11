import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/app/model/FileHandle';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fav-cousine',
  templateUrl: './fav-cousine.component.html',
  styleUrls: ['./fav-cousine.component.css']
})
export class FavCousineComponent implements OnInit{


  constructor(private userService:UserService){}
  ngOnInit(): void {
   
      // this.getFavCuisine();
 
      this.userService.getFavCusine().subscribe(res=>{
        this.favCuisine = res;
 
   })
    
  }

favCuisine:any
  // getFavCuisine(){
  //   this.userService.getFavCusine().subscribe(res=>{
  //     this.favCuisine = res;
  //     console.log(res)
  //   })
  // }

  
//   constructor(private adminservice:AddRecipesService,private sanitizer: DomSanitizer){}

//   RegisterData= new FormGroup({

//     cuisineId:new FormControl(''),
//     cuisineName:new FormControl(''),
//     image:new FormControl(''),
//  price:new FormControl(''),
//  qty:new FormControl(''),
//  cuisineDescription:new FormControl(''),
// //  rating:new FormControl('')
//   })
//   get menu_id(){return this.RegisterData.get("menu_id")};
//   get recipe_name(){return this.RegisterData.get("recipe_name")};
//   get recipe_image(){return this.RegisterData.get("recipe_image")};
//   // get fileName(){return this.RegisterData.get("fileName")};
//   get price(){return this.RegisterData.get("price")};
//   get qty(){return this.RegisterData.get("qty")};
//   get recipeDetails(){return this.RegisterData.get("recipeDetails")};
//   get rating(){return this.RegisterData.get("rating")};

//   public userFile1:any = File;
//   public userFile2:any = File;
 
//   addMenu(submitForm:FormGroup)
//   {
//     const restaurantMenuItem = submitForm.value;
//     const formData = new FormData();
//    formData.append('restaurantMenuItem', JSON.stringify(restaurantMenuItem));
//      formData.append('restaurant_file',this.userFile2);
//    this.adminservice.addMenuItemInRestaurantApi(formData).subscribe(
//     res=>{
//       console.log(res);
//       alert("menu items is added in restaurant list done !!")
//     }
//    )
//   }
//   onChangeFileFiled(event:any){
//     console.log(event.target.files[0])
//     const file=event.target.files[0];
//     const fileHandle : FileHandle= {
//       file: file ,
//             url:this.sanitizer.bypassSecurityTrustUrl(
//         window.URL.createObjectURL(file)
//       )
//     }
//       this.userFile1 = fileHandle;
//       this.userFile2 = fileHandle.file;
//       }
}
