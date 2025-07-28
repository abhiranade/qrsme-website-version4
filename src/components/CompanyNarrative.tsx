import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Users, Award, TrendingUp } from 'lucide-react';

const CompanyNarrative = () => {
  const credentials = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Founded by former Google AI and MIT researchers"
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: "10+ patents in contextual AI and personalization"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "$50M+ in funding from leading venture capital firms"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Recognized as 'AI Innovation Leader' by Gartner"
    }
  ];

  const milestones = [
    { year: "2021", event: "Founded by AI researchers" },
    { year: "2022", event: "First AI patent filed" },
    { year: "2023", event: "Series A funding completed" },
    { year: "2024", event: "10,000+ businesses served" }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute inset-0 neural-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Built by AI Pioneers,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trusted by Enterprises
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building the future of intelligent customer interactions through AI-powered QR technology
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Company Story - Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  <span className="font-semibold text-primary">QRS-Me</span> is a leading AI company specializing in contextual interaction intelligence. While traditional QR codes deliver static experiences, our advanced AI platform creates <span className="text-accent font-medium">dynamic, personalized responses</span> that adapt to user behavior, context, and intent in real-time.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  Founded by AI researchers and industry veterans, we've built the world's most sophisticated QR intelligence platform. Our mission is to transform every customer touchpoint into an intelligent, personalized experience that drives meaningful business outcomes.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  Today, we power over <span className="text-primary font-semibold">10,000 businesses worldwide</span>, processing millions of intelligent interactions daily. From Fortune 500 enterprises to innovative startups, leading companies trust QRS-Me to deliver the future of customer engagement.
                </p>
              </div>
            </div>

            {/* Company Milestones */}
            <div className="pt-8 border-t border-border/20">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Company Milestones</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 rounded-lg bg-card/50 border border-border/10 hover:bg-card/80 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      {milestone.year}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Leadership Credentials - Right Column */}
          <div className="lg:col-span-5">
            <Card className="bg-card/50 border-border/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    AI Leadership Credentials
                  </h3>
                  <p className="text-muted-foreground">
                    Recognized expertise in artificial intelligence and innovation
                  </p>
                </div>

                <div className="space-y-6">
                  {credentials.map((credential, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 group"
                      style={{
                        animationDelay: `${(index + 1) * 150}ms`,
                      }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                        {credential.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground/90 leading-relaxed font-medium">
                          {credential.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-border/20">
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      SOC 2 Certified
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      AI Innovation Award
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Fortune 500 Trusted
                    </Badge>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg pointer-events-none" />
              </CardContent>
            </Card>

            {/* Innovation Highlight */}
            <div className="mt-6 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Innovation Focus</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our research team continues to push the boundaries of contextual AI, with new patents filed quarterly and breakthrough algorithms that set industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNarrative;