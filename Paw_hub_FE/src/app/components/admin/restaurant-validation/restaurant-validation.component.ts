import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user-service/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-restaurant-validation',
  templateUrl: './restaurant-validation.component.html',
  styleUrls: ['./restaurant-validation.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class RestaurantValidationComponent implements OnInit {
  pendingUsers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadPendingUsers();
  }

  loadPendingUsers() {
    this.userService.getPendingRestaurantUsers().subscribe(users => {
      this.pendingUsers = users;
    });
  }

  approve(user: User) {
    this.userService.approveRestaurant(user.id).subscribe(() => {
      this.loadPendingUsers();
    });
  }

  reject(user: User) {
    this.userService.rejectRestaurant(user.id).subscribe(() => {
      this.loadPendingUsers();
    });
  }
}