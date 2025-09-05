/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CadiopatiaService } from './cadiopatia.service';

@Controller('cadiopatias')
export class CadiopatiaController {
  constructor(private readonly cadiopatiaService: CadiopatiaService) {}

  @Post()
  createCadiopatia(
    @Body() { question, options }: { question: string; options: string[] },
  ) {
    return this.cadiopatiaService.createCadiopatia(question, options);
  }

  @Get()
  getAllCadiopatias() {
    return this.cadiopatiaService.getAllCadiopatias();
  }
}
