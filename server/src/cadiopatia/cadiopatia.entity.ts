/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cadiopatia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column('jsonb', { nullable: true })
  options: string[];
}
