import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Dummy from "@/components/Dummy";
import {
  Code2,
  Globe,
  Users,
  Calendar,
  ExternalLink,
  Trophy,
  Target,
  BookOpen,
  Award,
  Zap,
  Github,
  Rocket,
  Building,
  UserCheck,
  FileText,
  Brain,
  Video,
  ArrowRight,
} from "lucide-react"
import Footer from "@/components/Footer";

export default function DevClubNST() {
  return (
    <div className="min-h-screen bg-white/95">
      <Dummy />
      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Rocket className="w-4 h-4 mr-1" />
              Student-Led Tech Community
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              DevClub <span className="text-green-600">NST</span>
            </h1>
            <p className="text-2xl text-green-600 font-semibold mb-4 animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
              Learn. Build. Inspire.
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.26s" }}>
              Bridging Learning and Real-World Skills through open-source projects, GSoC, and hands-on innovation
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Building className="w-8 h-8 text-blue-600 mx-auto mb-3" />,
                  value: "4+",
                  color: "blue",
                  label: "Major Projects"
                },
                {
                  icon: <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />,
                  value: "50+",
                  color: "green",
                  label: "Active Members"
                },
                {
                  icon: <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />,
                  value: "GSoC",
                  color: "purple",
                  label: "Focus Program"
                },
                {
                  icon: <Trophy className="w-8 h-8 text-orange-600 mx-auto mb-3" />,
                  value: "Open",
                  color: "orange",
                  label: "Source First"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Who We Are
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                A student-led tech community focused on building real-world solutions through collaboration and innovation
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-green-200 bg-green-50 animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-green-700 leading-relaxed">
                    We empower students to turn ideas into impact through open-source projects, tech events, and hands-on
                    learning experiences. Our mission is to cultivate creativity, problem-solving, and continuous growth
                    in the ever-evolving world of technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Notable Achievements */}
        <section className="py-16 px-4 ">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Our Notable Achievements
              </h2>
              <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                Showcasing innovation through impactful projects
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 className="w-6 h-6 text-blue-600" />,
                  title: "DCODE",
                  badge: "Open Source Program",
                  badgeClass: "bg-blue-100 text-blue-800",
                  desc: "Beginner-centric open-source program helping students take their first steps into real-world coding through guided, collaborative projects.",
                  cardClass: "border-blue-200"
                },
                {
                  icon: <Zap className="w-6 h-6 text-purple-600" />,
                  title: "RippleX",
                  badge: "React Library",
                  badgeClass: "bg-purple-100 text-purple-800",
                  desc: "Custom-built JavaScript state management library for React ecosystem, simplifying application state handling for cleaner, faster development.",
                  cardClass: "border-purple-200"
                },
                {
                  icon: <Calendar className="w-6 h-6 text-green-600" />,
                  title: "NXTUP 1.0",
                  badge: "Event Management",
                  badgeClass: "bg-green-100 text-green-800",
                  desc: "Event management system streamlining registration, tracking, and management of university-wide events with efficiency and structure.",
                  cardClass: "border-green-200"
                }
              ].map((item, idx) => (
                <Card key={item.title} className={`hover:shadow-lg transition-shadow bg-transparent animate-fade-in-up ${item.cardClass}`} style={{ animationDelay: `${0.22 + idx * 0.07}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <CardTitle className="text-blue-800">{item.title}</CardTitle>
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

        {/* GSoC Section - Condensed */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Google Summer of Code Focus
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                Empowering students to contribute to open source and earn up to $3000 through GSoC
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* What is Open Source - Condensed */}
              <Card className="border-green-200 bg-green-50 mb-8 animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Globe className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-800">Open Source Simplified</h3>
                  </div>
                  <p className="text-green-700">
                    Code that's publicly accessible for anyone to read, improve, and contribute to. When you contribute
                    and maintainers approve, your changes become part of projects used globally.
                  </p>
                </CardContent>
              </Card>

              {/* GSoC Process - Condensed */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    num: "1",
                    title: "Explore & Contribute",
                    desc: "Browse organizations, interact with maintainers, make initial contributions",
                    color: "blue"
                  },
                  {
                    num: "2",
                    title: "Propose & Work",
                    desc: "Submit proposal, get selected, work remotely for 3 months",
                    color: "green"
                  },
                  {
                    num: "3",
                    title: "Get Rewarded",
                    desc: "Receive up to $3000 stipend, certificate, and global recognition",
                    color: "purple"
                  }
                ].map((step, idx) => (
                  <Card key={step.title} className={`text-center bg-transparent border-${step.color}-200 animate-fade-in-up`} style={{ animationDelay: `${0.25 + idx * 0.07}s` }}>
                    <CardHeader>
                      <div className={`w-12 h-12 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-2`}>
                        <span className={`text-xl font-bold text-${step.color}-600`}>{step.num}</span>
                      </div>
                      <CardTitle className={`text-${step.color}-800`}>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Success Story - Condensed */}
              <Card className="border-yellow-200 bg-transparent animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-600" />
                    <h3 className="text-xl font-semibold text-yellow-800">Success Story: Agnik Mishra</h3>
                  </div>
                  <p className="text-yellow-700 mb-4">
                    Started with Hacktoberfest (Oct 2024) → Serious contributions (Feb 2025) → Pivoted to Apache Kvrocks →
                    Merged 2200 lines of code → Selected for GSoC! 🎉
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Stay Consistent", "Balance is Key", "Never Give Up", "Communicate Well"].map((tip, index) => (
                      <Badge key={index} className="bg-yellow-100 text-yellow-800 justify-center animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.07}s` }}>
                        {tip}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Our Ambitious Goals
              </h2>
              <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                Building the future through innovation and collaboration
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-blue-200 bg-blue-50 animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">Upcoming Projects</h3>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-center gap-2 animate-pulse-slow">
                          <ArrowRight className="w-4 h-4" />
                          NXTUP 2.0 - Enhanced event management
                        </li>
                        <li className="flex items-center gap-2 animate-pulse-slow">
                          <ArrowRight className="w-4 h-4" />
                          DCODE 2.0 - Expanded open-source program
                        </li>
                        <li className="flex items-center gap-2 animate-pulse-slow">
                          <ArrowRight className="w-4 h-4" />
                          Web Development Bootcamp
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">Strategic Goals</h3>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-center gap-2 animate-pulse-slow">
                          <ArrowRight className="w-4 h-4" />
                          National hackathon participation
                        </li>
                        <li className="flex items-center gap-2 animate-pulse-slow">
                          <ArrowRight className="w-4 h-4" />
                          Campus productivity tools
                        </li>
                        <li className="flex items-center gap-2 animate-pulse-slow">
                          <ArrowRight className="w-4 h-4" />
                          Practical learning initiatives
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Join DevClub NST
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                Structured recruitment process to become part of our vibrant, project-driven tech community
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    icon: <FileText className="w-6 h-6 text-green-600" />,
                    title: "Form Submission",
                    desc: "Submit your application form with basic details",
                    color: "green"
                  },
                  {
                    icon: <Brain className="w-6 h-6 text-blue-600" />,
                    title: "Aptitude Test",
                    desc: "Assess your problem-solving and logical thinking",
                    color: "blue"
                  },
                  {
                    icon: <Video className="w-6 h-6 text-purple-600" />,
                    title: "Technical Interview",
                    desc: "Discuss your technical skills and interests",
                    color: "purple"
                  },
                  {
                    icon: <UserCheck className="w-6 h-6 text-orange-600" />,
                    title: "Final Selection",
                    desc: "Welcome to the DevClub NST family!",
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
