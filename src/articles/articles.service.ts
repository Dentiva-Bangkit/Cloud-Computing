import { Injectable } from '@nestjs/common';
import { ArticleDTO } from './dto/article.dto';
import axios from 'axios';

@Injectable()
export class ArticlesService {
  async getDentalNews(articleDto: ArticleDTO) {
    if (articleDto.query === '') {
      return 'Mohon isikan query';
    }
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=13aa0da7faa574c0a&q=${articleDto.query}&safe=active&lr=lang_id`;
    try {
      const response = await axios.get(url);
      return response.data.items.map((articleData: any) => ({
        title: articleData.title,
        shortDescription: articleData.snippet,
        url: articleData.link,
        image:
          articleData.pagemap?.cse_image || articleData.pagemap?.cse_thumbnail,
      }));
    } catch (error) {
      console.error('Error fetching data from Search API', error);
      throw error;
    }
  }
}
