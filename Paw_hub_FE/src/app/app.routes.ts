
import { CanActivate } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { AdminGuard } from './core/guard/admin.guard';
import { RestaurantGuard } from './core/guard/restaurant.guard';
import { ClientGuard } from './core/guard/client.guard';
import { CartComponent } from './components/cart/cart/cart.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { MenuManagementComponent } from './components/restaurant/menu-management/menu-management.component';
import { RestaurantOrderManagementComponent } from './components/restaurant/restaurant-order-management/restaurant-order-management.component';
import { ClientOrderHistoryComponent } from './components/client/order-history/order-history.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RestaurantProfileComponent } from './components/restaurant/restaurant-profile/restaurant-profile.component';
// Components usados
import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { RestaurantValidationComponent } from './components/admin/restaurant-validation/restaurant-validation.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';




export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserProfileComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'validate-restaurants', component: RestaurantValidationComponent },
      { path: 'users', component: UserListComponent }
    ]
    // Pode adicionar canActivate: [AdminGuard] aqui se implementares um guard
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];