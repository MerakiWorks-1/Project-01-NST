import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-16 animate-fade-in-up delay-100 shadow-md border border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Connected with Newton School
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest updates on events, admissions, academic programs, and campus news delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:shadow-lg transition-transform duration-200 hover:scale-105 font-medium">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 animate-fade-in-up delay-200">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Newton School of Technology</h3>
                <p className="text-sm text-gray-300">Rishihood University</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering the next generation of tech leaders through innovative education, 
              hands-on learning, and industry-relevant curriculum at Rishihood University.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 group">
                <MapPin className="h-4 w-4 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                <span className="text-sm">Rishihood University, Haryana, India</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 group">
                <Phone className="h-4 w-4 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 group">
                <Mail className="h-4 w-4 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                <span className="text-sm">admissions@newtonschool.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.25 + index * 0.07}s` }}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}<ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.35 + index * 0.07}s` }}>
                  <a 
                    href={resource.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {resource.label}<ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 animate-fade-in-up delay-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <p className="text-gray-400 text-sm mb-4 md:mb-0 font-medium">
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
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 hover:text-white text-blue-400 rounded-lg flex items-center justify-center transition-all duration-200 group animate-fade-in-up border border-gray-700 hover:border-blue-500 shadow-md"
                    style={{ animationDelay: `${0.45 + index * 0.07}s` }}
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