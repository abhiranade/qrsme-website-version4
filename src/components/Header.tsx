import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import qrsLogo from '@/assets/qrs-me-logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Platform', href: '#platform' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Company', href: '#company' },
    { name: 'Developers', href: '#developers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-header-glass/80 backdrop-blur-sophisticated shadow-header'
          : 'bg-header-bg/60'
      }`}
    >
      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 neural-pattern opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img
                src={qrsLogo}
                alt="QRS-Me Logo"
                className="h-8 lg:h-10 w-auto logo-pulse"
              />
              <div className="flex flex-col">
                <span className="text-foreground font-bold text-lg lg:text-xl tracking-tight">
                  QRS-Me
                </span>
                <span className="text-muted-foreground text-xs lg:text-sm font-medium tracking-wide">
                  AI-Powered QR Intelligence
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-underline ai-indicator text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Trust Badge - Hidden on mobile */}
            <div className="hidden md:flex items-center text-xs text-muted-foreground font-medium">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Trusted by 10,000+ businesses
            </div>

            {/* CTA Button */}
            <Button className="btn-sophisticated px-6 py-2.5 text-sm font-semibold text-primary-foreground border-0 rounded-lg relative overflow-hidden transition-all duration-300">
              Start Building
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 pb-6'
              : 'max-h-0 opacity-0 pb-0'
          }`}
        >
          <div className="pt-4 border-t border-border/20">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 px-2 border-l-2 border-transparent hover:border-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Trust Badge */}
              <div className="flex items-center text-xs text-muted-foreground font-medium py-2 px-2 mt-4 border-t border-border/20">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Trusted by 10,000+ businesses
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;