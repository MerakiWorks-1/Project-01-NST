import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Globe,
  Users,
  DollarSign,
  GitBranch,
  Calendar,
  CheckCircle,
  Star,
  ExternalLink,
  Trophy,
  Target,
  Lightbulb,
  BookOpen,
  MessageCircle,
  Award,
  Zap,
  Heart,
  Github,
} from "lucide-react"

export default function DevClub() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-blue-900">Development Club</h1>
                <p className="text-sm text-blue-700">Open Source & GSoC</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Globe className="w-4 h-4 mr-1" />
            Open Source with Google Summer of Code
          </Badge>
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Your Journey to <span className="text-blue-600">GSoC</span> Starts Here
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Learn open source, contribute to real projects, and get paid up to $3000 through Google Summer of Code
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-600">Global</div>
              <div className="text-blue-700">Program by Google</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-600">$3000</div>
              <div className="text-blue-700">Maximum Stipend</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-600">3 Months</div>
              <div className="text-blue-700">Summer Project</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Open Source */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">What is Open Source?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-blue-50 mb-8">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                      Think of it like a public folder on the internet
                    </h3>
                    <p className="text-blue-700 text-lg leading-relaxed">
                      Anyone can access it, read the files, and even suggest improvements or fix issues. When you
                      contribute, you send your changes to the "owner" (maintainer). If they like your work, it gets
                      merged into the main project.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-blue-100 bg-white">
                <CardHeader>
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-blue-800">Collaborate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">Work with developers worldwide on real projects</p>
                </CardContent>
              </Card>
              <Card className="text-center border-blue-100 bg-white">
                <CardHeader>
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-blue-800">Help Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">Contribute to projects that benefit millions of users</p>
                </CardContent>
              </Card>
              <Card className="text-center border-blue-100 bg-white">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-blue-800">Learn Together</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">Grow your skills through community-driven learning</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What is GSoC */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">What is Google Summer of Code?</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              A global program by Google that offers students the chance to work on real open-source projects and get
              paid!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Explore & Engage</h3>
                <p className="text-blue-700">
                  Browse participating organizations and their project ideas. Interact with maintainers and start making
                  initial contributions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Propose & Get Selected</h3>
                <p className="text-blue-700">
                  Submit a project proposal. If selected, work remotely, full-time, on your chosen project for about 3
                  months during summer.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Rewards</h3>
                <p className="text-blue-700">
                  Receive a stipend (up to $3000 USD), valuable certificate, and global recognition in the open-source
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Roadmap */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Your GSoC Roadmap</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              The journey to GSoC involves consistent effort. Here's your guide to success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-black">Essential Skills</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-l-4 border-l-blue-500 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-blue-600" />
                    Learn Git + GitHub Basics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">
                    Master commands like pull, push, clone, and understand how to create a Pull Request (PR).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-400 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Start Small
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">
                    Begin with "good first issues" – minor fixes or single-line changes to build confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-300 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-blue-600" />
                    Understand the Codebase
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">
                    Take time to explore and comprehend the project's code before diving deep.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    Communicate Professionally
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">
                    Engage respectfully and clearly with maintainers and other contributors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* GSoC Journey Structure */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">The GSoC Journey & Structure</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: "Organization Application Period",
                  desc: "Open-source organizations apply to Google to host projects",
                },
                {
                  title: "Project Idea List Publication",
                  desc: "Google publishes accepted organizations and their project ideas",
                },
                {
                  title: "Contributor Application Period",
                  desc: "Aspiring contributors explore organizations and prepare proposals",
                },
                {
                  title: "Proposal Review & Selection",
                  desc: "Organizations review proposals and select contributors",
                },
                {
                  title: "Community Bonding Period",
                  desc: "Selected contributors set up environments and clarify project details",
                },
                {
                  title: "Coding Period",
                  desc: "Contributors work on projects under mentor guidance",
                },
                { title: "Evaluations", desc: "Mid-term and final evaluations assess progress" },
                {
                  title: "Project Completion & Stipend",
                  desc: "Successful completion leads to stipend payment and certification",
                },
              ].map((phase, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0`}
                  >
                    <span className={`text-sm font-bold text-blue-600`}>{index + 1}</span>
                  </div>
                  <Card className="flex-1 border-blue-100 bg-white">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-blue-900 mb-1">{phase.title}</h3>
                      <p className="text-blue-700 text-sm">{phase.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Inspiring Journey: Agnik Mishra</h2>
            <p className="text-blue-700">A story of persistence and strategic contribution</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800">Oct 2024: The Beginning</h3>
                      <p className="text-blue-700">
                        Started with Hacktoberfest, gaining initial PRs and learning GitHub basics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800">Feb 2025: Serious Contributions</h3>
                      <p className="text-blue-700">Began serious contributions with 10 PRs merged.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800">The Pivot</h3>
                      <p className="text-blue-700">
                        After initial project didn't get selected, quickly switched to Apache Kvrocks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Code2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800">Dedication</h3>
                      <p className="text-blue-700">
                        Merged 2200 lines of code during a break, leading to mentor recognition.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Trophy className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800">Success! 🎉</h3>
                      <p className="text-blue-700">
                        Ultimately selected for GSoC through persistence and quality contributions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: CheckCircle, title: "Stay Consistent", desc: "Even small daily contributions add up" },
                { icon: Heart, title: "Balance is Key", desc: "Don't overdo it; maintain healthy balance" },
                { icon: Zap, title: "Never Give Up", desc: "Persistence often pays off" },
                { icon: MessageCircle, title: "Communicate", desc: "Talk to maintainers; they're great resources" },
              ].map((tip, index) => (
                <Card key={index} className="text-center border-blue-100 bg-blue-50">
                  <CardContent className="p-4">
                    <tip.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm mb-1 text-blue-900">{tip.title}</h3>
                    <p className="text-xs text-blue-700">{tip.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Contribute to Open Source?</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">Benefits and outcomes that go far beyond GSoC's stipend</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Real-World Coding Experience",
                desc: "Work on live code used globally, learning best practices, debugging, and collaboration.",
              },
              {
                icon: Github,
                title: "Build a Public Portfolio",
                desc: "All contributions are visible on your GitHub profile, boosting your resume for placements.",
              },
              {
                icon: Users,
                title: "Build Connections",
                desc: "Network with developers, mentors, and organizations worldwide – a powerful asset.",
              },
              {
                icon: Trophy,
                title: "Unlock Opportunities",
                desc: "Contributors are often selected for GSoC, internships, conferences, and direct hires.",
              },
              {
                icon: Heart,
                title: "Fun & Community-Driven",
                desc: "Be part of a global community, learning and growing together, completely free!",
              },
              {
                icon: Star,
                title: "Global Recognition",
                desc: "Build reputation in the developer community and gain recognition for your contributions.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-blue-100 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-blue-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Resources</h2>
            <p className="text-blue-700">Ready to explore further? Here are some helpful resources.</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  GSoC Proposals Archive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Browse successful GSoC proposals from previous years</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent border-blue-200 text-blue-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Archive
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Globe className="w-5 h-5 text-blue-600" />
                  Organizations List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Explore participating organizations and their projects</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent border-blue-200 text-blue-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Browse Organizations
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Award className="w-5 h-5 text-blue-600" />
                  Official GSoC 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Official Google Summer of Code program page</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent border-blue-200 text-blue-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Official Site
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Open Source Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students worldwide who are contributing to open source and getting selected for GSoC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Github className="w-5 h-5 mr-2" />
              Start Contributing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-blue-900 py-12 px-4 border-t border-blue-100">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Development Club</span>
          </div>
          <p className="text-blue-700 mb-6">Open Source & Google Summer of Code</p>
          <div className="flex justify-center gap-6 mb-6">
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              Open Source
            </Badge>
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              GSoC
            </Badge>
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              GitHub
            </Badge>
            <Badge variant="outline" className="text-blue-700 border-blue-300">
              Git
            </Badge>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Join Our Community</Button>
        </div>
      </footer>
    </div>
  )
}