import React from 'react';
import Layout from '../components/layout/Layout';
import Projects from '../components/sections/Projects';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { motion } from 'framer-motion';
import AIChatbot from '../components/sections/AIChatbot';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Projects - Nabin's Portfolio"
        description="Explore my projects in web development, machine learning, and software engineering. View my work in React, Node.js, Python, and more."
        keywords="projects, web development, machine learning, software engineering, React, Node.js, Python, portfolio, Nabin"
        url="https://nabin216.github.io/projects"
      />
      <StructuredData 
        type="WebPage" 
        data={{
          title: "Projects - Nabin's Portfolio",
          description: "Explore my projects in web development, machine learning, and software engineering. View my work in React, Node.js, Python, and more.",
          url: "https://nabin216.github.io/projects"
        }} 
      />
      <Layout>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              My Projects
            </h1>
            <Projects />
          </div>
        </div>
      </Layout>
      
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A selection of my most significant and impactful projects.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Secure Blockchain Voting System</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Developed a secure, transparent voting system using Ethereum blockchain technology. The system ensures vote integrity, voter anonymity, and provides real-time auditing capabilities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">AI-Powered Threat Detection</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Created a machine learning system that analyzes network traffic patterns to identify potential security threats in real-time, reducing false positives by 87% compared to traditional rule-based systems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Decentralized Identity Verification</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Built a self-sovereign identity solution that allows users to control their personal data while providing verifiable credentials to third parties without revealing sensitive information.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Smart City Security Framework</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Designed a comprehensive security architecture for IoT devices in smart city implementations, addressing vulnerabilities in device communication, data storage, and access control.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <AIChatbot />
    </>
  );
};

export default ProjectsPage; 