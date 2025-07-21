import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigationMenus = [
    {
      title: 'About & Campus',
      items: [
        { label: 'Campus Life', href: '/campus' },
        { label: 'Accommodation & Mess', href: '/campus#accommodation' },
        { label: 'Sports Arena', href: '/campus#sports' },
        { label: 'Facilities Overview', href: '/campus#facilities' },
      ],
    },
    {
      title: 'Academics & Support',
      items: [
        { label: 'Academics', href: '/academics' },
        { label: 'Faculty & Office Hours', href: '/academics#faculty' },
        { label: 'Extended Support & FAQs', href: '/support' },
      ],
    },
    {
      title: 'Opportunities',
      items: [
        { label: 'Internships & Projects', href: '/internships' },
        { label: 'Newton Startup Fund', href: '/startups' },
        { label: 'Real-World Exposure', href: '/events#exposure' },
      ],
    },
    {
      title: 'Community & Events',
      items: [
        { label: 'Clubs & Societies', href: '/clubs' },
        { label: 'Mentors', href: '/mentors' },
        { label: 'Events & Festivals', href: '/events' },
      ],
    },
  ];

  const mobileNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Campus Life', href: '/campus' },
    { label: 'Academics', href: '/academics' },
    { label: 'Support', href: '/support' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'Events', href: '/events' },
    { label: 'Mentors', href: '/mentors' },
    { label: 'Internships', href: '/internships' },
    { label: 'Startups', href: '/startups' },
    { label: 'Admissions', href: '/admissions' },
  ];

  const isActiveDropdown = (items: { href: string }[]) =>
    items.some((item) => location.pathname === item.href.split('#')[0]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">NST Repository</h1>
              <p className="text-xs text-muted-foreground">Your Tech Knowledge Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu value={openDropdown} onValueChange={setOpenDropdown} className="relative">
              <NavigationMenuList className="space-x-2">
                {/* Home Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-foreground hover:text-primary bg-transparent',
                        location.pathname === '/' && 'text-primary'
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Dropdown Items */}
                {navigationMenus.map((menu) => (
                  <NavigationMenuItem key={menu.title}>
                    <NavigationMenuTrigger
                      className={cn(
                        'text-foreground hover:text-primary bg-transparent data-[state=open]:text-primary relative',
                        isActiveDropdown(menu.items) && 'text-primary'
                      )}
                      onClick={() =>
                        setOpenDropdown(openDropdown === menu.title ? null : menu.title)
                      }
                    >
                      {menu.title}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid gap-1 p-2 w-56">
                        {menu.items.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className={cn(
                                  'block select-none rounded-md p-2 text-sm font-medium no-underline transition-colors hover:bg-accent hover:text-accent-foreground',
                                  location.pathname === item.href.split('#')[0] &&
                                    'bg-accent text-accent-foreground'
                                )}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {item.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {/* Admissions Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/admissions"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-foreground hover:text-primary bg-transparent',
                        location.pathname === '/admissions' && 'text-primary'
                      )}
                    >
                      Admissions
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>

              {/* ✅ REQUIRED FOR PROPER POSITIONING */}
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-gradient-primary hover:shadow-glow">
              Apply Now
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    'text-foreground hover:text-primary font-medium transition-colors duration-200',
                    location.pathname === item.href && 'text-primary'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="default" className="bg-gradient-primary w-full mt-4">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
