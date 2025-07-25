import Navigation from "@/components/Navigation";
import Dummy from "@/components/Dummy";
import ClubsSection from "@/components/ClubsSection";
import Footer from "@/components/Footer";
import DotGrid from "../components/DotGrid/DotGrid";

const Clubs = () => {
  return (
    <div className="min-h-screen">
        <div style={{ width: "100vw", height: "98vh", position: "absolute" }}>
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#008bdb"
            activeColor="#ffffff"
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

      {/* Clubs Section */}
      <div className="pt-24">
        <ClubsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Clubs;
