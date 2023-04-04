import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestauranteDto } from '../dto/create-restaurante.dto';
import { RestauranteEntity } from '../entities/restaurante.entity';

@Injectable()
export class RestaurantesRepository {
  constructor(private readonly prisma: PrismaService) {}

  //OK
  async create(
    createRestauranteDto: CreateRestauranteDto,
  ): Promise<RestauranteEntity> {
    return this.prisma.restaurante.create({
      data: createRestauranteDto,
    });
  }

  async findAll(): Promise<RestauranteEntity[]> {
    return this.prisma.restaurante.findMany({
      include: {
        pratos: {
          select: {
            nome: true,
            descricao: true,
            preco: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.restaurante.findUnique({
      where: {
        id,
      },
      include: {
        pratos: {
          select: {
            nome: true,
            descricao: true,
            preco: true,
          },
        },
      },
    });
  }
  async update(id: number, updateRestauranteDto): Promise<RestauranteEntity> {
    return this.prisma.restaurante.update({
      where: {
        id,
      },
      data: updateRestauranteDto,
    });
  }
  async remove(id: number): Promise<RestauranteEntity> {
    return this.prisma.restaurante.delete({
      where: {
        id,
      },
    });
  }
}
