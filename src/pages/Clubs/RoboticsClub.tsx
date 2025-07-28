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

export default function RoboticsClub() {
  return (
    <div className="min-h-screen bg-white/95">
      <Dummy />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Rocket className="w-4 h-4 mr-1" />
            Where Curiosity Sparks Innovation
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to the <span className="text-blue-600">Robotics Club</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Your ideas come to life as moving, sensing, thinking machines. Whether you're fascinated by wheeled bots,
            drones, underwater vehicles, or AI-driven automation, there's a place for you here.
          </p>
          <p className="text-lg text-blue-600 font-semibold mb-8">
            Dive in, tinker fearlessly, and join a community of makers, builders, and dreamers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <Bot className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-600">3+</div>
              <div className="text-gray-600">Flagship Projects</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <Trophy className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-600">3rd</div>
              <div className="text-gray-600">DTU Challenge</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-600">All</div>
              <div className="text-gray-600">Welcome</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <Wrench className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-600">Hands</div>
              <div className="text-gray-600">On Learning</div>
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
              A student-run community dedicated to exploring robotics through hands-on projects, workshops, and
              competitions
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Build Real Robots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From line-followers to autonomous vehicles, we design, prototype, and program real working robots.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Learn Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Weekly workshops cover sensors, microcontrollers (Arduino, Raspberry Pi), CAD, machine learning, and
                  more.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Compete & Showcase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Represent our college at national and inter-college robotics challenges and competitions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600">Celebrating our achievements and learning from every challenge</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow bg-transparent">
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

            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow bg-transparent">
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

            <div className="text-center mt-8">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 bg-blue-50">
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

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    Foster technical excellence through project-based learning
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    Inspire creativity and resourcefulness ("Jugaad") under budget constraints
                  </li>
                  <li className="flex items-start gap-2">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flagship Projects 2025-26</h2>
            <p className="text-gray-600">Pushing the boundaries of autonomous systems and robotics</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Car className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Autonomous Ground Vehicle (AGV)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Self-navigating golf buggy with Computer Vision mapping for autonomous campus transportation.
                </p>
                <Badge className="bg-blue-100 text-blue-800">Computer Vision</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Plane className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Vertical Takeoff & Landing Drone (VTOL)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Hybrid multirotor-plane for efficient aerial surveys combining helicopter and airplane capabilities.
                </p>
                <Badge className="bg-green-100 text-green-800">Aerial Systems</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Ship className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Autonomous Underwater Vehicle (AUV)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Submersible robot for data collection in water bodies, enabling underwater research and monitoring.
                </p>
                <Badge className="bg-purple-100 text-purple-800">Marine Robotics</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-gray-600">Four pillars that shape our culture and drive our innovation</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-red-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-800">Meraki</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pouring heart and soul into every design and code line we create.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Emergence (Lagan)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Committing deeply—late nights, refinements—to spark breakthrough innovations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Ingenuity (Jugaad)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Finding clever hacks and low-cost solutions under resource constraints.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-purple-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Maverickry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Embracing bold curiosity and challenging norms to create new paths.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning & Collaboration */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning & Collaboration</h2>
            <p className="text-gray-600">Multiple pathways to grow your robotics skills and knowledge</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Weekly Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Structured learning sessions covering essential robotics topics:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Electronics basics</li>
                  <li>• Programming microcontrollers</li>
                  <li>• CAD modeling</li>
                  <li>• AI integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Mentorship Circle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Senior members guide juniors on projects, competitions, and career advice through personalized
                  mentorship.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-200 bg-transparent">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Wrench className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Open Lab Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Unstructured time to experiment, prototype, and debug with peers in a collaborative environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Join & Participate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Membership is open to all, no prior experience required. Bring enthusiasm; we'll teach you the rest!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="text-center hover:shadow-lg transition-shadow bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-sm text-black">Submit Membership Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">
                    Provide your skills, interests, project ideas, and complete a small aptitude test
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Video className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-sm text-black">Interview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Professional aptitude and reasoning interview assessment</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-sm text-black">Pick a Project Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Align with one of our flagship or upcoming initiatives</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <UserCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-sm text-black">Engage & Contribute</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">Attend meetings, workshops, and active build sessions</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-green-200 bg-green-50 bg-transparent">
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
    </div>
  )
}
