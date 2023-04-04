import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PratosService } from './pratos.service';
import { CreatePratoDto } from './dto/create-prato.dto';

@Controller('pratos')
export class PratosController {
  constructor(private readonly pratosService: PratosService) {}
  @Post()
  create(@Body() createPratoDto: CreatePratoDto) {
    return this.pratosService.create(createPratoDto);
  }
  @Get()
  findAll() {
    return this.pratosService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pratosService.findOne(+id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pratosService.remove(+id);
  }
}
