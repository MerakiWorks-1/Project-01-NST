import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Users,
  Clock,
  Award,
  ChevronRight,
  Code,
  Database,
  BrainCircuit,
  Cpu,
  Network,
  Bot,
  Laptop,
  GraduationCap,
  Lightbulb,
  Briefcase,
  GitBranch,
  Rocket,
  Palette,
  Eye,
  Languages,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Updated data structure to include all four years
const curriculumData = [
  {
    year: 1,
    theme: "Build",
    description: "Learn by building from day 1, strengthening your foundations in core CS concepts.",
    skills: ["Python", "ReactJS", "Data Structures Algorithms (DSA)", "File Handling", "Responsive Web Design", "Arrays", "Dictionary", "Searching", "API", "UI/UX", "Javascript", "Maths for CS"],
    semesters: [
      {
        id: 1,
        inClassroom: [
          { title: "Intro to Python", icon: Code },
          { title: "Web Development Basics", icon: Code },
          { title: "Core Maths I", icon: Lightbulb },
        ],
        beyondClassroom: [
          { title: "Portfolio Website", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop" },
          { title: "Hackathon Participation", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" },
        ]
      },
      {
        id: 2,
        inClassroom: [
          { title: "Data Structures & Algorithms", icon: GitBranch },
          { title: "Advanced Javascript & React", icon: Code },
          { title: "UI/UX Fundamentals", icon: Palette },
        ],
        beyondClassroom: [
          { title: "Google Summer of Code", image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=800&auto=format&fit=crop" },
          { title: "Competitive Programming", image: "https://images.unsplash.com/photo-1516116216624-53e697320964?q=80&w=800&auto=format&fit=crop" },
        ]
      }
    ]
  },
  {
    year: 2,
    theme: "Achieve",
    description: "You will learn to build data-driven, complex systems which can scale.",
    skills: ["Node.js", "Backend Engineering", "Dynamic Programming", "Databases", "Machine Learning", "Data Visualisation", "Spark", "Mathematics for AI", "Backtracking", "PostgreSQL", "MongoDB", "Hadoop"],
    semesters: [
        {
            id: 3,
            inClassroom: [
                { title: "Backend Engineering", icon: Database },
                { title: "Intro to Databases (SQL)", icon: Database },
                { title: "System Design Basics", icon: Network },
            ],
            beyondClassroom: [
                { title: "Build a Social Media API", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop" },
                { title: "Last-mile Delivery Optimization", image: "https://www.shutterstock.com/image-photo/asian-teenager-students-doing-robot-arm-2221748207" },
            ]
        },
        {
            id: 4,
            inClassroom: [
                { title: "Intro to AI & ML", icon: BrainCircuit },
                { title: "Advanced Databases (NoSQL)", icon: Database },
                { title: "Data Visualization", icon: Palette },
            ],
            beyondClassroom: [
                { title: "Build InShorts like news app", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop" },
                { title: "Real-time Bidding Platform", image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop" },
            ]
        }
    ]
  },
  {
    year: 3,
    theme: "Innovate",
    description: "Create a mini version of an OS like iOS or Android and your own version of ChatGPT.",
    skills: ["Event-Driven Programming", "Deep Learning", "Networks - OSI Model", "GPT Models", "RISC Architecture"],
    semesters: [
      {
        id: 5,
        inClassroom: [
          { title: "Modern Computer Architecture", icon: Cpu },
          { title: "Computer Networks", icon: Network },
          { title: "Event-Driven Programming", icon: Code },
        ],
        beyondClassroom: [
          { title: "Build Collaborative apps", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop" },
          { title: "Help CSK Recruit in IPL Auction", image: "data:image/jpeg;base64,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" },
        ]
      },
      {
        id: 6,
        inClassroom: [
          { title: "Deep Learning", icon: Bot },
          { title: "Advanced Machine Learning", icon: BrainCircuit },
          { title: "GPT Models", icon: Sparkles },
        ],
        beyondClassroom: [
          { title: "Make a live-streaming app", image: "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?q=80&w=800&auto=format&fit=crop" },
          { title: "Mandatory 6-month paid internships", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop" },
        ]
      }
    ]
  },
  {
    year: 4,
    theme: "Succeed",
    description: "The 8th semester is your industry internship, and by the end of the 7th, you will have a tool-kit to become an entrepreneur.",
    skills: ["Operating System", "Natural Language Processing", "Computer Vision", "Cyber Security", "NLTK / spaCy", "OpenCV", "Capstone Project"],
    semesters: [
        {
            id: 7,
            inClassroom: [
                { title: "Operating Systems", icon: Laptop },
                { title: "Computer Vision", icon: Eye },
                { title: "Natural Language Processing", icon: Languages },
            ],
            beyondClassroom: [
                { title: "Train your own LLM from scratch", image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=800&auto=format&fit=crop" },
                { title: "Deep Tech Projects", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop" },
            ]
        },
        {
            id: 8,
            inClassroom: [
                { title: "Theory of Computing", icon: GraduationCap },
                { title: "Cyber Security", icon: ShieldCheck },
                { title: "Capstone Project", icon: Rocket },
            ],
            beyondClassroom: [
                { title: "Preparing for top tech companies", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop" },
                { title: "Industry Internship / Research", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
            ]
        }
    ]
  },
];


// A new component to handle the semester content with animations
const SemesterContent = ({ semester }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={semester.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-blue-900 mb-4 text-center">In Classroom Learning</h4>
        <div className="grid grid-cols-2 gap-4">
          {semester.inClassroom.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                <div className="mx-auto w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-blue-700" />
                </div>
                <h5 className="font-semibold text-sm text-blue-950">{item.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-blue-900 mb-4 text-center">Beyond Classroom Learning</h4>
        <div className="grid grid-cols-2 gap-4">
          {semester.beyondClassroom.map(item => (
            <Card key={item.title} className="group overflow-hidden border-blue-200">
              <img src={item.image} alt={item.title} className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-3 bg-white h-full">
                <h5 className="font-semibold text-sm text-blue-950">{item.title}</h5>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);

const AcademicsSection = () => {
  const [activeSemesters, setActiveSemesters] = useState({});

  const handleSetSemester = (year, semId) => {
    setActiveSemesters(prev => ({ ...prev, [year]: semId }));
  };

  return (
    <section id="academics" className="py-20 bg-white/95">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Industry First, 
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"> Advanced Curriculum</span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Our cutting-edge B.Tech curriculum in AI & ML is designed with industry leaders to prepare you for tomorrow's tech challenges.
          </p>
        </div>

        {/* Year-wise Curriculum Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden lg:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {curriculumData.map((yearData, idx) => {
              const isEven = idx % 2 === 0;
              const activeSemesterId = activeSemesters[yearData.year] || yearData.semesters[0].id;
              const activeSemesterData = yearData.semesters.find(s => s.id === activeSemesterId);

              return (
                <div
                  key={yearData.year}
                  className="relative flex flex-col lg:flex-row items-center justify-between animate-fade-in-up w-full"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-md flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                  </div>

                  <div className={`w-full lg:w-5/12 p-4 ${isEven ? 'lg:order-1' : 'lg:order-3'}`}>
                    <div className="text-center lg:text-left">
                      <Badge className="bg-blue-600 text-white text-sm px-4 py-1 mb-4">YEAR {yearData.year}</Badge>
                      <h3 className="text-4xl font-bold text-blue-950 mb-3">{yearData.theme}</h3>
                      <p className="text-lg text-gray-600">{yearData.description}</p>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4 text-center lg:text-left">What you'll learn</h4>
                      {/* <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {yearData.skills.map(skill => (
                          <Badge key={skill} variant="outline" className="border-blue-300 text-blue-700 bg-blue-50/50">
                            {skill}
                          </Badge>
                        ))}
                      </div> */}
                    </div>
                  </div>

                  <div className={`w-full lg:w-5/12 p-4 mt-12 lg:mt-0 ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                    <div className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50 p-6 sm:p-8 rounded-2xl border border-blue-200 shadow-lg">
                      {/* Semester Tabs */}
                      <div className="mb-6 bg-blue-200/50 p-1 rounded-full flex items-center">
                        <button
                          onClick={() => handleSetSemester(yearData.year, yearData.semesters[0].id)}
                          className={`w-1/2 rounded-full py-2 text-sm font-semibold transition-colors duration-300 ${activeSemesterId === yearData.semesters[0].id ? 'bg-white text-blue-700 shadow' : 'text-gray-600 hover:bg-white/50'}`}
                        >
                          Semester {yearData.semesters[0].id}
                        </button>
                        <button
                          onClick={() => handleSetSemester(yearData.year, yearData.semesters[1].id)}
                          className={`w-1/2 rounded-full py-2 text-sm font-semibold transition-colors duration-300 ${activeSemesterId === yearData.semesters[1].id ? 'bg-white text-blue-700 shadow' : 'text-gray-600 hover:bg-white/50'}`}
                        >
                          Semester {yearData.semesters[1].id}
                        </button>
                      </div>
                      
                      {/* Render content for the active semester */}
                      {activeSemesterData && <SemesterContent semester={activeSemesterData} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
