/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository.js';
import { Cadiopatia } from './cadiopatia.entity';

@Injectable()
export class CadiopatiaService {
  constructor(
    @InjectRepository(Cadiopatia)
    private readonly cadiopatiaRepository: Repository<Cadiopatia>,
  ) {}

  async createCadiopatia(question: string, options: string[]): Promise<Cadiopatia> {
    const cadiopatia = this.cadiopatiaRepository.create({ question, options });
    return this.cadiopatiaRepository.save(cadiopatia);
  }

  async getAllCadiopatias(): Promise<Cadiopatia[]> {
    return this.cadiopatiaRepository.find();
  }
}
