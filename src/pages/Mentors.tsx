import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Dummy from "@/components/Dummy";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Star,
  Users,
  MessageCircle,
  ExternalLink,
  X,
  Linkedin,
} from "lucide-react";
import DotGrid from "../components/DotGrid/DotGrid";
import { studentMentors } from "../data/data.ts";

// --- TYPE DEFINITIONS ---
interface StudentMentor {
  name: string;
  img: string;
  bio: string;
  batch: string;
  linkedin?: string;
}

// --- REDESIGNED MENTOR CARD COMPONENT (based on AcademicsFaculty CardItem) ---
const MentorCardItem = ({ mentor }: { mentor: StudentMentor }) => (
  <div className="group relative bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg w-72 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:!scale-105">
    <div className="absolute -inset-px bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative h-full bg-gradient-to-br from-white to-blue-50 rounded-xl z-10 flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={mentor.img}
          alt={mentor.name}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${mentor.name.replace(
              " ",
              "+"
            )}&background=3b82f6&color=fff&size=200`;
          }}
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-blue-600 text-white text-xs shadow-lg">
            Batch {mentor.batch}
          </Badge>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-blue-950">{mentor.name}</h3>
          <p className="text-sm text-blue-700 mt-1 line-clamp-3 min-h-[60px]">
            {mentor.bio}
          </p>
        </div>
      </div>
      <div className="p-4 pt-0">
        {mentor.linkedin ? (
          <a
            href={mentor.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-white/80 p-2 rounded-lg shadow-sm border border-blue-200 text-blue-700 font-semibold transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg"
          >
            <Linkedin className="h-4 w-4 mr-2" />
            View Profile
          </a>
        ) : (
          <div className="flex items-center justify-center w-full bg-gray-100 p-2 rounded-lg border border-gray-200 text-gray-500 font-semibold">
            <MessageCircle className="h-4 w-4 mr-2" />
            Connect Soon
          </div>
        )}
      </div>
    </div>
  </div>
);

// --- FLOWING CARDS SECTION (adapted from AcademicsFaculty) ---
const FlowingMentorsSection = ({
  title,
  data,
  sectionId,
}: {
  title: string;
  data: StudentMentor[];
  sectionId: string;
}) => {
  const [showAll, setShowAll] = useState(false);
  const animationDuration = data.length * 5;

  return (
    <div className="mb-16">
      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text mb-10 text-center">
        {title}
      </h3>

      <AnimatePresence mode="wait">
        {!showAll ? (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div
                className="flex w-max animate-scroll hover:[animation-play-state:paused]"
                style={{ animationDuration: `${animationDuration}s` }}
              >
                {[...data, ...data].map((mentor, index) => (
                  <div
                    key={`${sectionId}-${mentor.name}-${index}`}
                    className="flex-shrink-0 mx-3"
                  >
                    <MentorCardItem mentor={mentor} />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                View All ({data.length})
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <button
              onClick={() => setShowAll(false)}
              className="absolute -top-16 right-0 z-20 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {data.map((mentor) => (
                <motion.div
                  key={`${sectionId}-grid-${mentor.name}`}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                  className="flex justify-center"
                >
                  <MentorCardItem mentor={mentor} />
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(false)}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-gray-700 hover:to-gray-800 transition"
              >
                Show Less
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Mentors = () => {
  return (
    <div className="min-h-screen bg-white/95">
      <div
        style={{
          width: "100vw",
          height: "98vh",
          position: "absolute",
          zIndex: 0,
        }}
      >
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#dbeafe"
          activeColor="#3b82f6"
          proximity={150}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <Dummy />

      {/* Hero Section - Updated with AcademicsFaculty styling */}
      <section className="pt-20 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              🌱 Junior Mentorship Culture
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mb-8">
              "Culture does not make people, people make the culture." At NST,
              we believe that the transition into college life should feel less
              like a leap and more like a warm welcome.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-16">
              {[
                {
                  label: "Passionate Mentors",
                  value: `${studentMentors.length}+`,
                },
                { label: "Batches Connected", value: "2+" },
                { label: "Success Stories", value: "Countless" },
              ].map((stat, idx) => (
                <div key={stat.label} className="animate-fade-in-up">
                  <div className="text-3xl font-bold text-blue-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Mentors Section with Flowing Cards */}
          <FlowingMentorsSection
            title="Meet Our Student Mentors"
            data={studentMentors}
            sectionId="mentors"
          />
        </div>

        {/* Add the CSS animation styles */}
        <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      {/* What Is the Junior Mentorship Culture */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              🤝 What Is the Junior Mentorship Culture?
            </h2>
            <p className="text-gray-700 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              The Junior Mentorship Culture is a carefully curated support
              system where second and third-year students volunteer as mentors
              to guide the incoming batch of freshers. These mentors act as the
              first point of contact — friends, guides, and motivators — helping
              juniors adjust, grow, and thrive in their new academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic & Personal Guidance",
                desc: "Mentors provide both academic and personal guidance, helping juniors navigate campus life, resources, and opportunities.",
                icon: <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
              },
              {
                title: "Emotional Support",
                desc: "Mentors offer a listening ear and foster a safe, encouraging space for growth and well-being.",
                icon: <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />,
              },
              {
                title: "Culture of Hype & Care",
                desc: "Mentors are not just here to help — they're here to hype you up and make you feel at home!",
                icon: (
                  <Badge className="bg-blue-100 text-blue-800 mx-auto mb-3">
                    Vibe
                  </Badge>
                ),
              },
            ].map((item, idx) => (
              <Card
                key={item.title}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center pt-8">
                  <div className="relative mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-950">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm text-center pt-2">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Culture Matters */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
            💬 Why This Culture Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Smooth Transition",
                description:
                  "Starting college can be overwhelming — but with someone walking beside you, the path feels a lot less lonely. Our mentorship culture eases the transition into college life.",
              },
              {
                step: "02",
                title: "Bonding & Empathy",
                description:
                  "We build long-lasting bonds across batches and promote a culture of empathy, collaboration, and open communication.",
              },
              {
                step: "03",
                title: "Empowerment & Community",
                description:
                  "Juniors gain confidence, clarity, and a strong support network that genuinely cares.",
              },
            ].map((item, idx) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-blue-900">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              🌟 Key Benefits for Juniors
            </h2>
            <p className="text-gray-700 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              Here's how the Junior Mentorship Culture transforms your college experience from day one
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {[
              {
                emoji: "🌟",
                number: "1",
                title: "Easier Transition into College Life",
                points: [
                  "College can be intimidating — new people, new environment, new expectations.",
                  "Mentors serve as friendly guides, helping juniors settle in smoothly.",
                  "They explain how things work — from academics to clubs, from campus culture to events."
                ],
                bgGradient: "from-yellow-50 to-orange-50",
                borderColor: "border-yellow-200",
                hoverBorder: "hover:border-yellow-400"
              },
              {
                emoji: "🧭",
                number: "2", 
                title: "Academic & Career Guidance",
                points: [
                  "Many mentors are already interning at top companies like Exly, Countress AI, AgroEdge, Penn State University, etc.",
                  "Juniors gain insights into real-world projects, tech stacks, internships, and learning paths.",
                  "Help with coding, subjects, tech profiles, and career clarity."
                ],
                bgGradient: "from-blue-50 to-cyan-50",
                borderColor: "border-blue-200",
                hoverBorder: "hover:border-blue-400"
              },
              {
                emoji: "🫂",
                number: "3",
                title: "Emotional and Social Support", 
                points: [
                  "Mentors aren't just for studies — they're someone to talk to.",
                  "They listen, share personal experiences, and help deal with homesickness, stress, or self-doubt.",
                  "Builds friendships and trust early on."
                ],
                bgGradient: "from-pink-50 to-rose-50",
                borderColor: "border-pink-200", 
                hoverBorder: "hover:border-pink-400"
              },
              {
                emoji: "🎉",
                number: "4",
                title: "Fun & Bonding",
                points: [
                  "Regular group mixers and challenges make juniors feel connected.",
                  "Activities foster friendships and build a community vibe.",
                  "Mentors are relatable seniors who hype you up and create a positive, friendly atmosphere."
                ],
                bgGradient: "from-purple-50 to-violet-50",
                borderColor: "border-purple-200",
                hoverBorder: "hover:border-purple-400"
              },
              {
                emoji: "🌱",
                number: "5",
                title: "Growth-Oriented Mindset",
                points: [
                  "Through growth challenges and check-ins, mentors help juniors:",
                  "• Build confidence",
                  "• Set goals", 
                  "• Track progress",
                  "• Reflect on personal growth"
                ],
                bgGradient: "from-green-50 to-emerald-50",
                borderColor: "border-green-200",
                hoverBorder: "hover:border-green-400"
              },
              {
                emoji: "🛡",
                number: "6", 
                title: "Supportive Culture & Safe Space",
                points: [
                  "Juniors become part of a non-judgmental and caring community.",
                  "You're never alone — whether it's academic help or personal support, someone is just a message away."
                ],
                bgGradient: "from-indigo-50 to-blue-50",
                borderColor: "border-indigo-200",
                hoverBorder: "hover:border-indigo-400"
              },
              {
                emoji: "🌐",
                number: "7",
                title: "Networking & Opportunities", 
                points: [
                  "Juniors get early exposure to active student communities, clubs, and internship paths.",
                  "Learn from mentors' journeys — e.g., joining GDG, OOPS-CP Club, GameDev Club, or real startup roles."
                ],
                bgGradient: "from-teal-50 to-cyan-50",
                borderColor: "border-teal-200",
                hoverBorder: "hover:border-teal-400"
              }
            ].map((benefit, idx) => (
              <Card
                key={benefit.number}
                className={`group relative overflow-hidden bg-gradient-to-br ${benefit.bgGradient} border-2 ${benefit.borderColor} ${benefit.hoverBorder} hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg border border-white/50">
                        <span className="text-2xl">{benefit.emoji}</span>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mt-3 shadow-sm">
                        <span className="text-white font-bold text-sm">{benefit.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                        {benefit.title}
                      </h3>
                      <div className="space-y-3">
                        {benefit.points.map((point, pointIdx) => (
                          <div key={pointIdx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed font-medium">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>

          {/* Summary Card */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 border-0 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
              <CardContent className="p-10 relative z-10">
                <div className="text-center">
                  <div className="text-4xl mb-6">❤️</div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Summary</h3>
                  <p className="text-xl leading-relaxed mb-8 text-blue-100">
                    The Junior Mentorship Culture is like having a <span className="font-semibold text-yellow-300">personal coach</span>, 
                    <span className="font-semibold text-pink-300"> cheerleader</span>, and 
                    <span className="font-semibold text-green-300"> older sibling</span> rolled into one. 
                    It's not just guidance — it's <span className="font-semibold text-white">belonging</span>, 
                    <span className="font-semibold text-white"> support</span>, and 
                    <span className="font-semibold text-white"> empowerment</span> from day one.
                  </p>
                  <div className="border-t border-blue-700/50 pt-6">
                    <blockquote className="text-lg italic text-blue-200 mb-4">
                      "Culture does not make people, people make the culture."
                    </blockquote>
                    <p className="text-blue-100">
                      At NST, juniors help build the culture just by being supported, and later, supporting others in return.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Juniors Can Expect */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
              🪄 What Juniors Can Expect
            </h2>
            <p className="text-gray-700 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              Regular one-on-one catch-ups, group bonding sessions, academic and
              career insight sharing, personal growth challenges, and an
              approachable support network that genuinely cares.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "1:1 Catch-ups",
                desc: "Personalized guidance and regular check-ins.",
                icon: (
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                ),
              },
              {
                label: "Group Mixers",
                desc: "Fun bonding sessions and group activities.",
                icon: <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />,
              },
              {
                label: "Growth Challenges",
                desc: "Academic, career, and personal growth support.",
                icon: <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
              },
              {
                label: "Support Network",
                desc: "A safe, approachable, and caring community.",
                icon: (
                  <Badge className="bg-blue-100 text-blue-800 mx-auto mb-3">
                    Care
                  </Badge>
                ),
              },
            ].map((item, idx) => (
              <Card
                key={item.label}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center pt-8">
                  <div className="relative mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-950">
                    {item.label}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm text-center pt-2">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The NST Promise */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
              🚀 The NST Promise
            </h2>
            <p className="text-xl text-gray-800 font-medium mb-8 leading-relaxed">
              This isn't just a program — it's a culture. A tradition we hope to
              build stronger with each new batch. A culture of connection,
              support, and shared success.
              <br />
              <br />
              We're excited to see the Junior Mentorship Culture grow and evolve
              as more students step up to give back, support others, and lead
              with heart.
            </p>
            <div className="text-2xl font-semibold text-blue-700 mb-4">
              Let's build something beautiful — together.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentors;
