import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Folder, Mail, Briefcase, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Projects', icon: Folder, path: '/projects' },
    { name: 'Contact', icon: Mail, path: '/contact' },
    { name: 'Services', icon: Briefcase, path: '/services' },
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div className="w-full px-0">
        <div className="flex h-16 justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-full w-12 h-12 object-cover ring-2 ring-orange-500/20 group-hover:ring-orange-500 transition-all duration-300 group-hover:scale-110 transform"
                src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                alt="Profile"
              />
              <div className="absolute inset-0 rounded-full bg-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
            <div className="relative">
              <h1 className="text-4xl font-bold bg-linear-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent group-hover:from-red-600 group-hover:via-orange-600 group-hover:to-yellow-400 transition-all duration-500 animate-pulse">
                NICK
              </h1>
              {/* Flame effect on hover */}
              <div className="absolute -top-1 left-0 right-0 h-2 bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-linear-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium
                    transition-all duration-300 transform hover:scale-105
                    ${isActive 
                      ? 'text-white bg-linear-to-r from-blue-600 to-purple-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }
                  `}
                >
                  <Icon 
                    size={20} 
                    className={`transition-transform duration-300 ${isActive ? 'animate-bounce' : 'group-hover:rotate-12'}`}
                  />
                  <span className="relative z-10">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium
                    transition-all duration-300 transform hover:translate-x-2
                    ${isMobileMenuOpen ? 'animate-slideIn' : ''}
                    ${isActive 
                      ? 'text-white bg-linear-to-r from-blue-600 to-purple-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }
                  `}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;