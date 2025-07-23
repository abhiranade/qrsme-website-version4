import React, { useState, useEffect } from 'react';
import { Zap, Users, Globe, Shield, BarChart3, Sparkles } from 'lucide-react';

interface QRPersonalization {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const InteractiveQRDemo: React.FC = () => {
  const [activePersonalization, setActivePersonalization] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const personalizations: QRPersonalization[] = [
    {
      id: 'performance',
      name: 'Performance Optimized',
      icon: <Zap className="w-4 h-4" />,
      color: 'from-yellow-400 to-orange-500',
      description: 'AI optimizes for conversion rate'
    },
    {
      id: 'demographic',
      name: 'Demographic Targeted',
      icon: <Users className="w-4 h-4" />,
      color: 'from-blue-400 to-cyan-500',
      description: 'Personalized for user segments'
    },
    {
      id: 'location',
      name: 'Location Aware',
      icon: <Globe className="w-4 h-4" />,
      color: 'from-green-400 to-emerald-500',
      description: 'Adapts to geographic context'
    },
    {
      id: 'security',
      name: 'Security Enhanced',
      icon: <Shield className="w-4 h-4" />,
      color: 'from-purple-400 to-violet-500',
      description: 'Enterprise-grade protection'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActivePersonalization((prev) => (prev + 1) % personalizations.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [personalizations.length]);

  const currentPersonalization = personalizations[activePersonalization];

  return (
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-xl" />
      
      <div className="relative bg-card/40 backdrop-blur-md border border-border/20 rounded-3xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
              Live AI Personalization
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Watch AI Adapt in Real-Time
          </h3>
          <p className="text-sm text-muted-foreground">
            Each scan triggers intelligent optimization
          </p>
        </div>

        {/* QR Code Display */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* QR Code Container */}
            <div 
              className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${currentPersonalization.color} p-1 transition-all duration-500 ${
                isAnimating ? 'scale-95 rotate-2' : 'scale-100 rotate-0'
              }`}
            >
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Simulated QR Pattern */}
                <div className="grid grid-cols-8 gap-px w-24 h-24">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square transition-all duration-300 ${
                        Math.random() > 0.5 ? 'bg-gray-900' : 'bg-transparent'
                      }`}
                      style={{
                        transitionDelay: `${i * 10}ms`
                      }}
                    />
                  ))}
                </div>
                
                {/* AI Indicator */}
                <div className="absolute top-1 right-1">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentPersonalization.color} animate-pulse`} />
                </div>
              </div>
            </div>

            {/* Scanning Effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-full animate-scan" />
            </div>
          </div>
        </div>

        {/* Current Personalization Display */}
        <div className="text-center mb-6">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentPersonalization.color} text-white text-sm font-medium shadow-lg`}>
            {currentPersonalization.icon}
            <span>{currentPersonalization.name}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {currentPersonalization.description}
          </p>
        </div>

        {/* Personalization Indicators */}
        <div className="flex justify-center space-x-3 mb-6">
          {personalizations.map((p, index) => (
            <button
              key={p.id}
              onClick={() => setActivePersonalization(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activePersonalization
                  ? `bg-gradient-to-r ${p.color} scale-125 shadow-lg`
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center text-lg font-bold text-primary">
              <BarChart3 className="w-4 h-4 mr-1" />
              +300%
            </div>
            <p className="text-xs text-muted-foreground">Conversion Rate</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center text-lg font-bold text-accent">
              <Zap className="w-4 h-4 mr-1" />
              <span>Real-time</span>
            </div>
            <p className="text-xs text-muted-foreground">AI Adaptation</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InteractiveQRDemo;