import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'portfolio' | 'profile';
  name?: string;
  role?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Nabin's Portfolio",
  description = "Welcome to my portfolio website. I am a passionate developer with expertise in web development, machine learning, and software engineering.",
  keywords = "web development, software engineer, machine learning, React, TypeScript, portfolio",
  image = "/og-image.jpg", // You'll need to add this image in your public folder
  url = "https://nabin216.github.io/PortFolio",
  type = "website",
  name = "Nabin",
  role = "Full Stack Developer & ML Engineer"
}) => {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "url": url,
    "image": image,
    "jobTitle": role,
    "description": description,
    "sameAs": [
      "https://github.com/nabin216",
      // Add your other social media profiles here
    ]
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph meta tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={name} />

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FAA500" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Performance optimization hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 