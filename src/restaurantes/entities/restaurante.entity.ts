import { Restaurante } from '@prisma/client';

export class RestauranteEntity implements Restaurante {
  email: string;
  endereco: string;
  id: number;
  nome: string;
  nota: number;
}
