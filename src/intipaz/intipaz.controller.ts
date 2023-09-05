import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IntipazService } from './application/intipaz.service';
import { IIntipazService } from './application/interfaces/intipaz.service.interface';
import { IGenericResponse } from '../commons/utils/general';
import { CreateIntipazDto } from './infrastructure/dto/create-intipaz.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('IntiPaz')
@Controller('api/intipaz')
export class IntipazController {
  constructor(
    @Inject(IntipazService) private readonly iIntipazService: IIntipazService,
  ) {}

  @Get('/team')
  async findAllTeam(): Promise<any> {
    return await this.iIntipazService.findAllTeam();
  }

  @Post('/save-team')
  async create(
    @Body() createUserDto: CreateIntipazDto,
  ): Promise<IGenericResponse<any>> {
    return await this.iIntipazService.create(createUserDto);
  }
}
