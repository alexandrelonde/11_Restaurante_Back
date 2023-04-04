import { Module } from '@nestjs/common';
import { RestaurantesService } from './restaurantes.service';
import { RestaurantesController } from './restaurantes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RestaurantesRepository } from './repositories/restaurantes.repository';

@Module({
  controllers: [RestaurantesController],
  providers: [RestaurantesService, PrismaService, RestaurantesRepository],
})
export class RestaurantesModule {}
