import {
  shopping,
  culinary,
  nature,
  culture,
  attractions,
} from 'assets/images';
import { USER_ROUTES } from 'routes';

export const mustVisit = [
  {
    id: 1,
    name: 'Trans Studio Bandung',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/02/64/01/8b/filename-photo0465-jpg.jpg',
    ],
    snippet: `Trans Studio Bandung theme park is one of the world's largest indoor theme parks, consists of two floors and has 20 fantastic rides, divided into three zones: central studio, classic grandeur of Hollywood and New York style; Lost City, the land of adventurers the thirst challenges, and magic corner.`,
    slug: '/',
  },
  {
    id: 2,
    name: 'NuArt Sculpture Park',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/0d/52/25/cb/nuart-sculpture-park.jpg',
    ],
    snippet:
      'NuArt Sculpture Park primarily exhibits the works of the sculptor Nyoman Nuarta that spans from the ',
    slug: '/culture-art/nuart-sculpture-park',
  },
  {
    id: 3,
    name: 'Museum of The Asian-African Conference',
    images: [
      'https://cdn1.katadata.co.id/media/images/thumb/2020/04/03/2020_04_03-14_03_08_912bf38709d1751bfe7c23ba5c14cc40_620x413_thumb.jpg',
    ],
    snippet: `Museum KAA, a place where the history of the Asian-African was raised, and the Asian-African Partnership `,
    slug: '/history-heritage/museum-of-the-asian-african-conference',
  },
];

export const interestSection = [
  {
    name: 'Attractions',
    images: attractions,
    slug: USER_ROUTES.ATTRACTIONS,
  },
  {
    name: 'Culture & Art',
    images: culture,
    slug: USER_ROUTES.CULTURE_ART,
  },
  {
    name: 'Shopping',
    images: shopping,
    slug: USER_ROUTES.SHOPPING,
  },
  {
    name: 'Nature',
    images: nature,
    slug: USER_ROUTES.NATURE,
  },
  {
    name: 'Culinary',
    images: culinary,
    slug: USER_ROUTES.CULINARY,
  },
  {
    name: 'History & Heritage',
    images:
      'https://cdn1.katadata.co.id/media/images/thumb/2020/04/03/2020_04_03-14_03_08_912bf38709d1751bfe7c23ba5c14cc40_620x413_thumb.jpg',
    slug: USER_ROUTES.HISTORY,
  },
];
