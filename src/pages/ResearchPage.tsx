import React from 'react';
import Layout from '../components/layout/Layout';
import Research from '../components/sections/Research';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { motion } from 'framer-motion';
import AIChatbot from '../components/sections/AIChatbot';

const ResearchPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Research - Nabin's Portfolio"
        description="Explore my research work in cybersecurity, blockchain technology, and machine learning. View my publications, projects, and academic contributions."
        keywords="research, academic, publications, cybersecurity, blockchain, machine learning, papers, Nabin, Asadur Zaman Nabin"
        url="https://nabin216.github.io/research"
      />
      <StructuredData 
        type="WebPage" 
        data={{
          title: "Research - Nabin's Portfolio",
          description: "Explore my research work in cybersecurity, blockchain technology, and machine learning. View my publications, projects, and academic contributions.",
          url: "https://nabin216.github.io/research"
        }} 
      />
      <Layout>
        {/* <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-primary mb-4">Research & Publications</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exploring the frontiers of cybersecurity, blockchain, and AI through academic research.
              </p>
            </motion.div>
          </div>
        </div> */}
        
        <Research />
        
        <div className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Current Research Focus</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Areas where I'm currently conducting research and exploring new ideas.
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
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">AI-Powered Cybersecurity</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm exploring how large language models and other AI technologies can be leveraged to enhance cybersecurity operations, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Automated threat detection and response systems</li>
                  <li>Natural language processing for security log analysis</li>
                  <li>Predictive modeling for vulnerability assessment</li>
                  <li>AI-assisted penetration testing</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Blockchain for Digital Identity</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm researching how blockchain technology can create more secure and user-controlled digital identity systems, focusing on:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Self-sovereign identity frameworks</li>
                  <li>Decentralized credential verification</li>
                  <li>Privacy-preserving authentication methods</li>
                  <li>Cross-chain identity solutions</li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Research Methodology</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My research approach combines theoretical analysis with practical implementation and testing. I believe in the importance of both academic rigor and real-world applicability.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                For each research project, I follow a systematic process that includes literature review, hypothesis formulation, prototype development, experimental validation, and peer review. This comprehensive approach ensures that my research contributions are both innovative and grounded in solid scientific principles.
              </p>
            </motion.div>
          </div>
        </div>
        
        <AIChatbot />
      </Layout>
    </>
  );
};

export default ResearchPage; 