import { CanActivate } from '@angular/router';
import { AdminGuard } from './core/guard/admin.guard';
import { RestaurantGuard } from './core/guard/restaurant.guard';
import { ClientGuard } from './core/guard/client.guard';
import { CartComponent } from './components/cart/cart/cart.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { MenuManagementComponent } from './components/restaurant/menu-management/menu-management.component';
import { RestaurantOrderManagementComponent } from './components/restaurant/restaurant-order-management/restaurant-order-management.component';
import { ClientOrderHistoryComponent } from './components/client/order-history/order-history.component';
import { ProfileComponent } from './components/profile/profile.component';
// Components usados
import { Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { RestaurantValidationComponent } from './components/admin/restaurant-validation/restaurant-validation.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { RestaurantProfileComponent } from './components/restaurant/restaurant-profile/restaurant-profile.component';
import { RestaurantFormComponent } from './components/restaurant/restaurant-form/restaurant-form.component';
import { MenuListComponent } from './components/restaurant/menu-list/menu-list.component';
import { MenuFormComponent } from './components/restaurant/menu-form/menu-form.component';
import { MenuDetailsComponent } from './components/restaurant/menu-details/menu-details.component';



export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'restaurant-profile', component: RestaurantProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-restaurant', component: RestaurantFormComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'validate-restaurants', component: RestaurantValidationComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UserListComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'menus', component: MenuListComponent, canActivate: [AuthGuard] },
  { path: 'add-menu', component: MenuFormComponent, canActivate: [AuthGuard] },
  { path: 'edit-menu/:id', component: MenuFormComponent, canActivate: [AuthGuard] },
  { path: 'menus/:id', component: MenuDetailsComponent, canActivate: [AuthGuard] },

];