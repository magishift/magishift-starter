import { CrudMapper } from '@mandalalabs/magishift.core/dist/crud/crud.mapper';
import { Injectable } from '@nestjs/common';
import { DemoDto } from './demoModule.dto';
import { Demo } from './demoModule.entity';
import { IDemo, IDemoDto } from './interfaces/demoModule.interface';

@Injectable()
export class DemoMapper extends CrudMapper<IDemo, IDemoDto> {
  constructor() {
    super(Demo, DemoDto);
  }
}
