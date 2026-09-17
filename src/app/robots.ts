/**
 * This will return a robots file
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file
 */

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://ener-track-bay.vercel.app/sitemap.xml",
  };
}