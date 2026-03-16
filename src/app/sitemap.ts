import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vihantourandtravels.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
     // Add more URLs here as the site grows (e.g., /about, /services, /contact)
  ];
}
