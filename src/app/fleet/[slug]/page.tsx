import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCarBySlug, fleet } from '@/data/fleet';
import dynamic from 'next/dynamic';

const VehicleDetails = dynamic(() => import('@/components/VehicleDetails'), { ssr: false });

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return fleet.map((car) => ({
    slug: car.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = getCarBySlug(params.slug);
  if (!car) return { title: 'Vehicle Not Found' };

  return {
    title: `Rent ${car.name} in Goa | ₹${car.pricePerDay}/Day`,
    description: `Looking to rent a ${car.name} in Goa? Book our well-maintained ${car.type.toLowerCase()} today for just ₹${car.pricePerDay} per day. Helmets included!`,
    openGraph: {
      title: `Rent ${car.name} in Goa | ₹${car.pricePerDay}/Day`,
      description: `Looking to rent a ${car.name} in Goa? Book our well-maintained ${car.type.toLowerCase()} today for just ₹${car.pricePerDay} per day.`,
      images: [{ url: car.img, alt: `Rent ${car.name} in Goa` }],
    },
    alternates: {
      canonical: `https://vihanrentals.in/fleet/${car.slug}`,
    },
  };
}

export default function CarPage({ params }: Props) {
  const car = getCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  return <VehicleDetails car={car} />;
}
