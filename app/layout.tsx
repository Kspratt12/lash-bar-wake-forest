import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lashbarwakeforest.com"),
  title: {
    default:
      "Lash Bar Wake Forest | Eyelash Extensions in Wake Forest, NC",
    template: "%s | Lash Bar Wake Forest",
  },
  description:
    "Boutique lash extensions in Wake Forest, NC. Classic, Hybrid, and Volume lash sets, fills, and removals at 2000 S Main Street. Custom-mapped, premium products, by appointment. Book online.",
  keywords: [
    "lash extensions Wake Forest NC",
    "eyelash extensions Wake Forest",
    "lash bar Wake Forest",
    "Wake Forest lashes",
    "classic lashes Wake Forest",
    "hybrid lashes Wake Forest",
    "volume lashes Wake Forest",
    "lash fill Wake Forest",
    "lash removal Wake Forest",
    "cluster lashes Wake Forest",
    "lash extensions near me Wake Forest",
    "best lash artist Wake Forest NC",
    "lash extensions Rolesville NC",
    "lash extensions Youngsville NC",
    "lash extensions North Raleigh",
    "lash extensions Heritage Wake Forest",
    "lash extensions Wakefield NC",
    "lash extensions Forestville NC",
    "eyelash extensions Raleigh NC",
    "lash bar near 27587",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lash Bar Wake Forest | Eyelash Extensions in Wake Forest, NC",
    description:
      "Classic, Hybrid & Volume lash extensions in Wake Forest, NC. Custom-mapped sets at a boutique studio on S Main Street.",
    url: "https://lashbarwakeforest.com",
    siteName: "Lash Bar Wake Forest",
    images: [{ url: "/images/photo-1.png", width: 1600, height: 900 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lash Bar Wake Forest | Eyelash Extensions in Wake Forest, NC",
    description:
      "Classic, Hybrid & Volume lash extensions in Wake Forest, NC.",
    images: ["/images/photo-1.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/images/lash-bar-wake-forest-logo.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "US-NC",
    "geo.placename": "Wake Forest, North Carolina",
    "geo.position": "35.9799;-78.5097",
    ICBM: "35.9799, -78.5097",
  },
};

export const viewport: Viewport = {
  themeColor: "#C89968",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": "https://lashbarwakeforest.com/#business",
  name: "Lash Bar Wake Forest",
  alternateName: ["Lash Bar of Wake Forest", "Wake Forest Lash Bar"],
  url: "https://lashbarwakeforest.com",
  logo: "https://lashbarwakeforest.com/images/lash-bar-wake-forest-logo.png",
  image: [
    "https://lashbarwakeforest.com/images/photo-1.png",
    "https://lashbarwakeforest.com/images/photo-3.png",
    "https://lashbarwakeforest.com/images/photo-7.png",
  ],
  description:
    "Boutique lash extensions studio in Wake Forest, NC offering Classic, Hybrid, and Volume eyelash extensions, fills, removals, and cluster lashes by appointment.",
  telephone: "+1-720-402-9075",
  email: "Lashbarwakeforest@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2000 S Main Street",
    addressLocality: "Wake Forest",
    addressRegion: "NC",
    postalCode: "27587",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.9799,
    longitude: -78.5097,
  },
  areaServed: [
    { "@type": "City", name: "Wake Forest" },
    { "@type": "City", name: "Rolesville" },
    { "@type": "City", name: "Youngsville" },
    { "@type": "City", name: "Raleigh" },
    { "@type": "City", name: "Wakefield" },
    { "@type": "Place", name: "Heritage, Wake Forest, NC" },
    { "@type": "Place", name: "Forestville, NC" },
    { "@type": "AdministrativeArea", name: "Wake County, NC" },
    { "@type": "AdministrativeArea", name: "Franklin County, NC" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lash Services",
    itemListElement: [
      { "@type": "Offer", price: "135", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Lash Extension Full Set", description: "Custom-mapped Classic, Hybrid, or Volume lash extension full set." } },
      { "@type": "Offer", price: "85", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Lash Fill — 2 Weeks" } },
      { "@type": "Offer", price: "100", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Lash Fill — 3 Weeks" } },
      { "@type": "Offer", price: "100", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Foreign Fill", description: "Refresh of lash extensions originally applied at another studio." } },
      { "@type": "Offer", price: "50", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Lash Removal" } },
      { "@type": "Offer", price: "30", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Cluster Lashes" } },
      { "@type": "Offer", price: "15", priceCurrency: "USD", itemOffered: { "@type": "Service", name: "Lash Cluster Tutorial" } },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services",
      inLanguage: "en-US",
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "Reservation", name: "Lash Appointment" },
  },
  sameAs: [
    "https://www.instagram.com/lashbarwakeforest/",
    "https://www.facebook.com/lashbarwakeforest/",
    "https://book.squareup.com/appointments/mgcls009iy8isa/location/L5GD315DBCWK3/services",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Lash Bar Wake Forest located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lash Bar Wake Forest is located at 2000 S Main Street in Wake Forest, NC, serving clients across Wake Forest, Rolesville, Youngsville, North Raleigh, Wakefield, and Heritage.",
      },
    },
    {
      "@type": "Question",
      name: "What lash extension styles do you offer in Wake Forest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Classic, Hybrid, and Volume lash extensions, foreign fills, lash removals, cluster lashes, and a lash cluster application tutorial.",
      },
    },
    {
      "@type": "Question",
      name: "How much do lash extensions cost in Wake Forest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing starts at $135 for a custom-mapped Full Set with commitment for fill ins. 2-week fills are $85 and 3-week fills are $100. Removals are $50, cluster lashes $30, and a cluster tutorial is $15.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment at Lash Bar Wake Forest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Booking is open through Square at book.squareup.com — slots open weekly. You can also email Lashbarwakeforest@gmail.com or text (720) 402-9075.",
      },
    },
    {
      "@type": "Question",
      name: "Do you take clients from Rolesville, Youngsville, and North Raleigh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — clients regularly travel to Lash Bar Wake Forest from Rolesville, Youngsville, North Raleigh, Wakefield, Heritage, and Forestville. The studio is on S Main Street, easy to reach off Capital Boulevard.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-cream text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
