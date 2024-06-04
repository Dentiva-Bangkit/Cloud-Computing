import { Controller } from '@nestjs/common';
import { ExamplesService } from './examples.service';

@Controller('examples')
export class ExamplesController {
  constructor(private readonly examplesService: ExamplesService) {}
}
