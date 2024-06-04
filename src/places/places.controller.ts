import { Controller, Post, Body } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlaceDto } from './dto/place.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('places')
@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  @ApiOperation({ summary: 'get dental location recommendations' })
  @ApiResponse({ status: 201, description: 'places: []' })
  async dentalLocation(@Body() nearbyPlace: PlaceDto) {
    const response = await this.placesService.getDentalLocation(nearbyPlace);
    return response;
  }
}
