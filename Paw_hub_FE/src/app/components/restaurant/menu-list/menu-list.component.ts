import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../core/services/menu-service/menu.service';
import { Menu } from '../../../models/menu.model';
import { AuthService } from '../../../core/auth-service/auth.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];
  loading = false;
  error?: string;

  constructor(
    private menuService: MenuService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadMenus();
  }

  loadMenus() {
    this.loading = true;
    const restaurantId = this.getRestaurantId();
    this.menuService.getMenusByRestaurant(restaurantId).subscribe({
      next: (menus) => {
        this.menus = menus;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao carregar menus';
        this.loading = false;
      }
    });
  }

  getRestaurantId(): string {
    const user = this.authService.getUser();
    return user.restaurantId || '';
  }
}