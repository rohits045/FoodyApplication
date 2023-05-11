import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FileHandle } from '../model/FileHandle';
import { RestaurantAdminService } from '../services/restaurant-services/restaurant-admin.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private adminservice:RestaurantAdminService,private sanitizer: DomSanitizer,
    private route :Router,private snackBar: MatSnackBar
   ){}
  UserSignUp=new FormGroup({
    emailId:new FormControl('', [Validators.required,this.checkIfGuestEmailsAreValid]),
    firstName:new FormControl('', [Validators.required]),
    lastName:new FormControl(''), 
    password:new FormControl('', [Validators.required]),
    profilePicture:new FormControl('')
    
  });
  
get emailId(){return this.UserSignUp.get("emailId")};
  get firstName(){return this.UserSignUp.get("firstName")};
  get lastName(){return this.UserSignUp.get("lastName")};
  get profilePicture(){return this.UserSignUp.get("profilePicture")};
  get password(){return this.UserSignUp.get("password")};
   admin_data:any;
  public userFile1:any = File;
  public userFile2:any = File;

  signUp(submitForm:FormGroup)
  {
    const commonUser = submitForm.value;
    const formData = new FormData();
   formData.append('commonUser', JSON.stringify(commonUser));
     formData.append('file',this.userFile2);
    this.adminservice.register_User(formData).subscribe({next:(res)=>{
    this.snackBar.open('Signed Up Successfull', 'Close', {
    duration: 2000,
  });
  // this.route.navigate(['/user-dashboard'])
  this.goToLogin();
   },error: (err) => {
    console.log(err);
    if (err.status == 409) {
      this.snackBar.open(err.error.message, 'Close', { duration: 2000 });
    }
  },
});
}
  onChangeFileFiled(event:any){
    console.log(event.target.files[0])
    const file=event.target.files[0];
    // this.user.fileName=this.file.fileName;
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
        this.route.navigate(['/login'])
      }
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
