import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user-service/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html'
})
export class RestaurantProfileComponent {
  restaurant: User | null = null;

  constructor(private userService: UserService) {
    this.restaurant = this.userService.getCurrentUser();
  }
}