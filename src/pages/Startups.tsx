import Dummy from '@/components/Dummy';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Users, Trophy, FileText, ArrowRight } from 'lucide-react';

const Startups = () => {
  // Program statistics
  const stats = [
    { icon: Rocket, label: 'Up to ₹1 Cr', sublabel: 'Total Fund' },
    { icon: Users, label: '1,000+', sublabel: 'Expert Mentors' },
    { icon: Trophy, label: '500+', sublabel: "Students' Participation" },
  ];

  // StartX process steps
  const processSteps = [
    {
      step: '01',
      title: 'Ideation Review',
      description: 'Validate ideas, define problem statements, and analyze the target market.',
    },
    {
      step: '02',
      title: 'Prototype Review',
      description: 'Assess the working prototype, its technical feasibility, and initial user feedback.',
    },
    {
      step: '03',
      title: 'MVP Pitch & Evaluation',
      description: 'Present your Minimum Viable Product to the StartX Fund committee for feedback and funding.',
    },
  ];

  return (
    <div className="min-h-screen bg-white/95">
      {/* Navigation bar */}
      <Dummy />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
            Your Dreams, Our Direction
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Empowering and enabling future founders in India through funding,
            mentorship, and workshops.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105 transition-all">
              <Rocket className="w-5 h-5 mr-2" /> Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50 transform hover:scale-105 transition-all">
              <FileText className="w-5 h-5 mr-2" /> Resume Application
            </Button>
          </div>
        </div>
      </section>

      {/* How StartX Stands Out */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">
            How StartX Stands Out
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center mx-auto shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-900">{stat.label}</div>
                <div className="text-gray-700">{stat.sublabel}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Infrastructure Support', 'Dedicated Mentorship', 'Product Marketing', 'Interactive Workshops'].map((title, idx) => (
              <Card
                key={idx}
                className="group p-6 bg-white border border-blue-200 overflow-hidden relative hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 mb-2">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    {title === 'Infrastructure Support' && 'Based on prototype potential and technical alignment.'}
                    {title === 'Dedicated Mentorship' && 'One-on-one sessions with industry experts.'}
                    {title === 'Product Marketing' && 'Learn to position and sell your product effectively.'}
                    {title === 'Interactive Workshops' && 'Monthly sessions & fireside chats with founders.'}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Your Path to Success - Redesigned Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16 text-blue-900">
            Your Path to Success
          </h3>
          <div className="relative">
            {/* Dotted line for the timeline */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-blue-200 hidden md:block"></div>
            <div className="relative grid md:grid-cols-3 gap-12">
              {processSteps.map((item, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center font-bold text-blue-600 text-xl shadow-md">
                    {item.step}
                  </div>
                  <Card className="group bg-white border border-blue-200 overflow-hidden relative hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-900 mt-4">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration & Insights Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4 animate-fade-in-up">
                    Inspiration & Insights
                </h2>
                <p className="text-blue-700 max-w-2xl mx-auto animate-fade-in-up">
                    Hear from the leaders and innovators shaping the future of tech.
                </p>
            </div>
            {/* CORRECTED: Changed grid to 2 columns and adjusted max-width to center the content */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Video 1 */}
                <div className="animate-fade-in-up">
                    <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                        <CardHeader className="p-6">
                            <CardTitle className="text-2xl text-blue-950">StartX Overview</CardTitle>
                            <CardDescription className="text-blue-700 mt-2">
                                An inside look at the vision and mission of the StartX program.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/fTmELb_K6v0?start=1"
                                    title="StartX Overview"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* Video 2 */}
                <div className="animate-fade-in-up">
                    <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                        <CardHeader className="p-6">
                            <CardTitle className="text-2xl text-blue-950">Founder Stories</CardTitle>
                            <CardDescription className="text-blue-700 mt-2">
                                Hear from successful founders who started their journey with us.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/rnLK6v2QBpY"
                                    title="Founder Stories"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Startups;
