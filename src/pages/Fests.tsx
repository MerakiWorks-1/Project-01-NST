import Navigation from '@/components/Navigation';
import Dummy from '@/components/Dummy'
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';


const Fests = () => {
  return (
    <div className="min-h-screen">
      
      {/* <Navigation /> */}
      <Dummy />
      <div className="pt-20">
        <EventsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Fests;