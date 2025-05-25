import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Order {
  id: number;
  clientName: string;
  items: any[];
  status: 'pending' | 'accepted' | 'dispatched' | 'delivered';
  address: string;
  payment: string;
}

@Component({
  selector: 'app-restaurant-order-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-order-management.component.html'
})
export class RestaurantOrderManagementComponent implements OnInit {
  orders: Order[] = [];

  ngOnInit() {
    // Filtra por restaurante, se necessário
    this.orders = JSON.parse(localStorage.getItem('orders') || '[]');
  }

  updateStatus(order: Order, status: 'accepted' | 'dispatched') {
    const idx = this.orders.findIndex(o => o.id === order.id);
    if (idx !== -1) {
      this.orders[idx].status = status;
      localStorage.setItem('orders', JSON.stringify(this.orders));
    }
  }
}