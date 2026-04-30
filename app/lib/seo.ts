export const siteUrl = "https://zyrops.com";

export const brand = {
  name: "ZyrOps",
  legalName: "ZyrOps LLP",
  description:
    "ZyrOps builds AI-powered SaaS tools, custom web applications, mobile apps, desktop apps, backend systems, and operations support for businesses.",
  email: "hello@zyrops.com",
  phone: "+91 9488766222",
  locations: ["Kozhikode", "Wayanad"],
  region: "Kerala",
  country: "IN",
  instagram: "https://www.instagram.com/zyropsllp",
  linkedin: "https://www.linkedin.com/company/zyrops-llp",
};

export const seoKeywords = [
  "ZyrOps",
  "ZyrOps LLP",
  "AI powered SaaS development",
  "custom SaaS development Kerala",
  "web app development Kozhikode",
  "mobile app development Kerala",
  "Flutter app development",
  "Android app development",
  "iOS app development",
  "desktop application development",
  "Rust development company",
  "GoLang development company",
  "Python backend development",
  "React development",
  "Next.js development",
  "Angular development",
  "Django development",
  "Flask development",
  "AI agentic support platform",
  "HRMS software Kerala",
  "CRM software Kerala",
  "POS software Kerala",
  "ZyroHR",
  "ZyroCRM",
  "ZyroPOS",
  "ZyroSupport",
  "ZyroBooks",
  "CipherTrak",
];

export const indexableRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/blogs", priority: 0.88, changeFrequency: "weekly" as const },
  { path: "/careers", priority: 0.82, changeFrequency: "daily" as const },
  { path: "/site-map", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products/zyrohr", priority: 0.78, changeFrequency: "monthly" as const },
  { path: "/products/zyrocrm", priority: 0.78, changeFrequency: "monthly" as const },
  { path: "/products/zyropos", priority: 0.78, changeFrequency: "monthly" as const },
  { path: "/products/ciphertrak", priority: 0.78, changeFrequency: "monthly" as const },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function jsonLdScript(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: brand.name,
        legalName: brand.legalName,
        url: siteUrl,
        logo: absoluteUrl("/logo.png"),
        description: brand.description,
        email: brand.email,
        telephone: brand.phone,
        sameAs: [brand.instagram, brand.linkedin],
        address: {
          "@type": "PostalAddress",
          addressLocality: brand.locations.join(" and "),
          addressRegion: brand.region,
          addressCountry: brand.country,
        },
        knowsAbout: [
          "AI-powered SaaS products",
          "Custom web application development",
          "Mobile app development",
          "Desktop application development",
          "Rust, GoLang, and Python backend development",
          "HRMS, CRM, POS, support, accounting, and employee tracking platforms",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: brand.legalName,
        url: siteUrl,
        image: absoluteUrl("/logo.png"),
        telephone: brand.phone,
        email: brand.email,
        areaServed: [
          { "@type": "City", name: "Kozhikode" },
          { "@type": "AdministrativeArea", name: "Wayanad" },
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "Country", name: "India" },
        ],
        priceRange: "$$",
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "ZyrOps services and SaaS products",
          itemListElement: [
            "Custom SaaS Systems",
            "Programming & Backend",
            "Mobile App Delivery",
            "Web Frameworks",
            "Desktop Applications",
            "Hardware & OS Layer",
            "ZyroHR",
            "ZyroCRM",
            "ZyroPOS",
            "ZyroSupport",
            "ZyroBooks",
            "CipherTrak",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: brand.name,
        url: siteUrl,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}
