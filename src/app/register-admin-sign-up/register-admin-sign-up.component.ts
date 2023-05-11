import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { FileHandle } from '../model/FileHandle';
import { RestaurantAdminService } from '../services/restaurant-services/restaurant-admin.service';

@Component({
  selector: 'app-register-admin-sign-up',
  templateUrl: './register-admin-sign-up.component.html',
  styleUrls: ['./register-admin-sign-up.component.css']
})
export class RegisterAdminSignUpComponent {

  constructor(private adminservice:RestaurantAdminService,private sanitizer: DomSanitizer,
     private route :Router
    ){}


  RegisterData=new FormGroup({
    emailId:new FormControl('',[Validators.required,this.checkIfGuestEmailsAreValid]),
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl(''),
    password:new FormControl('',[Validators.required]),
    profilePicture:new FormControl('',[Validators.required])
  
  });
  
  get emailId(){return this.RegisterData.get("emailId")};
  get firstName(){return this.RegisterData.get("firstName")};
  get lastName(){return this.RegisterData.get("lastName")};
  get profilePicture(){return this.RegisterData.get("profilePicture")};
  get password(){return this.RegisterData.get("password")};
 admin_data:any;
  public userFile1:any = File;
  public userFile2:any = File;
  signUp(submitForm:FormGroup)
  {
    const commonUser = submitForm.value;
    const formData = new FormData();
   formData.append('commonUser', JSON.stringify(commonUser));
     formData.append('file',this.userFile2);
    this.adminservice.registerAdmin(formData).subscribe(
      response =>
      {
        console.log(response)
  
        alert("Restaurant Owner !! Registration done!!")
        this.goToLogin();
        // this.goToViewComponent();
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
      goToLogin(){
        this.route.navigate(['login'])
      }
      // goToViewComponent(){
      //   this.route.navigate(['view-restaurant'])
      // }
      // goToRegisterRestaurant(){
      //   this.route.navigate(['add-restaurant'])
      // }
      checkIfGuestEmailsAreValid(c: AbstractControl) {
        if (c.value !== '') {
          const emailString = c.value;
          const emails = emailString.split(',').map((e: string) => e.trim());
          const emailRegex ="^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$";
          const anyInvalidEmail = emails.every((e: string) => e.match(emailRegex) !== null);
          if (!anyInvalidEmail) {
            return { checkIfGuestEmailsAreValid: false }
          }
        }
        return null;
      }
}
