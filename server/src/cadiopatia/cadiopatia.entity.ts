/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cadiopatia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo:string;

  @Column()
  familia: string;

  @Column()
  paciente:string;

  @Column()
  nhc:string;

  @Column()
  nombre:string;

  @Column({length:1})
  sexo:string;

  @Column()
  f_nacimiento:Date;

  @Column()
  edad_al_diagnostico:Int16Array;

  


  @Column('jsonb', { nullable: true })
  options: string[];
}
