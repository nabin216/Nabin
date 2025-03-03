import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from '../ui/DarkModeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary dark:bg-dark-primary shadow-md fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-xl font-bold">
                Asadur Zaman Nabin
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>
                <Link
                  to="/research"
                  className="text-gray-300 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Research
                </Link>
                <Link
                  to="/experience"
                  className="text-gray-300 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Experience
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-secondary dark:bg-dark-secondary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-accent dark:hover:bg-dark-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary">
              <Link
                to="/"
                className="text-gray-300 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-gray-300 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/research"
                className="text-gray-300 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Research
              </Link>
              <Link
                to="/experience"
                className="text-gray-300 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar; 