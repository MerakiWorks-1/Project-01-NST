import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Code, Trophy, Users, Target, Star, Award, Zap } from "lucide-react"

export default function CpClub() {
  return (
    <div className="min-h-screen bg-gradient-to-br ">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-blue-900">CP Club</h1>
                <p className="text-sm text-blue-700">Newton School of Technology</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Join Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Trophy className="w-4 h-4 mr-1" />
            Aiming for ICPC World Finals Gold
          </Badge>
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Competitive Programming Club</h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">Newton School of Technology, Sonipat</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-blue-700">Active Coders</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100">
              <div className="text-3xl font-bold text-green-600">250+</div>
              <div className="text-green-700">Total Students</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
              <div className="text-3xl font-bold text-purple-600">11</div>
              <div className="text-purple-700">Rated Members</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-orange-100">
              <div className="text-3xl font-bold text-orange-600">4</div>
              <div className="text-orange-700">Platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrance Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Entrance Process</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Join our community and grow with us through consistent practice and dedication
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-green-200 bg-green-50">
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
            <Card className="border-orange-200 bg-orange-50">
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
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mx-auto">
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Community</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              A diverse and skilled community focused on consistency, peer learning, and real-time contest practice
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-red-200 bg-red-50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-800">Candidate Master</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">1</div>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200 bg-purple-50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">1</div>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Specialists</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">3</div>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200 bg-green-50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Pupils</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">6</div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Contest Schedule</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Rigorous and engaging contest schedule across multiple platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Weekly Mandatory
                </CardTitle>
                <CardDescription className="text-blue-700">CodeChef Contests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-blue-700">
                  <Clock className="w-4 h-4" />
                  <span>Every Wednesday, 8:00 PM</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Sunday Morning
                </CardTitle>
                <CardDescription className="text-green-700">LeetCode Contests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-green-700">
                  <Clock className="w-4 h-4" />
                  <span>Every Sunday, 8:00 AM</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500 bg-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-900">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  Official Schedule
                </CardTitle>
                <CardDescription className="text-purple-700">Codeforces Contests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-purple-700">
                  <Clock className="w-4 h-4" />
                  <span>Usually around 8:05 PM</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900">
                  <Trophy className="w-5 h-5 text-orange-600" />
                  Internal Contests
                </CardTitle>
                <CardDescription className="text-orange-700">College Competitions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700">Tech Fest, Mock Rounds, Ladder Challenges</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg max-w-2xl mx-auto">
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
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-xl mb-8 leading-relaxed">
              The ultimate vision of the CP Club is to make India win its first{" "}
              <strong className="text-blue-700">ICPC World Finals Gold Medal</strong>, and we aspire for{" "}
              <strong>Newton School of Technology</strong> to lead that historic moment.
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-lg p-6 border border-blue-100">
                <Trophy className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold mb-2">Build Strong ICPC Team</h3>
                <p className="text-sm opacity-90">Develop competitive teams ready for international competitions</p>
              </div>
              <div className="bg-white/80 rounded-lg p-6 border border-blue-100">
                <Target className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold mb-2">International Problem-Solving</h3>
                <p className="text-sm opacity-90">Promote world-class algorithmic thinking and coding skills</p>
              </div>
              <div className="bg-white/80 rounded-lg p-6 border border-blue-100">
                <Star className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold mb-2">Global CP Presence</h3>
                <p className="text-sm opacity-90">Elevate India's standing in global competitive programming</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-blue-900 py-12 px-4 border-t border-blue-100">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">CP Club</span>
          </div>
          <p className="text-blue-700 mb-6">Newton School of Technology, Sonipat</p>
          <div className="flex justify-center gap-6 mb-6">
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              CodeChef
            </Badge>
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              Codeforces
            </Badge>
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              LeetCode
            </Badge>
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              ICPC
            </Badge>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Ready to Join? Get Started</Button>
        </div>
      </footer>
    </div>
  )
}
