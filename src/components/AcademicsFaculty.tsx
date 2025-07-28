import React, { useState, useEffect, useRef } from "react";
import { Linkedin, X, ChevronLeft, ChevronRight } from "lucide-react";
import { facultyMembers, mentorList } from "../data/data";

const CardItem = ({ person }: { person: (typeof facultyMembers)[0] }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden w-72 h-[400px] flex flex-col justify-between">
    <div className="relative">
      <img
        src={person.img}
        alt={person.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src = `https://ui-avatars.com/api/?name=${person.name}&background=3b82f6&color=fff&size=80`;
        }}
      />
    </div>
    <div className="px-4 py-3 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{person.bio}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 items-center justify-center">
        {person.badges?.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`badge-${idx}`}
            className="h-6"
            loading="lazy"
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-1 rounded-full shadow"
        >
          <Linkedin className="h-5 w-5 text-blue-700" />
        </a>
      </div>
    </div>
  </div>
);

const AutoScrollSection = ({
  title,
  data,
  sectionId,
}: {
  title: string;
  data: typeof facultyMembers;
  sectionId: string;
}) => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!showAll && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.max(1, data.length - 3));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showAll, isHovered, data.length]);

  useEffect(() => {
    if (scrollRef.current && !showAll) {
      const cardWidth = 280;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, showAll]);

  const handlePrevious = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(data.length - 4, prev + 1));

  return (
    <div className="mb-16">
      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text mb-10 text-center">
        {title}
      </h3>

      {!showAll ? (
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 disabled:opacity-40 hover:scale-110 transition"
          >
            <ChevronLeft className="h-5 w-5 text-blue-600" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= data.length - 4}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 disabled:opacity-40 hover:scale-110 transition"
          >
            <ChevronRight className="h-5 w-5 text-blue-600" />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-12 pb-6 scrollbar-hide"
          >
            {data.map((person, index) => (
              <div key={`${sectionId}-${index}`} className="flex-shrink-0">
                <CardItem person={person} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition"
            >
              View All ({data.length})
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setShowAll(false)}
            className="absolute top-0 right-0 z-20 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow transition"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 max-h-[800px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
            {data.map((person, index) => (
              <CardItem key={`${sectionId}-grid-${index}`} person={person} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-gray-700 hover:to-gray-800 transition"
            >
              Show Less
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const AcademicsFaculty = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Academics & Faculty
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Learn from world-class educators and industry experts who are
            passionate about shaping the next generation of innovators.
          </p>
        </div>
        <AutoScrollSection
          title="Our Distinguished Faculty"
          data={facultyMembers}
          sectionId="faculty"
        />
        <AutoScrollSection
          title="Industry Mentors"
          data={mentorList}
          sectionId="mentors"
        />
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-thin { scrollbar-width: thin; }
        .scrollbar-thumb-blue-300::-webkit-scrollbar-thumb {
          background-color: #93c5fd;
          border-radius: 0.5rem;
        }
        .scrollbar-track-blue-100::-webkit-scrollbar-track {
          background-color: #dbeafe;
          border-radius: 0.5rem;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default AcademicsFaculty;
