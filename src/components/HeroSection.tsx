import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import campusHero from "@/assets/campus-hero.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0">
        <img
          // src={campusHero}
          src="https://lh3.googleusercontent.com/p/AF1QipNWC_MbFAfLlUcchLXGGmEYlawRXIimq6hvFJKx=s1360-w1360-h1020-rw"
          alt="Newton School Campus"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center bg-black/40 min-h-screen min-w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8 animate-fade-in delay-100">
            <span className="text-blue-700 font-medium">
              🎓 Welcome to NST Repository
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-200">
            Your Gateway to
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 bg-clip-text text-transparent block">
              Tech Knowledge
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300
              bg-white/20 backdrop-blur-xl rounded-lg px-6 py-4 text-white/90 border border-white/20 shadow-lg"
          >
            Welcome to NST Repository. Discover comprehensive tech resources,
            documentation, and learning materials to enhance your technical
            knowledge.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-400">
            <Link
              to={"/campus"}
              className="rounded-md bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg px-8 py-4 h-auto border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to={"https://youtu.be/VDwRPGdWv0g"}
              className="rounded-md text-blue-700 bg-blue-50 hover:bg-black/90 hover:text-white text-lg px-8 py-4 h-auto transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Campus Tour
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up delay-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1500+</div>
              <div className="text-white">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20+</div>
              <div className="text-white">Clubs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">93%</div>
              <div className="text-white">Placement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/60 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/60 rounded-full blur-2xl animate-float-slow2"></div>
    </section>
  );
};

export default HeroSection;
