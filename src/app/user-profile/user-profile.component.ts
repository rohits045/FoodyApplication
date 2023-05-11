import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
constructor(private userService:UserService,private router :Router){}
 myUserProfile:any
  ngOnInit(): void {

 this.userService.userProfile().subscribe(res=>{
  this.myUserProfile = res;
 })
  }
email_id=localStorage.getItem("_a_email")
 
getFavCuisine(){
  this.userService.loginStatusSubject.asObservable().subscribe(res=>{
    this.userService.getFavCusine().subscribe(res=>{
     
      console.log(res)
      window.location.reload()
    })
  })
  
  this.router.navigate(['/fav-cousine'])
}

// showFavCouision(){
 
 
//   this.userService.loginStatusSubject.next(true);
//   this.router.navigate(['/fav-cousine'])
// }


}
