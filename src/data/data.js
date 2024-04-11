export const services = [
  {
    id: 1,
    title: 'Book Flight',
    description:
      "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
    img: '/assets/services/flight.png',
  },
  {
    id: 2,
    title: 'Book Hotels',
    description:
      "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
    img: '/assets/services/hotels.png',
  },
  {
    id: 3,
    title: 'Book Cruises',
    description:
      "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
    img: '/assets/services/cruise.png',
  },
  {
    id: 4,
    title: 'Book family Vacation',
    description:
      "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
    img: '/assets/services/vacation.png',
  },
];

export const tours = [
  {
    id: 1,
    title: 'Barcelona, Spain',
    description: '2 adults, 7 days',
    price: '2400$',
    img: '/assets/tours/barcelona.png',
  },
  {
    id: 2,
    title: 'Rome, Italy',
    description: '2 adults, 3 days',
    price: '1800$',
    img: '/assets/tours/rome.png',
  },
  {
    id: 3,
    title: 'Paris, France',
    description: '2 adults, 4 days',
    price: '2100$',
    img: '/assets/tours/paris.png',
  },
  {
    id: 4,
    title: 'Luxor City, Egypt',
    description: '2 adults, 3 days',
    price: '800$',
    img: '/assets/tours/luxor.png',
  },
  {
    id: 5,
    title: 'Barcelona, Spain',
    description: '2 adults, 7 days',
    price: '2400$',
    img: '/assets/tours/barcelona.png',
  },
  {
    id: 6,
    title: 'Rome, Italy',
    description: '2 adults, 3 days',
    price: '1800$',
    img: '/assets/tours/rome.png',
  },
  {
    id: 7,
    title: 'Paris, France',
    description: '2 adults, 4 days',
    price: '2100$',
    img: '/assets/tours/paris.png',
  },
  {
    id: 8,
    title: 'Luxor City, Egypt',
    description: '2 adults, 3 days',
    price: '800$',
    img: '/assets/tours/luxor.png',
  },
];

export const blogs = [
  {
    id: 1,
    title: 'Interesting Tibetan Traditions',
    img: '/assets/blogs/tibet.png',
  },
  {
    id: 2,
    title: 'Are There Volcanos In Hawaii?',
    img: '/assets/blogs/hawaii.png',
  },
  {
    id: 3,
    title: 'Winter in Iceland',
    img: '/assets/blogs/iceland.png',
  },
  {
    id: 4,
    title: 'Interesting Tibetan Traditions',
    img: '/assets/blogs/tibet.png',
  },
  {
    id: 5,
    title: 'Are There Volcanos In Hawaii?',
    img: '/assets/blogs/hawaii.png',
  },
  {
    id: 6,
    title: 'Winter in Iceland',
    img: '/assets/blogs/iceland.png',
  },
];

const locations = [
  'Rome, Italy',
  'Luxor City, Egypt',
  'Paris, France',
  'Barcelona, Spain',
  'Tokyo, Japan',
  'New York City, USA',
  'London, UK',
  'Sydney, Australia',
  'Dubai, UAE',
  'Athens, Greece',
  'Rio de Janeiro, Brazil',
  'Machu Picchu, Peru',
  'Venice, Italy',
  'Cape Town, South Africa',
  'Prague, Czech Republic',
  'Kyoto, Japan',
  'Bali, Indonesia',
  'Amsterdam, Netherlands',
  'Florence, Italy',
];

const tourOffers = [
  'City Tour',
  'Mountain Trek',
  'Beach Day Trip',
  'Cultural Excursion',
  'Historical Walking Tour',
  'Wine Tasting Experience',
  'Wildlife Safari',
  'Adventure Zip Line',
  'Scuba Diving Expedition',
  'Food Tour',
  'Sunset Cruise',
  'Photography Tour',
  'Helicopter Tour',
  'Hot Air Balloon Ride',
  'River Rafting Adventure',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const persons = Array.from({ length: 10 }, (_, index) => index + 1);

export const dropdowns = [
  { options: locations, title: 'Your starting location' },
  { options: tourOffers, title: 'Choose a tour offer' },
  { options: months, title: 'Choose date' },
  { options: persons, title: 'Persons' },
];

export const servicesDropdowns = [
  { options: ['One Way', 'Two Way'], title: 'One Way' },
  { options: ['1 Adult', '2 Adult', '3 Adult', '4 Adult'], title: '1 Adult' },
  { options: ['Economy', 'First class', 'Bussiness'], title: 'Economy' },
];

export const rangeValues = {
  fromValue1: 12,
  toValue1: 24,
  fromValue2: 12,
  toValue2: 24,
  fromValue3: 7,
  toValue3: 30,
  fromValue4: 700,
  toValue4: 3000,
};

export const airports = [
  'Hartsfield-Jackson Atlanta',
  'Los Angeles',
  "O'Hare",
  'Dallas/Fort Worth',
];

export const airlines = ['American', 'Delta', 'United', 'Southwest'];

export const propertyTypes = [
  'Hotel',
  'Apartment',
  'Villa',
  'Resort',
  'Hostel',
  'Motel',
  'Guesthouse',
];

export const facilities = [
  'Free WiFi',
  'Swimming Pool',
  'Parking',
  'Fitness Center',
  'Restaurant',
  'Bar',
  'Spa',
  'Room Service',
  'Airport Shuttle',
  'Pet Friendly',
  'Air Conditioning',
  'Gym',
  'Beachfront',
  'Family Rooms',
  'Non-smoking Rooms',
  'Hot Tub',
  'Kitchen',
  'Breakfast Included',
  'Business Center',
  'Laundry Service',
];

export const roomFacilities = [
  'Air Conditioning',
  'WiFi',
  'TV',
  'Mini Fridge',
  'Safe',
  'Desk',
  'Telephone',
  'Ironing Facilities',
  'Hairdryer',
  'Coffee/Tea Maker',
  'Balcony',
  'Bathtub',
  'Shower',
  'Bathrobes',
  'Slippers',
  'Toiletries',
  'Kitchenette',
  'Microwave',
  'Oven',
  'Dining Area',
  'Sofa',
  'Fireplace',
  'Private Entrance',
  'Soundproofing',
];
