import Navigation from '@/components/Navigation';
import Dummy from '@/components/Dummy'
import CampusLifeSection from '@/components/CampusLifeSection';
import Footer from '@/components/Footer';

const Campus = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      <Dummy />
      <div className="pt-20">
        <CampusLifeSection />
      </div>
      <Footer />
    </div>
  );
};

export default Campus;