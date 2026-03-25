export interface Location {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  fullAddress: string;
  coordinates: { lat: number; lng: number };
}

export const locations: Location[] = [
  {
    slug: 'mopa-airport',
    name: 'Mopa International Airport (GOX)',
    shortName: 'Mopa Airport',
    description: 'Vihan Rentals provides seamless car rental pickup and drop services at the new Mopa International Airport. Start your Goa journey comfortably with our premium fleet waiting for you at the arrival gate.',
    fullAddress: 'Mopa, Pernem, Goa 403512',
    coordinates: { lat: 15.7601, lng: 73.8681 }
  },
  {
    slug: 'dabolim-airport',
    name: 'Goa International Airport (Dabolim - GOI)',
    shortName: 'Dabolim Airport',
    description: 'Convenient self-drive car rentals at Dabolim Airport. We offer 24/7 delivery and pickup services right outside the terminal, ensuring you waste no time getting to your destination.',
    fullAddress: 'Dabolim, Goa 403801',
    coordinates: { lat: 15.3855, lng: 73.8647 }
  },
  {
    slug: 'calangute',
    name: 'Calangute / Baga Car Rental',
    shortName: 'Calangute',
    description: 'Rent a car in the heart of North Goa. Our Calangute service center is perfectly located for those staying near the bustling beaches of Calangute and Baga.',
    fullAddress: 'Calangute, North Goa 403516',
    coordinates: { lat: 15.5442, lng: 73.7553 }
  },
  {
    slug: 'panjim',
    name: 'Panjim (Panaji) Car Rental',
    shortName: 'Panjim',
    description: 'Explore the state capital with ease. Vihan Rentals offers reliable car hire in Panaji for business travelers and tourists alike.',
    fullAddress: 'Panaji, Goa 403001',
    coordinates: { lat: 15.4967, lng: 73.8278 }
  }
];

export const getLocationBySlug = (slug: string) => locations.find(loc => loc.slug === slug);
