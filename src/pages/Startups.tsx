import Navigation from '@/components/Navigation';
import Dummy from '@/components/Dummy'
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, DollarSign, Users, Trophy, FileText, Lightbulb } from 'lucide-react';

const Startups = () => {
  const successStories = [
    {
      name: "EcoTech Solutions",
      founder: "Rahul Verma",
      description: "IoT-based water management system for smart cities",
      funding: "₹15 Lakhs",
      stage: "Series A",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop"
    },
    {
      name: "HealthAI",
      founder: "Priya Gupta",
      description: "AI-powered diagnostic tool for rural healthcare",
      funding: "₹8 Lakhs",
      stage: "Seed",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    },
    {
      name: "EduNext",
      founder: "Arjun Sharma",
      description: "Personalized learning platform for K-12 students",
      funding: "₹12 Lakhs",
      stage: "Pre-Series A",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* <Navigation /> */}
      <Dummy />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up delay-100">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Newton Startup Fund
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your innovative ideas into successful startups with Start-X funding program
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Apply for Funding
              </Button>
              <Button variant="outline" size="lg" className='transition-all duration-300 hover:scale-105'>
                <FileText className="w-5 h-5 mr-2" />
                Download Pitch Template
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up delay-100">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Fuel Your Entrepreneurial Journey
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Start-X is Newton School's flagship startup incubation program that provides funding, 
                mentorship, and resources to help student entrepreneurs build scalable businesses.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: DollarSign, label: "Up to ₹20L", sublabel: "Funding" },
                  { icon: Users, label: "50+", sublabel: "Mentors" },
                  { icon: Rocket, label: "100+", sublabel: "Startups Funded" },
                  { icon: Trophy, label: "85%", sublabel: "Success Rate" }
                ].map((stat, idx) => (
                  <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.18 + idx * 0.09}s` }}>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.label}</div>
                    <div className="text-muted-foreground text-sm">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in-up delay-200">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Startup workspace"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in-up delay-100">
            Application Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Submit Idea",
                description: "Present your startup idea with a detailed pitch deck"
              },
              {
                step: "02",
                title: "Initial Review",
                description: "Our panel evaluates your submission for viability"
              },
              {
                step: "03",
                title: "Pitch Presentation",
                description: "Present your idea to investors and mentors"
              },
              {
                step: "04",
                title: "Funding Decision",
                description: "Receive funding and start building your startup"
              }
            ].map((item, index) => (
              <div key={item.step} className="relative animate-fade-in-up" style={{ animationDelay: `${0.18 + index * 0.09}s` }}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30 rotate-45 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in-up delay-100">
            Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <Card key={story.name} className="group hover:shadow-glow transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.18 + idx * 0.09}s` }}>
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {story.stage}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{story.name}</CardTitle>
                  <p className="text-muted-foreground">Founded by {story.founder}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{story.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">{story.funding}</span>
                    </div>
                    <Button variant="ghost" size="sm" className='transition-all duration-300 hover:scale-105'>
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Tiers */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in-up delay-100">
            Funding Tiers
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: "Ideation",
                amount: "₹2-5 Lakhs",
                description: "For early-stage ideas and proof of concept development",
                features: ["Mentor Support", "Co-working Space", "Basic Resources", "Networking Events"]
              },
              {
                tier: "Development",
                amount: "₹5-12 Lakhs",
                description: "For MVPs and initial market validation",
                features: ["Extended Mentorship", "Technical Support", "Market Research", "Legal Guidance"],
                popular: true
              },
              {
                tier: "Growth",
                amount: "₹12-20 Lakhs",
                description: "For scaling proven business models",
                features: ["Strategic Partnership", "Advanced Resources", "Investment Networks", "Growth Acceleration"]
              }
            ].map((tier, idx) => (
              <Card key={tier.tier} className={`relative animate-fade-in-up ${tier.popular ? 'border-primary shadow-glow' : ''}`} style={{ animationDelay: `${0.18 + idx * 0.09}s` }}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.tier}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tier.amount}</div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Lightbulb className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105' : 'hover:scale-105 transition-all duration-300'}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Startups;