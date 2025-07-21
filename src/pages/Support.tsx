import Navigation from '@/components/Navigation';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24">
        <SupportSection />
      </div>
      <Footer />
    </div>
  );
};

export default Support;