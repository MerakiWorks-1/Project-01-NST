import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Quick Links Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Explore NST Repository
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Access all the resources and documentation you need to excel in your tech journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Clubs & Societies', href: '/clubs', description: 'Join amazing communities' },
              { title: 'Admissions', href: '/admissions', description: 'Application process' },
              { title: 'Academics', href: '/academics', description: 'Courses & faculty' },
              { title: 'Campus Life', href: '/campus', description: 'Accommodation & facilities' },
              { title: 'Events', href: '/events', description: 'TechFest & cultural events' },
              { title: 'Mentors', href: '/mentors', description: 'Student guidance' },
              { title: 'Startups', href: '/startups', description: 'Newton Startup Fund' },
              { title: 'Support', href: '/support', description: 'Help & resources' }
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;