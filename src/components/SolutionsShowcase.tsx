import React, { useState } from 'react';
import { 
  Users, 
  Utensils, 
  Target, 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  Zap,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCounter from '@/components/ui/animated-counter';

interface Solution {
  id: string;
  title: string;
  industry: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  useCase: {
    text: string;
    metric: number;
    suffix: string;
  };
  image: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  qrDemo: {
    title: string;
    features: string[];
  };
}

const SolutionsShowcase: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const solutions: Solution[] = [
    {
      id: 'business-cards',
      title: 'Smart Business Cards',
      industry: 'Professional Services & Networking',
      icon: <Users className="w-6 h-6" />,
      description: 'Transform networking with AI-powered digital business cards that adapt to every professional interaction.',
      benefits: [
        'AI personalizes cards for each interaction context',
        'Automatic lead capture and CRM integration',
        'Real-time engagement analytics and insights',
        'Enterprise team management and branding'
      ],
      useCase: {
        text: 'Sales teams increase qualified leads by',
        metric: 400,
        suffix: '%'
      },
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      colorScheme: {
        primary: 'from-blue-500 to-cyan-600',
        secondary: 'from-blue-50 to-cyan-50',
        accent: 'border-blue-200',
        gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-600/10'
      },
      qrDemo: {
        title: 'Networking QR',
        features: ['Contact Exchange', 'CRM Sync', 'Analytics']
      }
    },
    {
      id: 'intelligent-menus',
      title: 'Intelligent Menus',
      industry: 'Hospitality & Food Service',
      icon: <Utensils className="w-6 h-6" />,
      description: 'Revolutionize dining experiences with AI-curated menus that adapt to customer preferences and behavior.',
      benefits: [
        'AI curates menus based on dietary preferences',
        'Dynamic pricing and availability management',
        'Customer behavior analytics and optimization',
        'Seamless POS and inventory integration'
      ],
      useCase: {
        text: 'Restaurants boost revenue by',
        metric: 35,
        suffix: '%'
      },
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
      colorScheme: {
        primary: 'from-emerald-500 to-green-600',
        secondary: 'from-emerald-50 to-green-50',
        accent: 'border-emerald-200',
        gradient: 'bg-gradient-to-br from-emerald-500/10 to-green-600/10'
      },
      qrDemo: {
        title: 'Menu QR',
        features: ['Personalization', 'Ordering', 'Feedback']
      }
    },
    {
      id: 'contextual-advertising',
      title: 'Contextual Advertising',
      industry: 'Marketing & Recruitment',
      icon: <Target className="w-6 h-6" />,
      description: 'Maximize campaign effectiveness with AI-driven contextual advertising that connects users with relevant opportunities.',
      benefits: [
        'AI matches users with relevant opportunities',
        'Behavioral targeting and audience optimization',
        'Cross-platform campaign management',
        'Advanced attribution and ROI tracking'
      ],
      useCase: {
        text: 'Agencies achieve',
        metric: 250,
        suffix: '% higher conversion rates'
      },
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      colorScheme: {
        primary: 'from-purple-500 to-violet-600',
        secondary: 'from-purple-50 to-violet-50',
        accent: 'border-purple-200',
        gradient: 'bg-gradient-to-br from-purple-500/10 to-violet-600/10'
      },
      qrDemo: {
        title: 'Campaign QR',
        features: ['Targeting', 'Attribution', 'Optimization']
      }
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Industry Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              AI-Powered Solutions for
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies across industries are transforming their operations with intelligent QR solutions
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`group relative transition-all duration-500 ${
                hoveredCard === solution.id 
                  ? 'scale-105 z-10' 
                  : hoveredCard && hoveredCard !== solution.id 
                    ? 'scale-95 opacity-75' 
                    : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${solution.colorScheme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Header Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-800`}>
                      {solution.icon}
                      <span>{solution.industry}</span>
                    </div>
                  </div>

                  {/* QR Demo */}
                  <div className="absolute top-4 right-4">
                    <div 
                      className="w-12 h-12 bg-white rounded-lg p-2 cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => setActiveDemo(activeDemo === solution.id ? null : solution.id)}
                    >
                      {/* Mini QR Pattern */}
                      <div className="grid grid-cols-4 gap-px w-full h-full">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className={`aspect-square ${
                              Math.random() > 0.5 ? 'bg-gray-900' : 'bg-transparent'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative p-6">
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Benefits - Show on hover */}
                  <div className={`space-y-3 mb-6 transition-all duration-500 overflow-hidden ${
                    hoveredCard === solution.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    {solution.benefits.map((benefit, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start space-x-2 text-sm"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Use Case Metric */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-6 border border-primary/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Success Story</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {solution.useCase.text}
                    </p>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${solution.colorScheme.primary} bg-clip-text text-transparent`}>
                      {hoveredCard === solution.id ? (
                        <AnimatedCounter 
                          end={solution.useCase.metric} 
                          suffix={solution.useCase.suffix}
                          duration={1500}
                        />
                      ) : (
                        `${solution.useCase.metric}${solution.useCase.suffix}`
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${solution.colorScheme.primary} hover:shadow-lg text-white border-0 transition-all duration-300 group-hover:scale-105`}
                  >
                    <span>Explore {solution.title}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* QR Demo Popup */}
              {activeDemo === solution.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-20">
                  <div className="bg-card border border-border/20 rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-48">
                    <div className="text-center">
                      <h4 className="font-semibold text-sm text-foreground mb-2">
                        {solution.qrDemo.title}
                      </h4>
                      <div className="space-y-1">
                        {solution.qrDemo.features.map((feature, idx) => (
                          <div key={idx} className="text-xs text-muted-foreground">
                            • {feature}
                          </div>
                        ))}
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="mt-2 text-xs"
                        onClick={() => setActiveDemo(null)}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Try Demo
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <Button 
              size="lg"
              className="btn-sophisticated px-8 py-4 text-lg font-semibold"
            >
              Explore All Solutions
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold text-foreground hover:text-primary border border-border/20 hover:border-primary/30"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;