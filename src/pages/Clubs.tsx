import Navigation from '@/components/Navigation';
import Dummy from '@/components/Dummy'
import ClubsSection from '@/components/ClubsSection';
import Footer from '@/components/Footer';

const Clubs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      <Dummy />
      
      {/* Clubs Section */}
      <div className="pt-24">
        <ClubsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Clubs;