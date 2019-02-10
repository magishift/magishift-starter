import { CrudDto } from '@mandalalabs/magishift.core/dist/crud/crud.dto';
import {
  Form,
  FormField,
} from '@mandalalabs/magishift.core/dist/crud/form.decorator';
import {
  Grid,
  GridColumn,
} from '@mandalalabs/magishift.core/dist/crud/grid.decorator';
import { FieldTypes } from '@mandalalabs/magishift.core/dist/crud/interfaces/form.interface';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IDemoDto } from './interfaces/demoModule.interface';

@Grid()
@Form()
export class DemoDto extends CrudDto implements IDemoDto {
  @IsString()
  @ApiModelProperty()
  @GridColumn({
    text: 'Title',
  })
  @FormField({
    label: 'Title',
    messages: 'This is Title field',
    type: FieldTypes.Text,
  })
  title: string;

  @IsString()
  @ApiModelProperty()
  @GridColumn({
    text: 'Description',
  })
  @FormField({
    label: 'Description',
    messages: 'This is Description field',
    type: FieldTypes.Textarea,
  })
  description: string;
}
