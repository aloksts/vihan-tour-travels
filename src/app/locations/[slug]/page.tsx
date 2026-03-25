import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, locations } from '@/data/locations';
import dynamic from 'next/dynamic';

const LocationDetails = dynamic(() => import('@/components/LocationDetails'), { ssr: false });

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Car Rental at ${location.shortName} Goa | Self Drive Cars`,
    description: `Book self-drive cars at ${location.name} Goa with Vihan Rentals. 24/7 delivery at ${location.shortName}, well-maintained fleet, and affordable rates.`,
    alternates: {
      canonical: `https://vihanrentals.in/locations/${location.slug}`,
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  return <LocationDetails location={location} />;
}
