import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuToRestaurantComponent } from './add-menu-to-restaurant/add-menu-to-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddToCardComponent } from './add-to-card/add-to-card.component';
import { AddYourRestaurantComponent } from './add-your-restaurant/add-your-restaurant.component';
import { AddressComponent } from './address/address.component';
import { AllRestaurantViewComponent } from './all-restaurant-view/all-restaurant-view.component';
import { CousineAddCardComponent } from './cousine-add-card/cousine-add-card.component';
import { AddressListComponent } from './favourite_items/address-list/address-list.component';
import { FavCousineComponent } from './favourite_items/fav-cousine/fav-cousine.component';
import { FavRestaurantComponent } from './favourite_items/fav-restaurant/fav-restaurant.component';
import { FoodyAdminComponent } from './foody-admin/foody-admin.component';
import { FoodyAppDetailsComponent } from './foody-app-details/foody-app-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderCartListComponent } from './order-cart-list/order-cart-list.component';
import { OwnerResgisterRestaurantComponent } from './owner-resgister-restaurant/owner-resgister-restaurant.component';
import { OwnerRestaurantsDetailsComponent } from './owner-restaurants-details/owner-restaurants-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RegisterAdminSignUpComponent } from './register-admin-sign-up/register-admin-sign-up.component';
import { CanActivateService } from './services/can-activate.service';
import { CanDeActivateGuard } from './services/can-de-activate.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';

const routes: Routes = [
  
 
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'sign-up',component:SignUpComponent},
  {path:'add-your-restaurant',component:AddYourRestaurantComponent},
  {path:'register-admin',component:RegisterAdminSignUpComponent},
  {path:'recipes',component:RecipesComponent},
  {path:"all-restaurant/:id",component:AllRestaurantViewComponent},
  {path:'login',component:LoginComponent 
},
{path:'user-dashboard',component:UserDashboardComponent
,canActivate:[CanActivateService]
},
{path:'foody-admin',component:FoodyAdminComponent
,canActivate:[CanActivateService]
},
{path:'user-profile',component:UserProfileComponent,canActivate:[CanActivateService]},
{path:'Add-To-Card',component:AddToCardComponent
,canActivate:[CanActivateService]
},
{path:'cousine-To-Card/:id',component:CousineAddCardComponent
,canActivate:[CanActivateService]
},
  {path:'view-restaurant',component:ViewRestaurantComponent,canActivate:[CanActivateService]},
  {path:'add-restaurant',component:AddRestaurantComponent,canActivate:[CanActivateService]},
  {path:'add-menu-to-restaurant',component:AddMenuToRestaurantComponent,canActivate:[CanActivateService]},
  {path:'address',component:AddressComponent,canActivate:[CanActivateService]},
  {path:'fav-retaurrant',component:FavRestaurantComponent,canActivate:[CanActivateService]},
  {path:'fav-cousine',component:FavCousineComponent,canActivate:[CanActivateService]},
  {path:'address-list',component:AddressListComponent,canActivate:[CanActivateService]},
  {path:'owner-restaurant',component:OwnerResgisterRestaurantComponent,canActivate:[CanActivateService]},
  {path:'restaurant-owner-details',component:OwnerRestaurantsDetailsComponent,canActivate:[CanActivateService]},
  {path:'app-details',component:FoodyAppDetailsComponent,canActivate:[CanActivateService]},
  {path:'order-List',component:OrderCartListComponent,canActivate:[CanActivateService]}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
