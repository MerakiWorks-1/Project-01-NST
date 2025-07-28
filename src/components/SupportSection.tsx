import { MessageCircle, Phone, Mail, Clock, User, HelpCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SupportSection = () => {
  const mentors = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Student Mentor",
      expertise: ["Full Stack Development", "Career Guidance", "Project Help"],
      year: "4th Year CSE",
      rating: "4.9"
    },
    {
      id: 2,
      name: "Rahul Patel",
      role: "Tech Lead Mentor",
      expertise: ["Data Science", "Machine Learning", "Research Projects"],
      year: "Alumni 2023",
      rating: "4.8"
    },
    {
      id: 3,
      name: "Ananya Singh",
      role: "Cultural Coordinator",
      expertise: ["Event Management", "Club Activities", "Soft Skills"],
      year: "3rd Year IT",
      rating: "4.9"
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Get instant help with academic and administrative queries",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Emergency Helpline",
      description: "Round-the-clock support for urgent matters",
      availability: "Emergency Only",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed support for complex queries and documentation",
      availability: "24-48 hrs response",
      action: "Send Email"
    },
    {
      icon: HelpCircle,
      title: "FAQ Portal",
      description: "Find answers to common questions and procedures",
      availability: "Self-service",
      action: "Browse FAQ"
    }
  ];

  return (
    <section id="support" className="py-20 bg-white/95">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Student
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"> Support</span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Our comprehensive support system ensures you have help whenever you need it - from academic guidance to personal mentoring.
          </p>
        </div>

        {/* Student Mentors */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center animate-fade-in-up delay-200">
            Student Mentors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, idx) => (
              <Card
                key={mentor.id}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
              >
                <div className="relative z-10">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-blue-950">{mentor.name}</CardTitle>
                    <CardDescription className="text-blue-700 font-medium">
                      {mentor.role}
                    </CardDescription>
                    <div className="text-sm text-gray-600">
                      {mentor.year} • ⭐ {mentor.rating}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((skill, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-6 border-blue-300 text-white group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      Book a Session
                      <Clock className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {supportChannels.map((channel, idx) => {
            const IconComponent = channel.icon;
            return (
              <Card
                key={idx}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${0.35 + idx * 0.09}s` }}
              >
                <div className="relative z-10">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-blue-950">{channel.title}</CardTitle>
                    <CardDescription className="text-gray-700">
                      {channel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-blue-700 font-medium mb-4">
                      {channel.availability}
                    </div>
                    <Button variant="outline" className="w-full border-blue-300 text-white group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 hover:scale-105">
                      {channel.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </Card>
            );
          })}
        </div>

        {/* Faculty Support CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 md:p-12 text-center animate-fade-in-up delay-400">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Need to Connect with Faculty?
          </h3>
          <p className="text-gray-700 font-medium mb-8 max-w-2xl mx-auto">
            Our "Ask Faculty" forum allows you to directly connect with professors for academic guidance, project discussions, and career advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask Faculty Forum
            </Button>
            <Button variant="outline" size="lg" className="border-blue-300 text-white hover:bg-blue-100 transition-all duration-300 hover:scale-105">
              Faculty Directory
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;