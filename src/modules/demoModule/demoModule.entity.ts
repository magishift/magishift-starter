import { CrudEntity } from '@mandalalabs/magishift.core/dist/crud/crud.entity';
import { Column, Entity } from 'typeorm';
import { IDemo } from './interfaces/demoModule.interface';

@Entity()
export class Demo extends CrudEntity implements IDemo {
  @Column()
  title: string;

  @Column()
  description: string;
}
