export interface User {
  id: number;
  username: string;
  email: string;
  isRestaurant?: boolean; // true se for restaurante aprovado
  pendingRestaurantApproval?: boolean; // true se pediu para ser restaurante, mas ainda não foi aprovado
  // ... outros campos
}