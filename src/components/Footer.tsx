import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const navigationSections = [
    {
      title: "Products",
      links: [
        { name: "Digital Smart Cards", href: "#" },
        { name: "Smart Dining Platform", href: "#" },
        { name: "Contextual Advertising", href: "#" },
        { name: "Platform Overview", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Status Page", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Data Security", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "Twitter",
      href: "#",
      icon: <Twitter className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-footer-bg border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Company Information - Left Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Logo and Tagline */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/src/assets/qrs-me-logo.png" 
                    alt="QRS-Me Logo" 
                    className="h-8 w-auto"
                  />
                  <div className="text-xl font-bold text-foreground">
                    QRS-Me
                  </div>
                </div>
                <p className="text-sm font-medium text-primary">
                  AI-Powered QR Intelligence
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                  Transforming customer interactions through intelligent QR technology
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:hello@qrsme.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    hello@qrsme.com
                  </a>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Building the future of AI-powered interactions
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-card/50 border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links - Right Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {navigationSections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 block relative group"
                          >
                            <span className="relative">
                              {link.name}
                              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <Separator className="bg-border/20" />
        <div className="py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 QRS-Me Inc. All rights reserved.
            </div>
            
            {/* Additional Trust Indicators */}
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 neural-pattern opacity-10 pointer-events-none" />
    </footer>
  );
};

export default Footer;