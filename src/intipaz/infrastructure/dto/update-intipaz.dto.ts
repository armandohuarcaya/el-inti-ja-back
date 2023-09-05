import { PartialType } from '@nestjs/mapped-types';
import { CreateIntipazDto } from './create-intipaz.dto';

export class UpdateIntipazDto extends PartialType(CreateIntipazDto) {}
