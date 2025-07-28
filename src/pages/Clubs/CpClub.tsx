import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Code, Trophy, Users, Target, Star, Award, Zap, ArrowRight, PlayCircle, Youtube } from "lucide-react"
import Dummy from "@/components/Dummy";
import Footer from "@/components/Footer";

export default function CpClub() {

  const communityMembers = [
    { 
      icon: Star, 
      title: "Candidate Master", 
      value: "1",
      colors: {
        border: "border-red-200",
        bg: "bg-red-50/60",
        iconBg: "bg-red-100",
        iconText: "text-red-600",
        titleText: "text-red-900",
        valueText: "text-red-700",
        hoverBorder: "hover:border-red-400"
      }
    },
    { 
      icon: Award, 
      title: "Expert", 
      value: "2",
      colors: {
        border: "border-purple-200",
        bg: "bg-purple-50/60",
        iconBg: "bg-purple-100",
        iconText: "text-purple-600",
        titleText: "text-purple-900",
        valueText: "text-purple-700",
        hoverBorder: "hover:border-purple-400"
      }
    },
    { 
      icon: Zap, 
      title: "Specialists", 
      value: "2",
      colors: {
        border: "border-cyan-200",
        bg: "bg-cyan-50/60",
        iconBg: "bg-cyan-100",
        iconText: "text-cyan-600",
        titleText: "text-cyan-900",
        valueText: "text-cyan-700",
        hoverBorder: "hover:border-cyan-400"
      }
    },
    { 
      icon: Users, 
      title: "Pupils", 
      value: "6",
      colors: {
        border: "border-green-200",
        bg: "bg-green-50/60",
        iconBg: "bg-green-100",
        iconText: "text-green-600",
        titleText: "text-green-900",
        valueText: "text-green-700",
        hoverBorder: "hover:border-green-400"
      }
    },
  ];

  const spotlightVideos = [
    {
      id: 1,
      title: "From Pupil to Specialist",
      description: "An inspiring journey to the Specialist rank on Codeforces.",
      embedId: "fylywqd_gGQ"
    },
    {
      id: 2,
      title: "Live Contest Walkthrough",
      description: "See how our members tackle problems under pressure in real-time.",
      embedId: "68o5Qe6E92k"
    },
    {
      id: 3,
      title: "Advanced Problem Solving",
      description: "A deep dive into the strategies used to solve complex challenges.",
      embedId: "b4wztf5q8Os"
    }
  ];

  return (
    <div className="min-h-screen bg-white/95">
      <Dummy />
      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200/80 transition-colors animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Trophy className="w-4 h-4 mr-1" />
              Aiming for ICPC World Finals Gold
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              OOPS - Organization of Problem Solvers
            </h1>
            <p className="text-xl text-blue-700 mb-10 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              The Official Competitive Programming Club of Newton School of Technology
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "50+", label: "Active Coders" },
                { value: "250+", label: "Total Students" },
                { value: "11", label: "Rated Members" },
                { value: "4+", label: "Platforms" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 animate-fade-in-up transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50/50"
                  style={{ animationDelay: `${0.35 + idx * 0.07}s` }}
                >
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-blue-800">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entrance Process */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Entrance Process
              </h2>
              <p className="text-blue-700 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                Join our community and grow with us through consistent practice and dedication.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-blue-200 bg-blue-50/50 animate-fade-in-up transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ animationDelay: "0.25s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Users className="w-5 h-5" />
                    Initial Joining
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">
                    <strong>Open to All!</strong> No entrance test required. All students are welcome to join and start their competitive programming journey with us.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50/50 animate-fade-in-up transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ animationDelay: "0.32s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Target className="w-5 h-5" />
                    Active Membership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-3">
                    <strong>Performance-Based:</strong> Missing 3 consecutive CodeChef contests results in removal.
                  </p>
                  <p className="text-blue-700">
                    <strong>Rejoin:</strong> Participate in 2 consecutive CodeChef contests to rejoin.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Club Structure */}
        <section className="py-16 px-4 bg-blue-50/70">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Our Community
              </h2>
              <p className="text-blue-700 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                A diverse and skilled community focused on consistency, peer learning, and real-time contest practice.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {communityMembers.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className={`group text-center ${item.colors.bg} ${item.colors.border} ${item.colors.hoverBorder} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 animate-fade-in-up`}
                    style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
                  >
                    <CardHeader>
                      <div className={`mx-auto w-12 h-12 ${item.colors.iconBg} rounded-full flex items-center justify-center mb-2`}>
                        <Icon className={`w-6 h-6 ${item.colors.iconText}`} />
                      </div>
                      <CardTitle className={item.colors.titleText}>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`text-3xl font-bold ${item.colors.valueText}`}>{item.value}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Member Spotlight - REDESIGNED SECTION */}
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        Member Spotlights
                    </h2>
                    <p className="text-blue-700 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                        Celebrating the achievements and dedication of our community members.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {spotlightVideos.map((video, idx) => (
                        <div key={video.id} className="animate-fade-in-up" style={{ animationDelay: `${0.25 + idx * 0.1}s` }}>
                            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                                <CardHeader className="p-6">
                                    <CardTitle className="text-xl text-blue-950">{video.title}</CardTitle>
                                    <CardDescription className="text-blue-700 mt-2 h-10">
                                        {video.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="px-6 pb-6">
                                    <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${video.embedId}`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Competitions */}
        <section className="py-16 px-4 bg-blue-50/70">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Contest Schedule
              </h2>
              <p className="text-blue-700 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                Rigorous and engaging contest schedule across multiple platforms.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Calendar, title: "Weekly Mandatory", desc: "CodeChef Contests", time: "Every Wednesday, 8:00 PM", timeIcon: Clock },
                { icon: Calendar, title: "Sunday Morning", desc: "LeetCode Contests", time: "Every Sunday, 8:00 AM", timeIcon: Clock },
                { icon: Calendar, title: "Official Schedule", desc: "Codeforces Contests", time: "Usually around 8:05 PM", timeIcon: Clock },
                { icon: Trophy, title: "Internal Contests", desc: "College Competitions", time: "Tech Fest, Mock Rounds, Ladder Challenges", timeIcon: null },
              ].map((item, idx) => {
                const Icon = item.icon;
                const TimeIcon = item.timeIcon;
                return (
                  <Card
                    key={item.title}
                    className="group border-l-4 border-l-blue-500 bg-white animate-fade-in-up transition-all duration-300 hover:shadow-md hover:border-l-indigo-600"
                    style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-blue-900">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-blue-600" />
                          {item.title}
                        </div>
                        <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                      </CardTitle>
                      <CardDescription className="text-blue-700">{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {TimeIcon ? (
                        <div className="flex items-center gap-2 text-blue-700">
                          <TimeIcon className="w-4 h-4" />
                          <span>{item.time}</span>
                        </div>
                      ) : (
                        <p className="text-blue-700">{item.time}</p>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            
            <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Special Events & Announcements</h3>
              <div className="max-w-2xl mx-auto">
                  <Card className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl border-none transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                      <div className="p-8">
                          <Badge className="mb-3 bg-white/20 text-white">New Event</Badge>
                          <CardTitle className="text-3xl">Monthly Long Challenge</CardTitle>
                          <CardDescription className="text-blue-200 mt-2">
                              Conducted by <strong>MerakiCode</strong> | Organized by <strong>Mayank Gupta</strong>
                          </CardDescription>
                          <div className="flex items-center justify-center gap-2 text-blue-100 mt-4">
                              <Clock className="w-4 h-4" />
                              <span>Launching from <strong>August 20th</strong></span>
                          </div>
                          <a href="https://www.hackerrank.com/contests/project-euler/" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                              <Button variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-md px-6 py-3 rounded-full transition-transform duration-300 group-hover:scale-105 shadow-md">
                                  Register on HackerRank <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                          </a>
                      </div>
                  </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Our Vision
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-xl text-gray-800 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                The ultimate vision of the CP Club is to make India win its first{" "}
                <strong className="text-blue-700">ICPC World Finals Gold Medal</strong>, and we aspire for{" "}
                <strong>Newton School of Technology</strong> to lead that historic moment.
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Trophy, title: "Build Strong ICPC Team", desc: "Develop competitive teams ready for international competitions" },
                  { icon: Target, title: "International Problem-Solving", desc: "Promote world-class algorithmic thinking and coding skills" },
                  { icon: Star, title: "Global CP Presence", desc: "Elevate India's standing in global competitive programming" },
                ].map((item, idx) => {
                   const Icon = item.icon;
                   return (
                    <div
                      key={item.title}
                      className="bg-white/80 rounded-lg p-6 border border-blue-100 animate-fade-in-up transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300"
                      style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                      <h3 className="font-semibold text-blue-950 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                   )
                })}
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}
