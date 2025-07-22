import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { label: 'Admissions', href: '/admissions' },
    { label: 'Academic Programs', href: '/academics' },
    { label: 'Campus Life', href: '/campus' },
    { label: 'Student Support', href: '/support' },
  ];

  const resources = [
    { label: 'Academic Calendar', href: '/#' },
    { label: 'Course Catalog', href: '/#' },
    { label: 'Faculty Directory', href: '/#' },
    { label: 'Student Portal', href: '/#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Connected with Newton School
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest updates on events, admissions, academic programs, and campus news delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-background border-border"
              />
              <Button className="bg-gradient-primary hover:shadow-glow">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Newton School of Technology</h3>
                <p className="text-sm text-muted-foreground">Rishihood University</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering the next generation of tech leaders through innovative education, 
              hands-on learning, and industry-relevant curriculum at Rishihood University.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">Rishihood University, Haryana, India</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">admissions@newtonschool.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Newton School of Technology, Rishihood University. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 group"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;