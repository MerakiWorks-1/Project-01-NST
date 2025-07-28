import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from "next-themes";

interface NavItem {
  name: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About & Campus",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Campus Life",
        href: "/campus",
      },
      {
        name: "Accommodation & Mess",
        href: "/campus#accommodation",
      },
      {
        name: "Sports Arena",
        href: "/campus#sports",
      },
      {
        name: "Facilities Overview",
        href: "/campus#facilities",
      },
    ],
  },
  {
    name: "Academics & Support",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Academics",
        href: "/academics",
      },
      {
        name: "Faculty & Office Hours",
        href: "/academics#faculty",
      },
      { name: "Extended Support & FAQs", href: "/support" },
    ],
  },
  {
    name: "Opportunities",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Internships & Projects",
        href: "/internships",
      },
      {
        name: "Newton Startup Fund",
        href: "/startups",
      },
      { name: "Real-World Exposure", href: "/events#exposure" },
    ],
  },
  {
    name: "Community & Events",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Clubs & Societies",
        href: "/clubs",
      },
      {
        name: "Mentors",
        href: "/mentors",
      },
      { name: "Events & Festivals", href: "/events" },
    ],
  },
  { name: "Admissions", href: "/admissions" },
];

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 8px 32px rgba(59, 130, 246, 0.15)",
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, scale: 0.95 },
    open: { opacity: 1, height: "auto", scale: 1 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95, rotateX: -15 },
    visible: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
  };

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      variants={headerVariants}
      initial="initial"
      animate={"animate"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        boxShadow: isScrolled ? "0 8px 32px rgba(59, 130, 246, 0.15)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(59, 130, 246, 0.1)" : "none",
      }}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md relative overflow-hidden group"
                whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
              >
                <motion.span 
                  className="text-white font-bold text-lg relative z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  N
                </motion.span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ rotate: 45, scale: 0 }}
                  whileHover={{ rotate: 0, scale: 1.5 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-blue-950">
                  NST Repository
                </h1>
                <p className="text-xs text-blue-700">
                  Your Tech Knowledge Hub
                </p>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                {!item.hasDropdown ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className="text-blue-950 flex items-center space-x-1 text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group"
                    >
                      <span>{item.name}</span>
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-indigo-500 group-hover:w-full transition-all duration-300"
                        layoutId={`underline-${item.name}`}
                      />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className="text-blue-950 flex items-center space-x-1 text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <motion.div
                          animate={activeDropdown === item.name ? { rotate: 180 } : { rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4 text-blue-600" />
                        </motion.div>
                      )}
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-indigo-500 group-hover:w-full transition-all duration-300"
                        layoutId={`underline-${item.name}`}
                      />
                    </Link>
                  </motion.div>
                )}

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 overflow-hidden rounded-xl border border-blue-200 bg-white/95 shadow-lg backdrop-blur-lg"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        style={{ transformOrigin: "top center" }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          transition={{ delay: 0.1 }}
                        />
                        {item.dropdownItems?.map((dropdownItem, idx) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              to={dropdownItem.href}
                              className="relative block px-4 py-3 transition-all duration-200 hover:bg-blue-50 group z-10"
                            >
                              <div className="font-medium text-blue-900 group-hover:text-blue-700 flex items-center">
                                {dropdownItem.name}
                                <motion.div 
                                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                  initial={{ x: -5 }}
                                  whileHover={{ x: 0 }}
                                >
                                  <ArrowRight className="h-3 w-3 text-blue-600" />
                                </motion.div>
                              </div>
                              {dropdownItem.description && (
                                <div className="text-blue-700/70 text-sm">
                                  {dropdownItem.description}
                                </div>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 lg:flex">
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.3)" }} 
              whileTap={{ scale: 0.95 }}
              initial={{ boxShadow: "0px 0px 0px rgba(59, 130, 246, 0)" }}
            >
              <Link
                to="/#"
                className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-medium text-white transition-all duration-300 relative overflow-hidden group"
              >
                <motion.span 
                  className="relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Apply Now
                </motion.span>
                <motion.div
                  className="relative z-10"
                  initial={{ x: 0, opacity: 1 }}
                  whileHover={{ x: 3, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          </div>

          <motion.button
            className="rounded-lg p-2 transition-all duration-300 hover:bg-blue-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: isMobileMenuOpen ? -90 : 0 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-blue-700" />
              ) : (
                <Menu className="h-6 w-6 text-blue-700" />
              )}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.div 
                className="mt-4 space-y-2 rounded-xl border border-blue-200 bg-white/95 py-4 shadow-xl backdrop-blur-lg relative overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.2 }}
                />
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="relative z-10"
                  >
                    <Link
                      to={item.href}
                      className="block px-4 py-3 font-medium text-blue-900 transition-all duration-300 hover:bg-blue-50 hover:pl-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {item.hasDropdown && (
                          <ChevronDown className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="space-y-2 px-4 py-2 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div whileHover={{ y: -2 }} whileTap={{ y: 1 }}>
                    <Link
                      to="/login"
                      className="block w-full rounded-lg border border-blue-200 bg-blue-50 py-2.5 text-center font-medium text-blue-700 transition-all duration-300 hover:bg-blue-100 hover:shadow-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -2, boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.3)" }} 
                    whileTap={{ y: 1 }}
                  >
                    <Link
                      to="/signup"
                      className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 text-center font-medium text-white transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Get Started
                        <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0, rotate: 45 }}
                        whileHover={{ scale: 1.5, rotate: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}