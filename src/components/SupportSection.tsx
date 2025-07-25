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
    <section id="support" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Student
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Support</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive support system ensures you have help whenever you need it - from academic guidance to personal mentoring.
          </p>
        </div>

        {/* Student Mentors */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center animate-fade-in-up delay-200">
            Student Mentors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, idx) => (
              <Card
                key={mentor.id}
                className="bg-card border-border hover:shadow-card transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{mentor.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {mentor.role}
                  </CardDescription>
                  <div className="text-sm text-muted-foreground">
                    {mentor.year} • ⭐ {mentor.rating}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  >
                    Book a Session
                    <Clock className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
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
                className="bg-card border-border hover:shadow-card transition-all duration-300 group text-center animate-fade-in-up"
                style={{ animationDelay: `${0.35 + idx * 0.09}s` }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{channel.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {channel.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-primary font-medium mb-4">
                    {channel.availability}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 hover:scale-105">
                    {channel.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Faculty Support CTA */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center animate-fade-in-up delay-400">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need to Connect with Faculty?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our "Ask Faculty" forum allows you to directly connect with professors for academic guidance, project discussions, and career advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask Faculty Forum
            </Button>
            <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105">
              Faculty Directory
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;