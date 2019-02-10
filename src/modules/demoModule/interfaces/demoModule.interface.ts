import {
  ICrudDto,
  ICrudEntity,
} from '@mandalalabs/magishift.core/dist/crud/interfaces/crud.interface';

export interface IDemo extends ICrudEntity {
  title: string;
  description: string;
}

export interface IDemoDto extends ICrudDto {
  title: string;
  description: string;
}
