import Navigation from '@/components/Navigation';
import Dummy from '@/components/Dummy';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Dummy />
      <HeroSection />
      
      {/* Quick Links Section */}
      <section className="py-20 bg-white/95">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up delay-100">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-transparent">
              Explore NST Repository
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto">
              Access all the resources and documentation you need to excel in your tech journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up delay-200">
            {[
              { title: 'Clubs & Societies', href: '/clubs', description: 'Join amazing communities' },
              { title: 'Admissions', href: '/admissions', description: 'Application process' },
              { title: 'Academics', href: '/academics', description: 'Courses & faculty' },
              { title: 'Campus Life', href: '/campus', description: 'Accommodation & facilities' },
              { title: 'Events', href: '/events', description: 'TechFest & cultural events' },
              { title: 'Mentors', href: '/mentors', description: 'Student guidance' },
              { title: 'Startups', href: '/startups', description: 'Newton Startup Fund' },
              { title: 'Support', href: '/support', description: 'Help & resources' }
            ].map((item, idx) => (
              <Link
                key={item.title}
                to={item.href}
                className={`group p-6 bg-blue-100 rounded-xl border border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 hover:scale-[1.03] animate-fade-in-up`}
                style={{ animationDelay: `${0.15 + idx * 0.07}s` }}
              >
                <h3 className="font-semibold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-black text-sm">{item.description}</p>
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