import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function DevClubNST() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            <Rocket className="w-4 h-4 mr-1" />
            Student-Led Tech Community
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            DevClub <span className="text-green-600">NST</span>
          </h1>
          <p className="text-2xl text-green-600 font-semibold mb-4">Learn. Build. Inspire.</p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bridging Learning and Real-World Skills through open-source projects, GSoC, and hands-on innovation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <Building className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-600">4+</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-600">GSoC</div>
              <div className="text-gray-600">Focus Program</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <Trophy className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-600">Open</div>
              <div className="text-gray-600">Source First</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A student-led tech community focused on building real-world solutions through collaboration and innovation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-green-200 bg-green-50">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Notable Achievements</h2>
            <p className="text-gray-600">Showcasing innovation through impactful projects</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">DCODE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Beginner-centric open-source program helping students take their first steps into real-world coding
                  through guided, collaborative projects.
                </p>
                <Badge className="bg-blue-100 text-blue-800">Open Source Program</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">RippleX</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Custom-built JavaScript state management library for React ecosystem, simplifying application state
                  handling for cleaner, faster development.
                </p>
                <Badge className="bg-purple-100 text-purple-800">React Library</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">NXTUP 1.0</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Event management system streamlining registration, tracking, and management of university-wide events
                  with efficiency and structure.
                </p>
                <Badge className="bg-green-100 text-green-800">Event Management</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GSoC Section - Condensed */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Google Summer of Code Focus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empowering students to contribute to open source and earn up to $3000 through GSoC
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* What is Open Source - Condensed */}
            <Card className="border-green-200 bg-green-50 mb-8">
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
              <Card className="text-center border-blue-200 bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <CardTitle className="text-blue-800">Explore & Contribute</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Browse organizations, interact with maintainers, make initial contributions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-green-200 bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold text-green-600">2</span>
                  </div>
                  <CardTitle className="text-green-800">Propose & Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Submit proposal, get selected, work remotely for 3 months</p>
                </CardContent>
              </Card>

              <Card className="text-center border-purple-200 bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <CardTitle className="text-purple-800">Get Rewarded</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Receive up to $3000 stipend, certificate, and global recognition</p>
                </CardContent>
              </Card>
            </div>

            {/* Success Story - Condensed */}
            <Card className="border-yellow-200 bg-transparent">
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
                    <Badge key={index} className="bg-yellow-100 text-yellow-800 justify-center">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ambitious Goals</h2>
            <p className="text-gray-600">Building the future through innovation and collaboration</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Upcoming Projects</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        NXTUP 2.0 - Enhanced event management
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        DCODE 2.0 - Expanded open-source program
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Web Development Bootcamp
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Strategic Goals</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        National hackathon participation
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Campus productivity tools
                      </li>
                      <li className="flex items-center gap-2">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join DevClub NST</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured recruitment process to become part of our vibrant, project-driven tech community
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-sm text-black">Form Submission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Submit your application form with basic details</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-sm text-black">Aptitude Test</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Assess your problem-solving and logical thinking</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Video className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-sm text-black">Technical Interview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Discuss your technical skills and interests</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <UserCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-sm text-black">Final Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Welcome to the DevClub NST family!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
