import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from '../services/add-to-cart.service';
import { FavRestaurantService } from '../services/add-to-fav-services/fav-restaurant.service';
import { AuthServiceService } from '../services/auth-service.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  my_name:any=localStorage.getItem("_a_email");
constructor(private loginSerices:AuthServiceService,private userServices:UserService, private auth : AuthServiceService ,private router :Router,private fav:FavRestaurantService,private cart_service:AddToCartService){
  
}
  public totalItems :number =0;
  myUserData:any
    public btnClick():void{
      this.userServices.userData = this.userData;
    }
  searchKey:string='';
public searchTerm : string ='';
userData:any
// ngOnInit(): void {
//   this.isLoggedIn = this.user.isLoggedIn();
//   this.users = this.user.getUser();
 
//   this.user.loginStatusSubject.asObservable().subscribe((data)=>{
//     this.isLoggedIn = this.user.isLoggedIn();
//     this.users = this.user.getUser();
//   })
// }
ngOnInit(): void {
 
this.userServices.loginStatusSubject.asObservable().subscribe(myData=>{
      this.userData = this.user_Profile()
 console.log(myData)
}
  
  )


  // this.userServices.userProfile().subscribe(res=>{
  //   this.userData = res;
   
  //   console.log(res)
  //  })


     this.fav.getFavItems().subscribe(res=>{
      this.totalItems = res.length;
       
     })
   
    // ---------------------------------------
    this.cart_service.search.subscribe(val=>{
      this.searchKey = val;
    })
  }

 user_Profile(){
  this.userServices.userProfile().subscribe(res=>{
    this.userData = res;
    console.log(res)
   })
 }


  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.cart_service.search.next(this.searchTerm);
    }
logoutAccount(){
  this.auth.logOut();
  window.localStorage.clear();
  window.location.reload();
this.router.navigate(['/home'])

}
loggedIn(){
 
  return   localStorage.getItem('_a_email')


}

// userProfileView(){

//     this.userServices.userProfile().subscribe(res=>{
//       this.userData = res;
//       localStorage.setItem('user_profile',this.userData)
//       console.log(res)
//      })

// }




}
