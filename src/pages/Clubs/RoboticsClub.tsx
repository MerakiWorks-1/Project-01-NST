import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Dummy from "@/components/Dummy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bot,
  Users,
  Trophy,
  Target,
  Lightbulb,
  Wrench,
  Zap,
  Heart,
  Rocket,
  Settings,
  Plane,
  Ship,
  Car,
  FileText,
  Video,
  UserCheck,
  Calendar,
  BookOpen,
  ArrowRight,
  Gamepad2,
} from "lucide-react"
import Footer from "@/components/Footer";

export default function RoboticsClub() {
  return (
    <div className="min-h-screen bg-white/95">
      <Dummy />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Rocket className="w-4 h-4 mr-1" />
            Where Curiosity Sparks Innovation
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
            Welcome to the <span className="text-blue-600">Robotics Club</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
            Your ideas come to life as moving, sensing, thinking machines. Whether you're fascinated by wheeled bots,
            drones, underwater vehicles, or AI-driven automation, there's a place for you here.
          </p>
          <p className="text-lg text-blue-600 font-semibold mb-8 animate-fade-in-up" style={{ animationDelay: "0.26s" }}>
            Dive in, tinker fearlessly, and join a community of makers, builders, and dreamers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Bot className="w-8 h-8 text-blue-600 mx-auto mb-3" />,
                value: "3+",
                color: "blue",
                label: "Flagship Projects"
              },
              {
                icon: <Trophy className="w-8 h-8 text-green-600 mx-auto mb-3" />,
                value: "3rd",
                color: "green",
                label: "DTU Challenge"
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />,
                value: "All",
                color: "purple",
                label: "Welcome"
              },
              {
                icon: <Wrench className="w-8 h-8 text-orange-600 mx-auto mb-3" />,
                value: "Hands",
                color: "orange",
                label: "On Learning"
              }
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`bg-white rounded-lg p-6 shadow-sm border animate-fade-in-up`}
                style={{ animationDelay: `${0.3 + idx * 0.07}s` }}
              >
                {stat.icon}
                <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Who We Are</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              A student-run community dedicated to exploring robotics through hands-on projects, workshops, and competitions
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Settings className="w-6 h-6 text-blue-600" />,
                title: "Build Real Robots",
                color: "blue",
                desc: "From line-followers to autonomous vehicles, we design, prototype, and program real working robots.",
                cardClass: "border-blue-200"
              },
              {
                icon: <BookOpen className="w-6 h-6 text-green-600" />,
                title: "Learn Together",
                color: "green",
                desc: "Weekly workshops cover sensors, microcontrollers (Arduino, Raspberry Pi), CAD, machine learning, and more.",
                cardClass: "border-green-200"
              },
              {
                icon: <Trophy className="w-6 h-6 text-purple-600" />,
                title: "Compete & Showcase",
                color: "purple",
                desc: "Represent our college at national and inter-college robotics challenges and competitions.",
                cardClass: "border-purple-200"
              }
            ].map((item, idx) => (
              <Card key={item.title} className={`hover:shadow-lg transition-shadow bg-transparent animate-fade-in-up ${item.cardClass}`} style={{ animationDelay: `${0.22 + idx * 0.07}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-3`}>
                    {item.icon}
                  </div>
                  <CardTitle className={`text-${item.color}-800`}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We bring together <strong>coders</strong>, <strong>circuit-designers</strong>,{" "}
              <strong>3D-print specialists</strong>, and <strong>AI enthusiasts</strong> in one collaborative community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Our Journey</h2>
            <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              Celebrating our achievements and learning from every challenge
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow bg-transparent animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Gamepad2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">
                      Gesture-Controlled Wheelchair (IIT BHU)
                    </h3>
                    <p className="text-gray-600">
                      Developed a glove-based interface using MPU6050 and Bluetooth-driven motors to empower mobility
                      for users with limited hand function.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow bg-transparent animate-fade-in-up" style={{ animationDelay: "0.29s" }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Trophy className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Line-Follower Robot (DTU Challenge)</h3>
                    <p className="text-gray-600">
                      Secured <strong>3rd place</strong> with an efficient sensor array and PID control system,
                      showcasing our technical precision and teamwork.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.38s" }}>
              <p className="text-lg text-gray-700 italic">
                Each success fuels our passion—and our setbacks teach us resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Vision & Mission</h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 bg-blue-50 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-lg">
                  To build a collaborative ecosystem where student-led innovation solves real-world problems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2 animate-pulse-slow">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    Foster technical excellence through project-based learning
                  </li>
                  <li className="flex items-start gap-2 animate-pulse-slow">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    Inspire creativity and resourcefulness ("Jugaad") under budget constraints
                  </li>
                  <li className="flex items-start gap-2 animate-pulse-slow">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    Cultivate leadership, teamwork, and effective communication
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Flagship Projects 2025-26</h2>
            <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              Pushing the boundaries of autonomous systems and robotics
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Car className="w-6 h-6 text-blue-600" />,
                title: "Autonomous Ground Vehicle (AGV)",
                badge: "Computer Vision",
                badgeClass: "bg-blue-100 text-blue-800",
                desc: "Self-navigating golf buggy with Computer Vision mapping for autonomous campus transportation.",
                cardClass: "border-blue-200"
              },
              {
                icon: <Plane className="w-6 h-6 text-green-600" />,
                title: "Vertical Takeoff & Landing Drone (VTOL)",
                badge: "Aerial Systems",
                badgeClass: "bg-green-100 text-green-800",
                desc: "Hybrid multirotor-plane for efficient aerial surveys combining helicopter and airplane capabilities.",
                cardClass: "border-green-200"
              },
              {
                icon: <Ship className="w-6 h-6 text-purple-600" />,
                title: "Autonomous Underwater Vehicle (AUV)",
                badge: "Marine Robotics",
                badgeClass: "bg-purple-100 text-purple-800",
                desc: "Submersible robot for data collection in water bodies, enabling underwater research and monitoring.",
                cardClass: "border-purple-200"
              }
            ].map((item, idx) => (
              <Card key={item.title} className={`hover:shadow-lg transition-shadow bg-transparent animate-fade-in-up ${item.cardClass}`} style={{ animationDelay: `${0.22 + idx * 0.07}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 ${item.badgeClass.split(" ")[0]} rounded-lg flex items-center justify-center mb-3`}>
                    {item.icon}
                  </div>
                  <CardTitle className={item.badgeClass.split(" ")[1]}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <Badge className={item.badgeClass}>{item.badge}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Core Values</h2>
            <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              Four pillars that shape our culture and drive our innovation
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="w-6 h-6 text-red-600" />,
                title: "Meraki",
                color: "red",
                desc: "Pouring heart and soul into every design and code line we create.",
                cardClass: "border-red-200"
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-600" />,
                title: "Emergence (Lagan)",
                color: "blue",
                desc: "Committing deeply—late nights, refinements—to spark breakthrough innovations.",
                cardClass: "border-blue-200"
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-green-600" />,
                title: "Ingenuity (Jugaad)",
                color: "green",
                desc: "Finding clever hacks and low-cost solutions under resource constraints.",
                cardClass: "border-green-200"
              },
              {
                icon: <Rocket className="w-6 h-6 text-purple-600" />,
                title: "Maverickry",
                color: "purple",
                desc: "Embracing bold curiosity and challenging norms to create new paths.",
                cardClass: "border-purple-200"
              }
            ].map((item, idx) => (
              <Card key={item.title} className={`text-center hover:shadow-lg transition-shadow bg-transparent animate-fade-in-up ${item.cardClass}`} style={{ animationDelay: `${0.22 + idx * 0.07}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    {item.icon}
                  </div>
                  <CardTitle className={`text-${item.color}-800`}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Collaboration */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Learning & Collaboration</h2>
            <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              Multiple pathways to grow your robotics skills and knowledge
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Calendar className="w-6 h-6 text-blue-600" />,
                title: "Weekly Workshops",
                color: "blue",
                desc: (
                  <>
                    <p className="text-gray-600 mb-3">Structured learning sessions covering essential robotics topics:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Electronics basics</li>
                      <li>• Programming microcontrollers</li>
                      <li>• CAD modeling</li>
                      <li>• AI integration</li>
                    </ul>
                  </>
                ),
                cardClass: "border-blue-200"
              },
              {
                icon: <Users className="w-6 h-6 text-green-600" />,
                title: "Mentorship Circle",
                color: "green",
                desc: "Senior members guide juniors on projects, competitions, and career advice through personalized mentorship.",
                cardClass: "border-green-200"
              },
              {
                icon: <Wrench className="w-6 h-6 text-purple-600" />,
                title: "Open Lab Sessions",
                color: "purple",
                desc: "Unstructured time to experiment, prototype, and debug with peers in a collaborative environment.",
                cardClass: "border-purple-200"
              }
            ].map((item, idx) => (
              <Card key={item.title} className={`hover:shadow-lg transition-shadow bg-transparent animate-fade-in-up ${item.cardClass}`} style={{ animationDelay: `${0.22 + idx * 0.07}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-3`}>
                    {item.icon}
                  </div>
                  <CardTitle className={`text-${item.color}-800`}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {typeof item.desc === "string" ? <p className="text-gray-600">{item.desc}</p> : item.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>How to Join & Participate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              Membership is open to all, no prior experience required. Bring enthusiasm; we'll teach you the rest!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: <FileText className="w-6 h-6 text-blue-600" />,
                  title: "Submit Membership Form",
                  desc: "Provide your skills, interests, project ideas, and complete a small aptitude test",
                  color: "blue"
                },
                {
                  icon: <Video className="w-6 h-6 text-green-600" />,
                  title: "Interview",
                  desc: "Professional aptitude and reasoning interview assessment",
                  color: "green"
                },
                {
                  icon: <Bot className="w-6 h-6 text-purple-600" />,
                  title: "Pick a Project Team",
                  desc: "Align with one of our flagship or upcoming initiatives",
                  color: "purple"
                },
                {
                  icon: <UserCheck className="w-6 h-6 text-orange-600" />,
                  title: "Engage & Contribute",
                  desc: "Attend meetings, workshops, and active build sessions",
                  color: "orange"
                }
              ].map((step, idx) => (
                <Card key={step.title} className={`text-center hover:shadow-lg transition-shadow bg-transparent animate-fade-in-up`} style={{ animationDelay: `${0.22 + idx * 0.07}s` }}>
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-2`}>
                      {step.icon}
                    </div>
                    <CardTitle className="text-sm text-black">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-green-200 bg-green-50 bg-transparent animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Ready to Start Building?</h3>
                <p className="text-green-700">
                  Join our community of makers, builders, and dreamers. No experience required—just bring your curiosity
                  and passion for robotics!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
    <Footer />
    </div>
  )
}
