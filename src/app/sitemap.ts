/**
 * This will return a sitemap file
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generating-a-sitemap-using-code-js-ts
 */


import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // home
    {
      url: 'https://ener-track-bay.vercel.app/',
      lastModified: new Date(),
      priority: 1,
    },
    // about
    {
      url: 'https://ener-track-bay.vercel.app/about',
      lastModified: new Date(),
      priority: 0.6,
    },
    // products
    {
      url: 'https://ener-track-bay.vercel.app/products',
      lastModified: new Date(),
      priority: 0.8,
    },
    // contact
    {
      url: 'https://ener-track-bay.vercel.app/contact',
      lastModified: new Date(),
      priority: 0.7,
    },
  ]
}