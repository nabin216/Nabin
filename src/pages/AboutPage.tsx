import React from 'react';
import Layout from '../components/layout/Layout';
import About from '../components/sections/About';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { motion } from 'framer-motion';
import AIChatbot from '../components/sections/AIChatbot';
import ResearchHighlights from '../components/sections/ResearchHighlights';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Me - Nabin's Portfolio"
        description="Learn about my background, skills, and experience in software development, machine learning, and web technologies."
        keywords="about, biography, skills, experience, education, software developer, machine learning engineer, Nabin, Asadur Zaman Nabin"
        url="https://nabin216.github.io/about"
      />
      <StructuredData 
        type="WebPage" 
        data={{
          title: "About Me - Nabin's Portfolio",
          description: "Learn about my background, skills, and experience in software development, machine learning, and web technologies.",
          url: "https://nabin216.github.io/about"
        }} 
      />
      <Layout>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              About Me
            </h1>
            <About />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage; 