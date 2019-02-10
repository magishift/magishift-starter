import { DefaultRoles } from '@mandalalabs/magishift.core/dist/auth/role/role.const';
import { CrudControllerFactory } from '@mandalalabs/magishift.core/dist/crud/crud.controller';
import { Controller } from '@nestjs/common';
import { DemoMapper } from './demoModule.mapper';
import { DemoService } from './demoModule.service';
import { DEMO_MODULE_ENDPOINT } from './interfaces/demoModule.const';
import { IDemo, IDemoDto } from './interfaces/demoModule.interface';

@Controller(DEMO_MODULE_ENDPOINT)
export class DemoController extends CrudControllerFactory<IDemoDto, IDemo>(
  DEMO_MODULE_ENDPOINT,
  {
    default: [DefaultRoles.admin],
  },
) {
  constructor(
    readonly demoService: DemoService,
    protected readonly mapper: DemoMapper,
  ) {
    super(demoService, mapper);
  }
}
