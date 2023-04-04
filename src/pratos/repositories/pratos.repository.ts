import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePratoDto } from '../dto/create-prato.dto';
import { PratoEntity } from '../entities/prato.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class PratosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPratoDto: CreatePratoDto): Promise<PratoEntity> {
    const restauranteEmail = createPratoDto.restauranteEmail;
    delete createPratoDto.restauranteEmail;
    const restaurante = this.prisma.restaurante.findUnique({
      where: {
        email: restauranteEmail,
      },
    });

    const data: Prisma.PratoCreateInput = {
      ...createPratoDto,
      restaurante: {
        connect: {
          email: restauranteEmail,
        },
      },
    };

    return this.prisma.prato.create({
      data: data,
    });
  }

  async findAll(): Promise<PratoEntity[]> {
    return this.prisma.prato.findMany({
      include: {
        restaurante: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.prato.findUnique({
      where: {
        id,
      },
      include: {
        restaurante: true,
      },
    });
  }
  async remove(id: number): Promise<PratoEntity> {
    return this.prisma.prato.delete({
      where: {
        id,
      },
    });
  }
}
