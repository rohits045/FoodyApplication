import { Address } from "./Address";
import { Cuisine } from "./Cuisine";
import { Restaurant } from "./Restaurant";


export class User
{
    emailId?:any;
    firstName?:any;
    lastName?:any;
    password?:any;
    profilePicture?:any|null;
    role?:any

    favouriteRestaurant:Restaurant[]=[];
    favouriteCuisine:Cuisine[]=[];
    // addressList:Address[]=[];
    constructor(emailId:any, firstName:any,password:any ,lastName:any,
        profilePicture:any, role?:any,
        favouriteRestaurant:Restaurant[]=[],
        favouriteCuisine:Cuisine[]=[] ,addressList:Address[]=[]
        )
    {
        this.emailId = emailId;     
        this.firstName = firstName;
        this.password = password;
        this.profilePicture = profilePicture;
              this.lastName = lastName
              this.role = role
             this.favouriteRestaurant=favouriteRestaurant
             this.favouriteCuisine = favouriteCuisine
            //  this.addressList =addressList
    }
} 