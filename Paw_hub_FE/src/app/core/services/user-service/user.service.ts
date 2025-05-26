import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {} // <-- Adiciona isto

  // ... outros métodos

  applyForRestaurant(userId: number): Observable<any> {
    // Ajusta o endpoint conforme o teu backend!
    return this.http.patch(`/api/users/${userId}`, { pendingRestaurantApproval: true });
  }

  // método exemplo para obter user atual
  getCurrentUser(): User | null {
    // depende da tua lógica
    return JSON.parse(localStorage.getItem('user') || 'null');
  }
}