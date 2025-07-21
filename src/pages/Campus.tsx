import Navigation from '@/components/Navigation';
import CampusLifeSection from '@/components/CampusLifeSection';
import Footer from '@/components/Footer';

const Campus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24">
        <CampusLifeSection />
      </div>
      <Footer />
    </div>
  );
};

export default Campus;