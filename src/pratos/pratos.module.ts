import { Module } from '@nestjs/common';
import { PratosService } from './pratos.service';
import { PratosController } from './pratos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PratosRepository } from './repositories/pratos.repository';

@Module({
  controllers: [PratosController],
  providers: [PratosService, PrismaService, PratosRepository],
})
export class PratosModule {}
