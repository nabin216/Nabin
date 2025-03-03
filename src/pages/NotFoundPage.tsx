import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | Nabin's Portfolio"
        description="The page you are looking for does not exist. Return to the homepage."
        keywords="404, not found, error, page not found"
        url="https://nabin216.github.io/404"
      />
      <Layout>
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Page Not Found</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              <Link 
                to="/" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Return to Homepage
              </Link>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage; 