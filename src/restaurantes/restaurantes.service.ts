import { Injectable } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { RestaurantesRepository } from './repositories/restaurantes.repository';

@Injectable()
export class RestaurantesService {
  constructor(private readonly repository: RestaurantesRepository) {}
  create(createRestauranteDto: CreateRestauranteDto) {
    return this.repository.create(createRestauranteDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateRestauranteDto: UpdateRestauranteDto) {
    return this.repository.update(id, updateRestauranteDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
