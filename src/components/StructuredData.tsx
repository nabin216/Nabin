import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Person' | 'WebSite' | 'WebPage' | 'Article' | 'Project';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generatePersonData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Nabin',
      alternateName: 'Asadur Zaman Nabin',
      description: 'Full Stack Developer & ML Engineer with expertise in web development, machine learning, and software engineering.',
      image: 'https://nabin216.github.io/PortFolio/nabin.jpg',
      sameAs: [
        'https://github.com/nabin216',
        'https://www.linkedin.com/in/nabin216/',
        // Add more social profiles here
      ],
      jobTitle: 'Full Stack Developer & ML Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Nabcode IT Solutions',
        url: 'https://nabcode.tech'
      },
      url: 'https://nabin216.github.io/PortFolio/',
      knowsAbout: [
        'Web Development',
        'Machine Learning',
        'Software Engineering',
        'React',
        'Node.js',
        'Python',
        'TensorFlow',
        'Cybersecurity'
      ],
      ...data
    };
  };

  const generateWebSiteData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: "Nabin's Portfolio",
      alternateName: "Asadur Zaman Nabin's Portfolio",
      url: 'https://nabin216.github.io/PortFolio/',
      description: 'Personal portfolio showcasing full-stack development, machine learning projects, and software engineering experience.',
      author: {
        '@type': 'Person',
        name: 'Nabin'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://nabin216.github.io/PortFolio/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      },
      ...data
    };
  };

  const generateWebPageData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.title || "Nabin's Portfolio",
      description: data.description || 'Personal portfolio showcasing full-stack development, machine learning projects, and software engineering experience.',
      url: data.url || 'https://nabin216.github.io/PortFolio/',
      author: {
        '@type': 'Person',
        name: 'Nabin'
      },
      datePublished: '2024-03-03T12:00:00+00:00',
      dateModified: '2024-03-03T12:00:00+00:00',
      inLanguage: 'en-US',
      ...data
    };
  };

  const generateArticleData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title || 'Research Article',
      description: data.description || 'Research article on technology and innovation',
      image: data.image || 'https://nabin216.github.io/PortFolio/og-image.jpg',
      author: {
        '@type': 'Person',
        name: 'Nabin'
      },
      publisher: {
        '@type': 'Person',
        name: 'Nabin',
        logo: {
          '@type': 'ImageObject',
          url: 'https://nabin216.github.io/PortFolio/logo192.png'
        }
      },
      datePublished: data.datePublished || '2024-03-03T12:00:00+00:00',
      dateModified: data.dateModified || '2024-03-03T12:00:00+00:00',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': data.url || 'https://nabin216.github.io/PortFolio/research'
      },
      ...data
    };
  };

  const generateProjectData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: data.title || 'Project',
      description: data.description || 'Software development project',
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web',
      author: {
        '@type': 'Person',
        name: 'Nabin'
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/OnlineOnly'
      },
      screenshot: data.image || 'https://nabin216.github.io/PortFolio/og-image.jpg',
      ...data
    };
  };

  const getStructuredData = () => {
    switch (type) {
      case 'Person':
        return generatePersonData();
      case 'WebSite':
        return generateWebSiteData();
      case 'WebPage':
        return generateWebPageData();
      case 'Article':
        return generateArticleData();
      case 'Project':
        return generateProjectData();
      default:
        return {};
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData; 