import { CrudService } from '@mandalalabs/magishift.core/dist/crud/crud.service';
import { DraftService } from '@mandalalabs/magishift.core/dist/crud/draft/draft.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Demo } from './demoModule.entity';
import { DemoMapper } from './demoModule.mapper';
import { IDemo, IDemoDto } from './interfaces/demoModule.interface';

@Injectable()
export class DemoService extends CrudService<IDemo, IDemoDto> {
  constructor(
    @InjectRepository(Demo)
    protected readonly DemoRepository: Repository<Demo>,
    protected readonly draftService: DraftService,
    protected readonly mapper: DemoMapper,
  ) {
    super(DemoRepository, draftService, mapper);
  }
}
