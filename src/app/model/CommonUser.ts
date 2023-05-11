export class CommonUser
{
    emailId?:any;
    firstName?:any;
    lastName?:any;
    password?:any;
    profilePicture?:any|null;
    constructor(emailId:any, firstName:any,password:any ,lastName:any,
        profilePicture:any){
            this.emailId = emailId;     
            this.firstName = firstName;
            this.password = password;
            this.profilePicture = profilePicture;
                  this.lastName = lastName
        }
}