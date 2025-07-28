import Navigation from '@/components/Navigation';
import Dummy from '@/components/Dummy'
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import DotGrid from "../components/DotGrid/DotGrid";

const Events = () => {
  return (
    <div className="min-h-screen">
      <div style={{ width: "100vw", height: "98vh", position: "absolute", zIndex: 0 }}>
          <DotGrid
            dotSize={10}
            gap={15}
            // Updated baseColor to a light, subtle blue for the light theme
            baseColor="#dbeafe" // This corresponds to Tailwind's `blue-100`
            // Active color is a stronger blue for contrast on the light background
            activeColor="#3b82f6" // This corresponds to Tailwind's `blue-500`
            proximity={150}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          >
          </DotGrid>
        </div>
      {/* <Navigation /> */}
      <Dummy />
      <div className="pt-20">
        <EventsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Events;