import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminLoginService } from '../services/restaurant-services/admin-login.service';

@Component({
  selector: 'app-foody-app-details',
  templateUrl: './foody-app-details.component.html',
  styleUrls: ['./foody-app-details.component.css']
})
export class FoodyAppDetailsComponent implements OnInit {

constructor(private adminService :AdminLoginService,private snackBar : MatSnackBar){};
  ngOnInit(): void {
    this.getAllUserList();
  };

AllUsersData:any=[];

getAllUserList(){
  this.adminService.getAllUserDetails().subscribe(result=>{
    this.AllUsersData = result;
    console.log(result);
  })
}
deleteSpecific_account(id:any){
//  this.AllUsersData.forEach((a:any)=>{
//   this.AllUsersData.emailId = a;
if(id !="Admin@gmail.com"){
  this.adminService.delete(id).subscribe(res=>{
     
    console.log(res);
    console.warn("Account Delete Succesfully !!!")
   },
   (error=>{this.snackBar.open("Account Delete Successfully !!", "Dismiss", {duration:2000});
   
 console.log(error)}))  
}

}
}
