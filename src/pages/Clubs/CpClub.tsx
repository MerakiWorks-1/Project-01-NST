import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Code, Trophy, Users, Target, Star, Award, Zap } from "lucide-react"
import Dummy from "@/components/Dummy";
import Footer from "@/components/Footer";

export default function CpClub() {
  return (
    <div className="min-h-screen bg-white/95">
      <Dummy />
      <div className="min-h-screen bg-gradient-to-br">

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Trophy className="w-4 h-4 mr-1" />
              Aiming for ICPC World Finals Gold
            </Badge>
            <h3 className="text-5xl font-bold text-blue-900 mb-6 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
              OOPS - Organization of Problem Solvers
            </h3>
            <h1 className="text-5xl font-bold text-blue-900 mb-6 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              Competitive Programming Club
            </h1>
            <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.32s" }}>
              Newton School of Technology
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "50+", label: "Active Coders", color: "blue" },
                { value: "250+", label: "Total Students", color: "green" },
                { value: "11", label: "Rated Members", color: "purple" },
                { value: "4", label: "Platforms", color: "orange" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`bg-white rounded-lg p-6 shadow-sm border border-${stat.color}-100 animate-fade-in-up`}
                  style={{ animationDelay: `${0.35 + idx * 0.07}s` }}
                >
                  <div className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                  <div className={`text-${stat.color}-700`}>{stat.label}</div>
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
                Join our community and grow with us through consistent practice and dedication
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-green-200 bg-green-50 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Users className="w-5 h-5" />
                    Initial Joining
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700">
                    <strong>Open to All!</strong> No entrance test required. All students are welcome to join initially
                    and start their competitive programming journey with us.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50 animate-fade-in-up" style={{ animationDelay: "0.32s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800">
                    <Target className="w-5 h-5" />
                    Active Membership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-3">
                    <strong>Performance-Based:</strong> Missing 3 consecutive CodeChef contests results in removal.
                  </p>
                  <p className="text-orange-700">
                    <strong>Rejoin:</strong> Participate in 2 consecutive CodeChef contests to rejoin.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">CodeChef Starters Schedule</span>
              </div>
              <p className="text-blue-700">
                Every Wednesday from <strong>8:00 PM to 10:00 PM</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Club Structure */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Our Community
              </h2>
              <p className="text-blue-700 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                A diverse and skilled community focused on consistency, peer learning, and real-time contest practice
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Star className="w-6 h-6 text-red-600" />,
                  title: "Candidate Master",
                  color: "red",
                  value: "1",
                },
                {
                  icon: <Award className="w-6 h-6 text-purple-600" />,
                  title: "Expert",
                  color: "purple",
                  value: "2",
                },
                {
                  icon: <Zap className="w-6 h-6 text-blue-600" />,
                  title: "Specialists",
                  color: "blue",
                  value: "2",
                },
                {
                  icon: <Users className="w-6 h-6 text-green-600" />,
                  title: "Pupils",
                  color: "green",
                  value: "6",
                },
              ].map((item, idx) => (
                <Card
                  key={item.title}
                  className={`text-center border-${item.color}-200 bg-${item.color}-50 animate-fade-in-up`}
                  style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
                >
                  <CardHeader>
                    <div className={`mx-auto w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mb-2`}>
                      {item.icon}
                    </div>
                    <CardTitle className={`text-${item.color}-800`}>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-3xl font-bold text-${item.color}-600`}>{item.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <p className="text-blue-700">
                <strong>Codeforces Rankings</strong> out of 250+ students engaged in competitive coding
              </p>
            </div>
          </div>
        </section>

        {/* Competitions */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Contest Schedule
              </h2>
              <p className="text-blue-700 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                Rigorous and engaging contest schedule across multiple platforms
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  border: "blue",
                  bg: "blue",
                  icon: <Calendar className="w-5 h-5 text-blue-600" />,
                  title: "Weekly Mandatory",
                  desc: "CodeChef Contests",
                  time: "Every Wednesday, 8:00 PM",
                  timeIcon: <Clock className="w-4 h-4" />,
                  text: "blue",
                },
                {
                  border: "green",
                  bg: "green",
                  icon: <Calendar className="w-5 h-5 text-green-600" />,
                  title: "Sunday Morning",
                  desc: "LeetCode Contests",
                  time: "Every Sunday, 8:00 AM",
                  timeIcon: <Clock className="w-4 h-4" />,
                  text: "green",
                },
                {
                  border: "purple",
                  bg: "purple",
                  icon: <Calendar className="w-5 h-5 text-purple-600" />,
                  title: "Official Schedule",
                  desc: "Codeforces Contests",
                  time: "Usually around 8:05 PM",
                  timeIcon: <Clock className="w-4 h-4" />,
                  text: "purple",
                },
                {
                  border: "orange",
                  bg: "orange",
                  icon: <Trophy className="w-5 h-5 text-orange-600" />,
                  title: "Internal Contests",
                  desc: "College Competitions",
                  time: "Tech Fest, Mock Rounds, Ladder Challenges",
                  timeIcon: null,
                  text: "orange",
                },
              ].map((item, idx) => (
                <Card
                  key={item.title}
                  className={`border-l-4 border-l-${item.border}-500 bg-${item.bg}-50 animate-fade-in-up`}
                  style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
                >
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-2 text-${item.text}-900`}>
                      {item.icon}
                      {item.title}
                    </CardTitle>
                    <CardDescription className={`text-${item.text}-700`}>{item.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {item.timeIcon ? (
                      <div className={`flex items-center gap-2 text-${item.text}-700`}>
                        {item.timeIcon}
                        <span>{item.time}</span>
                      </div>
                    ) : (
                      <p className={`text-${item.text}-700`}>{item.time}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <h3 className="font-semibold text-blue-900 mb-3">Additional Activities</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Discussion sessions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Problem-solving groups
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Mentorship programs
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 px-4 text-blue-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Our Vision
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                The ultimate vision of the CP Club is to make India win its first{" "}
                <strong className="text-blue-700">ICPC World Finals Gold Medal</strong>, and we aspire for{" "}
                <strong>Newton School of Technology</strong> to lead that historic moment.
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Trophy className="w-8 h-8 mx-auto mb-3 text-blue-600" />,
                    title: "Build Strong ICPC Team",
                    desc: "Develop competitive teams ready for international competitions",
                  },
                  {
                    icon: <Target className="w-8 h-8 mx-auto mb-3 text-blue-600" />,
                    title: "International Problem-Solving",
                    desc: "Promote world-class algorithmic thinking and coding skills",
                  },
                  {
                    icon: <Star className="w-8 h-8 mx-auto mb-3 text-blue-600" />,
                    title: "Global CP Presence",
                    desc: "Elevate India's standing in global competitive programming",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="bg-white/80 rounded-lg p-6 border border-blue-100 animate-fade-in-up"
                    style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
                  >
                    {item.icon}
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.desc}</p>
                  </div>
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
