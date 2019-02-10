import { DraftModule } from '@mandalalabs/magishift.core/dist/crud/draft/draft.module';
import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoController } from './demoModule.controller';
import { DemoDto } from './demoModule.dto';
import { Demo } from './demoModule.entity';
import { DemoMapper } from './demoModule.mapper';
import { DemoService } from './demoModule.service';

@Module({
  imports: [DraftModule, TypeOrmModule.forFeature([Demo]), HttpModule],
  providers: [DemoService, DemoMapper, DemoDto],
  controllers: [DemoController],
})
export class DemoModule {}
