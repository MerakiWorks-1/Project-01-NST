import Navigation from '@/components/Navigation';
import AcademicsSection from '@/components/AcademicsSection';
import Footer from '@/components/Footer';

const Academics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24">
        <AcademicsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Academics;