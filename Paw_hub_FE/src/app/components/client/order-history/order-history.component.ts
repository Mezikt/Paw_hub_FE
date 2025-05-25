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
  selector: 'app-client-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html'
})
export class ClientOrderHistoryComponent implements OnInit {
  orders: Order[] = [];
  currentUser = 'João Silva'; // Podes buscar do perfil/autenticação

  ngOnInit() {
    this.orders = (JSON.parse(localStorage.getItem('orders') || '[]') as Order[])
      .filter(order => order.clientName === this.currentUser);
  }

  confirmDelivered(order: Order) {
    const idx = this.orders.findIndex(o => o.id === order.id);
    if (idx !== -1) {
      this.orders[idx].status = 'delivered';
      // Atualizar no localStorage (atenção, atualiza todos!)
      const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      const globalIdx = allOrders.findIndex((o: Order) => o.id === order.id);
      if (globalIdx !== -1) {
        allOrders[globalIdx].status = 'delivered';
        localStorage.setItem('orders', JSON.stringify(allOrders));
      }
    }
  }
}