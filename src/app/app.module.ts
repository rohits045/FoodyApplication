import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegisterAdminSignUpComponent } from './register-admin-sign-up/register-admin-sign-up.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddMenuToRestaurantComponent } from './add-menu-to-restaurant/add-menu-to-restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { AddressComponent } from './address/address.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// -----------------------------------------------------------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { AddYourRestaurantComponent } from './add-your-restaurant/add-your-restaurant.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AllRestaurantViewComponent } from './all-restaurant-view/all-restaurant-view.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddToCardComponent } from './add-to-card/add-to-card.component';
import { CousineAddCardComponent } from './cousine-add-card/cousine-add-card.component';
import { FavRestaurantComponent } from './favourite_items/fav-restaurant/fav-restaurant.component';
import { FavCousineComponent } from './favourite_items/fav-cousine/fav-cousine.component';
import { FilterPipe } from './services/filter.pipe';
import {MatTableModule} from '@angular/material/table';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddressListComponent } from './favourite_items/address-list/address-list.component';
import { OwnerResgisterRestaurantComponent } from './owner-resgister-restaurant/owner-resgister-restaurant.component';
import { OwnerRestaurantsDetailsComponent } from './owner-restaurants-details/owner-restaurants-details.component';
import { FoodyAdminComponent } from './foody-admin/foody-admin.component';
import { FoodyAppDetailsComponent } from './foody-app-details/foody-app-details.component';
import { OrderCartListComponent } from './order-cart-list/order-cart-list.component';
import { NgToastModule } from 'ng-angular-popup';
// ---------------------------------------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SignUpComponent,
    RegisterAdminSignUpComponent,
    AddRestaurantComponent,
    AddMenuToRestaurantComponent,
    ViewRestaurantComponent,
    AddressComponent,
    LoginComponent,
    AddYourRestaurantComponent,
    RecipesComponent,
    AllRestaurantViewComponent,
    UserDashboardComponent,
    AddToCardComponent,
    CousineAddCardComponent,
    FavRestaurantComponent,
    FavCousineComponent,
    FilterPipe,
    UserProfileComponent,
    AddressListComponent,
    OwnerResgisterRestaurantComponent,
    OwnerRestaurantsDetailsComponent,
    FoodyAdminComponent,
    FoodyAppDetailsComponent,
    OrderCartListComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,MatTableModule,NgToastModule,
    AppRoutingModule ,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatToolbarModule,MatIconModule,MatCardModule,MatCheckboxModule,MatButtonToggleModule,MatButtonModule,
    MatChipsModule,MatExpansionModule,MatSnackBarModule,MatSelectModule,MatRadioModule,MatDialogModule,
    MatInputModule,MatGridListModule,MatFormFieldModule,FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
