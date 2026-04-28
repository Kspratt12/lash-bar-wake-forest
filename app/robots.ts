import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://lashbarwakeforest.com/sitemap.xml",
    host: "https://lashbarwakeforest.com",
  };
}
