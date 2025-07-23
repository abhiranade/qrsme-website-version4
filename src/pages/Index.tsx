import React from 'react';
import { Play, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import InteractiveQRDemo from '@/components/InteractiveQRDemo';
import AIParticles from '@/components/ui/ai-particles';
import AnimatedCounter from '@/components/ui/animated-counter';

const Index = () => {
  const valueProp = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "AI learns from every scan to optimize engagement"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Personalized experiences increase conversion by 300%"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Enterprise-grade security and analytics"
    }
  ];

  const trustIndicators = [
    {
      icon: <Shield className="w-4 h-4" />,
      text: "SOC 2 Compliant"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "99.9% Uptime"
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "Used by Fortune 500"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-header-bg via-background to-header-bg" />
      <AIParticles className="opacity-60" />
      
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 neural-pattern opacity-30" />
      
      {/* Main Hero Section */}
      <main className="relative pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[85vh] py-12">
            
            {/* Left Content - 55% */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Primary Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Transform Customer
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Interactions
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    with AI-Powered
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    QR Intelligence
                  </span>
                </h1>
                
                {/* Secondary Headline */}
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Join leading companies using our AI platform to create{' '}
                  <span className="text-primary font-semibold">personalized, contextual</span>{' '}
                  QR experiences that adapt to every user interaction
                </p>
              </div>

              {/* Value Propositions */}
              <div className="space-y-4">
                {valueProp.map((prop, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 text-foreground/90"
                    style={{
                      animationDelay: `${(index + 1) * 200}ms`,
                    }}
                  >
                    <div className="text-primary mt-0.5">
                      {prop.icon}
                    </div>
                    <span className="text-base lg:text-lg leading-relaxed">
                      {prop.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                <Button className="btn-sophisticated px-8 py-4 text-lg font-semibold text-primary-foreground border-0 rounded-xl h-auto">
                  Start Free Trial
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="group px-6 py-4 text-lg font-semibold text-foreground hover:text-primary border border-border/20 hover:border-primary/30 rounded-xl h-auto bg-transparent hover:bg-primary/5 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-border/20">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {trustIndicators.map((indicator, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-muted-foreground text-sm font-medium"
                    >
                      <div className="text-primary">
                        {indicator.icon}
                      </div>
                      <span>{indicator.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    <AnimatedCounter end={10000} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Active Users</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent">
                    <AnimatedCounter end={300} suffix="%" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Conversion Boost</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    <AnimatedCounter end={99} suffix=".9%" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Uptime</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Demo - 45% */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-3xl scale-110" />
                
                {/* Demo Component */}
                <div className="relative">
                  <InteractiveQRDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
