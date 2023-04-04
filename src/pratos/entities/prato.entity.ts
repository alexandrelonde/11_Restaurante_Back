import { Prato } from '@prisma/client';

export class PratoEntity implements Prato {
  descricao: string;
  id: number;
  nome: string;
  preco: number;
  restauranteId: number | null;
}
