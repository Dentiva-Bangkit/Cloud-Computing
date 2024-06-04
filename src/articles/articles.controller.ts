import { Controller, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDTO } from './dto/article.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiOperation({ summary: 'get oral health news' })
  @ApiResponse({ status: 201, description: 'list all news data' })
  async create(@Body() articleDto: ArticleDTO) {
    const response = await this.articlesService.getDentalNews(articleDto);
    return response;
  }
}
