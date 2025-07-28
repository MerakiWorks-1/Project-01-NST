import Navigation from "@/components/Navigation";
import Dummy from "@/components/Dummy";
import ClubsSection from "@/components/ClubsSection";
import Footer from "@/components/Footer";
import DotGrid from "../components/DotGrid/DotGrid";

const Clubs = () => {
  return (
    // Set a light background from our theme
    <div className="min-h-screen bg-white/95">
        <div style={{ width: "100vw", height: "80vh", position: "absolute", zIndex: 0 }}>
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
      {/* The Navigation component should be light-themed to match */}
      <Dummy />

      {/* The ClubsSection component itself should also use the light theme */}
      <div className="pt-24 relative z-10">
        <ClubsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Clubs;