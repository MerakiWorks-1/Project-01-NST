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
    <section id="academics" className="py-20 bg-white/95">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Academic 
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Cutting-edge curriculum designed with industry leaders to prepare you for tomorrow's tech challenges.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, idx) => (
            <Card
              key={program.id}
              className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.18 + idx * 0.09}s` }}
            >
              <div className="relative z-10"> {/* Content wrapper to stay above hover effects */}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                      {program.duration}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-blue-950 group-hover:text-blue-700 transition-colors duration-300">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.specializations.map((spec, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-blue-100/80 text-blue-800 px-2 py-1 rounded"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Program Highlights:</h4>
                      <ul className="space-y-1">
                        {program.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-1 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6 border-blue-300 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 hover:scale-105">
                    Learn More
                  </Button>
                </CardContent>
              </div>

              {/* These are the decorative hover effect elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${0.35 + idx * 0.09}s` }}
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Faculty Support CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center animate-fade-in-up delay-400 border border-blue-200">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Need Academic Support?
          </h3>
          <p className="text-gray-700 font-medium mb-8 max-w-2xl mx-auto">
            Our faculty members offer extended office hours, personalized mentoring, and are always available to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              Meet Our Faculty
            </Button>
            <Button variant="outline" size="lg" className='border-blue-300 text-blue-700 hover:bg-blue-100 transition-all duration-300 hover:scale-105'>
              Academic Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;