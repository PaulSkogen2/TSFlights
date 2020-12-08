
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flights {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 20 })
  origin: string;

  @Column("varchar", { length: 20 })
  destination: string;

  @Column('int')
  flightNumber: number;

  @Column('datetime')
  depart: Date;

  @Column('datetime')
  arrive: Date;

  @Column('boolean')
  nonstop: boolean;
}