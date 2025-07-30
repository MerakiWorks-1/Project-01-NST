import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  ExternalLink,
  Twitter, // Assuming 'X' icon is Twitter
  Code, // Icon for 'Made by'
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { label: 'Academic Programs', href: '/academics' },
    { label: 'Campus Life', href: '/campus' },
    { label: 'Student Support', href: '/support' },
  ];

  const resources = [
    {
      label: 'Academic Calendar',
      href: 'https://drive.google.com/file/d/1XEd4pqtU-eOwKL76o5C1snXM7ZE58AoO/view?usp=sharing',
    },
    { label: 'Course Catalog', href: '/#' },
    { label: 'Faculty Directory', href: '/#' },
    { label: 'Student Portal', href: 'https://my.newtonschool.co/' },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/newtonschooloftechnology/',
      label: 'Facebook',
    },
    { icon: Twitter, href: 'https://x.com/nst_edu', label: 'X/Twitter' },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/newtonschooloftechnology/?hl=en',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/school/newton-school-of-technology/',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-blue-200 py-20">
      <div className="container mx-auto px-6 space-y-16">
        {/* Newsletter */}
        <section className="bg-white border border-blue-200 rounded-2xl p-8 md:p-12 shadow-md text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Stay Connected with Newton School of Technology
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Get the latest updates on events, admissions, academic programs, and campus news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white border-blue-300 text-gray-800 placeholder:text-gray-500"
            />
            <Button className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-transform">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Links Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/6e7102036b2742429ee4aec7125666d7-newton_school_logo.svg" alt="Newton School Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold text-blue-900">Newton School of Technology</h3>
                <p className="text-sm text-gray-600">Rishihood University</p>
              </div>
            </div>
            <p className="text-gray-700">
              Empowering the next generation of tech leaders through innovative education, hands-on learning, and industry-relevant curriculum at Rishihood University.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <MapPin className="h-4 w-4 mr-3 text-blue-600" />
                <span className="text-sm">Rishihood University, Haryana, India</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="h-4 w-4 mr-3 text-blue-600" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-3 text-blue-600" />
                <span className="text-sm">csai.leadoffice@nst.rishihood.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-blue-900 border-b border-blue-200 pb-2 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-blue-900 border-b border-blue-200 pb-2 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 group"
                  >
                    {resource.label}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600 font-medium">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p>© 2024 Newton School of Technology. All rights reserved.</p>
            {/* NEW: Added credit link */}
            <a href="https://www.linkedin.com/company/official-merakiworks/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/60 text-blue-800 px-3 py-1.5 rounded-full border border-blue-200 hover:shadow-md hover:bg-white transition-all duration-300">
              <Code className="w-4 h-4 text-blue-600" />
              <span>Made with 💙 by <strong>Meraki Works</strong></span>
            </a>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white border border-blue-200 text-blue-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 rounded-lg flex items-center justify-center transition-all shadow-md"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
