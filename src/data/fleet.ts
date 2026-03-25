export interface Car {
  slug: string;
  name: string;
  type: string;
  img: string;
  pricePerDay: number;
  seats: number;
  luggage: number;
  fuel: string;
  transmission: string;
  description: string;
  features: string[];
}

export const fleet: Car[] = [
  {
    slug: 'maruti-baleno',
    name: 'Maruti Baleno',
    type: 'Hatchback',
    img: '/cars/baleno.png',
    pricePerDay: 1500,
    seats: 5,
    luggage: 2,
    fuel: 'Petrol',
    transmission: 'Manual / Automatic',
    description: 'The Maruti Baleno is a premium hatchback known for its spacious interiors and smooth ride. Perfect for navigating Goa\'s streets in comfort and style.',
    features: ['Air Conditioning', 'Power Steering', 'Power Windows', 'Bluetooth Audio', 'Central Locking']
  },
  {
    slug: 'maruti-ertiga',
    name: 'Maruti Ertiga',
    type: 'MUV',
    img: '/cars/ertiga.png',
    pricePerDay: 2500,
    seats: 7,
    luggage: 3,
    fuel: 'Petrol / CNG',
    transmission: 'Manual / Automatic',
    description: 'The Maruti Ertiga is the ideal choice for families and large groups. With 7 seats and ample luggage space, it ensures everyone travels comfortably.',
    features: ['7 Seater', 'Dual Airbags', 'Rear AC Vents', 'Touchscreen Infotainment', 'Reverse Parking Sensors']
  },
  {
    slug: 'mahindra-thar',
    name: 'Mahindra Thar',
    type: 'SUV',
    img: '/cars/thar.png',
    pricePerDay: 3500,
    seats: 4,
    luggage: 2,
    fuel: 'Diesel',
    transmission: 'Manual / Automatic',
    description: 'Experience Goa in the iconic Mahindra Thar. Perfect for those who want to explore both beaches and backroads with a touch of adventure.',
    features: ['4x4 Capability', 'Convertible Top', 'Touchscreen Display', 'Cruise Control', 'Alloy Wheels']
  },
  {
    slug: 'maruti-swift',
    name: 'Maruti Swift',
    type: 'Hatchback',
    img: '/cars/swift.png',
    pricePerDay: 1200,
    seats: 5,
    luggage: 2,
    fuel: 'Petrol',
    transmission: 'Manual / Automatic',
    description: 'The Maruti Swift is a cult favorite in India. Its sporty design and agile handling make it the most popular choice for self-drive rentals in Goa.',
    features: ['Agile Handling', 'Fuel Efficient', 'Bluetooth Connectivity', 'Power Windows', 'ABS with EBD']
  },
  {
    slug: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    type: 'Luxury SUV',
    img: '/cars/fortuner.png',
    pricePerDay: 6500,
    seats: 7,
    luggage: 4,
    fuel: 'Diesel',
    transmission: 'Automatic',
    description: 'Make a statement with our flagship Toyota Fortuner. Combining luxury with raw power, it\'s the ultimate premium SUV for your Goa holiday.',
    features: ['Leather Upholstery', 'Dual Zone Climate Control', 'JBL Audio System', '7 Airbags', 'Off-road Modes']
  }
];

export const getCarBySlug = (slug: string) => fleet.find(car => car.slug === slug);
