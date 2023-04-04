import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateRestauranteDto {
  @IsEmail()
  email: string;
  @IsString()
  endereco: string;
  @IsString()
  nome: string;

  @IsNumber()
  nota: number;
}
