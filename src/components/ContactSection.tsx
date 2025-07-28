import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Mail, Phone, Clock, Send, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Simulate form submission
    console.log('Contact form submitted:', data);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@qrsme.com",
      description: "Get in touch anytime"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "Contact us for consultation",
      description: "Schedule a personalized demo"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Business Hours",
      value: "Monday - Friday, 9 AM - 6 PM PST",
      description: "We typically respond within 2 hours"
    }
  ];

  const trustIndicators = [
    "Enterprise-grade security & privacy",
    "24/7 technical support available",
    "GDPR & SOC 2 compliant"
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-bg/30 to-background" />
      <div className="absolute inset-0 neural-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ready to Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Customer Experience?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
            Get in touch with our team to learn how QRS-Me's AI-powered QR solutions can revolutionize your customer interactions
          </p>
          <p className="text-base text-muted-foreground/80 max-w-3xl mx-auto">
            Whether you're looking to enhance networking, improve restaurant experiences, or create targeted advertising campaigns, our team is here to help you succeed.
          </p>
        </div>

        {/* QR Code Pattern Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded border border-primary/30" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23${encodeURIComponent('4f46e5')}' stroke-width='1' stroke-dasharray='4,4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
               }} 
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Information - Left Column (40%) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="group"
                  style={{
                    animationDelay: `${(index + 1) * 200}ms`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.label}
                      </h3>
                      <p className="text-foreground/90 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <Card className="bg-card/50 border-border/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Trust & Security
                  </h3>
                </div>
                <div className="space-y-3">
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {indicator}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  &lt; 24 hours
                </div>
                <div className="text-sm text-muted-foreground">
                  Average response time
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Column (60%) */}
          <div className="lg:col-span-7">
            <Card className="bg-card/50 border-border/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Send us a message
                  </h3>
                  <p className="text-muted-foreground">
                    Tell us about your project and how we can help transform your customer interactions
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              Full Name *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name"
                                className="bg-background/50 border-border/30 focus:border-primary/50 transition-all duration-300"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              Email Address *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-background/50 border-border/30 focus:border-primary/50 transition-all duration-300"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              Company Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your company name"
                                className="bg-background/50 border-border/30 focus:border-primary/50 transition-all duration-300"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="Enter your phone number"
                                className="bg-background/50 border-border/30 focus:border-primary/50 transition-all duration-300"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Message *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project and how we can help..."
                              rows={5}
                              className="bg-background/50 border-border/30 focus:border-primary/50 transition-all duration-300 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="btn-sophisticated w-full sm:w-auto px-8 py-4 text-lg font-semibold group"
                        disabled={form.formState.isSubmitting}
                      >
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>

                    <div className="text-xs text-muted-foreground pt-4 border-t border-border/20">
                      By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                    </div>
                  </form>
                </Form>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg pointer-events-none" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;