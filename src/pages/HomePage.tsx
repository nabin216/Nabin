import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Research from '../components/sections/Research';
import Contact from '../components/sections/Contact';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nabin's Portfolio - Full Stack Developer & ML Engineer"
        description="Welcome to my portfolio. I am a passionate developer specializing in full-stack development, machine learning, and software engineering. Explore my projects and experience."
        keywords="full stack developer, machine learning engineer, software engineer, React, TypeScript, Python, portfolio, Nabin, Asadur Zaman Nabin"
        url="https://nabin216.github.io/"
      />
      <StructuredData 
        type="Person" 
        data={{}} 
      />
      <StructuredData 
        type="WebSite" 
        data={{}} 
      />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </Layout>
    </>
  );
};

export default HomePage; 