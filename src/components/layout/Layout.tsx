import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatbot from '../sections/AIChatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Layout; 