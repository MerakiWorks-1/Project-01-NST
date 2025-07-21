import Navigation from '@/components/Navigation';
import ClubsSection from '@/components/ClubsSection';
import Footer from '@/components/Footer';

const Clubs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24">
        <ClubsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Clubs;