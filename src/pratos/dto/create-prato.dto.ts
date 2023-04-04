import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreatePratoDto {
  @IsString()
  descricao: string;

  @IsString()
  nome: string;

  @IsNumber()
  preco: number;

  @IsEmail()
  restauranteEmail: string;
}
