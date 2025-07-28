import Dummy from '@/components/Dummy';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Users, Trophy, FileText } from 'lucide-react';
import DotGrid from '@/components/DotGrid/DotGrid';

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
      step: 'Ideation Review',
      description: 'Validate ideas, clear problem statement, solution concept, market understanding',
      deliverables: ['Project Proposal', 'Target Market Analysis', 'Initial Project Roadmap'],
    },
    {
      step: 'Prototype Review',
      description: 'Assess working prototype feasibility and initial user feedback',
      deliverables: ['Working Prototype/MVP', 'Feature Listing', 'Initial Test Results'],
    },
    {
      step: 'MVP Presentation & Evaluation',
      description: 'Pitch to StartX Fund committee for feedback and potential funding',
      deliverables: ['Working Public Product', 'User Testing Feedback', 'Pitch Deck'],
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Full-page grid background behind content */}
      <div className="absolute inset-0 -z-10">
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

      {/* Navigation bar */}
      <Dummy />

      {/* Hero & Video */}
      <section className="pt-24 pb-16 relative z-10 text-center bg-white/95">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
          Your Dreams, Our Direction
        </h1>
        <p className="text-xl text-gray-800 mb-6">
          Empowering and enabling future founders in India through funding,
          mentorship, and workshops.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Button size="lg" className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105 transition-all">
            <Rocket className="w-5 h-5 mr-2" /> Apply Now
          </Button>
          <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50 transform hover:scale-105 transition-all">
            <FileText className="w-5 h-5 mr-2" /> Resume Application
          </Button>
        </div>
        <div className="flex justify-center">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/fTmELb_K6v0?start=1"
            title="StartX Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 relative z-10 bg-white/95">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-900">
            How StartX Stands Out
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center mx-auto">
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
                className="group p-6 bg-white/80 border border-blue-200 overflow-hidden relative hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
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
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* StartX Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Your Path to Success
          </h3>
          <div className="space-y-8">
            {processSteps.map((item, idx) => (
              <Card
                key={idx}
                className="group bg-white border border-blue-200 overflow-hidden relative hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900 mb-2">{item.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Startups;
