import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePratoDto } from './dto/create-prato.dto';
import { PratosRepository } from './repositories/pratos.repository';

@Injectable()
export class PratosService {
  constructor(private readonly prismaRepository: PratosRepository) {}
  create(createPratoDto: CreatePratoDto) {
    return this.prismaRepository.create(createPratoDto);
  }

  findAll() {
    return this.prismaRepository.findAll();
  }

  findOne(id: number) {
    return this.prismaRepository.findOne(id);
  }

  async remove(id: number) {
    const plate = await this.prismaRepository.findOne(id);
    if (!plate)
      throw new NotFoundException({
        message:
          'Nao existe prato com esse id para remover, por favor tente com outro id',
      });
    return this.prismaRepository.remove(id);
  }
}
