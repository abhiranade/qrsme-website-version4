import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <Button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-card/80 border border-border/20 backdrop-blur-md hover:bg-primary/20 hover:border-primary/30 text-foreground hover:text-primary transition-all duration-300 group shadow-lg"
        variant="ghost"
        size="icon"
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
    </div>
  );
};

export default BackToTop;