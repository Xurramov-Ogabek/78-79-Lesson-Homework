import { PartialType } from '@nestjs/mapped-types';
import { CreateMerchanDto } from './create-merchan.dto';

export class UpdateMerchanDto extends PartialType(CreateMerchanDto) {}
