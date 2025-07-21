import { BookOpen, Users, Clock, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AcademicsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Computer Science & Engineering",
      duration: "4 Years",
      specializations: ["AI/ML", "Full Stack Development", "Data Science", "Cybersecurity"],
      description: "Comprehensive program covering modern software development, algorithms, and emerging technologies.",
      highlights: ["Industry Projects", "100% Placement Support", "Modern Labs"]
    },
    {
      id: 2,
      title: "Information Technology",
      duration: "4 Years", 
      specializations: ["Cloud Computing", "Mobile Development", "DevOps", "System Design"],
      description: "Focus on practical IT solutions, system administration, and enterprise software development.",
      highlights: ["Live Projects", "Industry Mentorship", "Certification Support"]
    },
    {
      id: 3,
      title: "Data Science & Analytics",
      duration: "4 Years",
      specializations: ["Business Analytics", "Machine Learning", "Big Data", "Statistics"],
      description: "Data-driven decision making with hands-on experience in analytics tools and techniques.",
      highlights: ["Real Datasets", "Research Opportunities", "Industry Partnerships"]
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Project-Based Learning",
      description: "Learn through real-world projects and case studies"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Industry professionals and academic researchers"
    },
    {
      icon: Clock,
      title: "Flexible Schedules",
      description: "Extended office hours and personalized support"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Prepare for leading tech certifications"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Academic 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge curriculum designed with industry leaders to prepare you for tomorrow's tech challenges.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <Card key={program.id} className="bg-card border-border hover:shadow-card transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.specializations.map((spec, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-secondary text-foreground px-2 py-1 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Program Highlights:</h4>
                    <ul className="space-y-1">
                      {program.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <ChevronRight className="h-3 w-3 text-primary mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Faculty Support CTA */}
        <div className="bg-card rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Academic Support?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our faculty members offer extended office hours, personalized mentoring, and are always available to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-accent hover:shadow-glow">
              Meet Our Faculty
            </Button>
            <Button variant="outline" size="lg">
              Academic Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;