import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIntipazDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'horeb', description: 'Nombre de equipo' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '../logoP', description: 'Log de equipo' })
  logo: string;
}
