import { Injectable } from '@nestjs/common';
import { PlaceDto } from './dto/place.dto';
import axios from 'axios';

@Injectable()
export class PlacesService {
  async getDentalLocation(nearbyPlace: PlaceDto) {
    if (nearbyPlace.latitude === null) {
      return 'Mohon isikan latitude';
    }
    if (nearbyPlace.longitude === null) {
      return 'Mohon isikan longitude';
    }

    const url = 'https://places.googleapis.com/v1/places:searchNearby';
    const data = {
      includedTypes: ['dental_clinic'],
      maxResultCount: 20,
      rankPreference: 'POPULARITY',
      locationRestriction: {
        circle: {
          center: {
            latitude: nearbyPlace.latitude,
            longitude: nearbyPlace.longitude,
          },
          radius: 5000.0,
        },
      },
    };

    const headers = {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': 'AIzaSyBh_Sv5sYPzB7exuCeyDdFX2ptAhSMdbUE',
      'X-Goog-FieldMask':
        'places.displayName,places.formattedAddress,places.photos,places.rating,places.currentOpeningHours',
    };

    try {
      const response = await axios.post(url, data, { headers });
      return response.data.places.map((placeData: any) => ({
        displayName: placeData.displayName.text,
        rating: placeData.rating,
        openingHours: placeData.weekdayDescriptions,
        address: placeData.formattedAddress,
        photos: placeData.photos?.map((value: any) => ({
          urlImage: `https://places.googleapis.com/v1/${value.name}/media?key=${process.env.GOOGLE_MAPS_API_KEY}&maxHeightPx=400&maxWidthPx=400`,
        })),
      }));
    } catch (error) {
      console.error('Error fetching data from Google Places API', error);
      throw error;
    }
  }
}
