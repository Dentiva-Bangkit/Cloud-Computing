import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ArticleDTO {
  @ApiProperty()
  @IsString()
  query: string;
}
