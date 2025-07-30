import Navigation from "@/components/Navigation";
import Dummy from "@/components/Dummy";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DotGrid from "../components/DotGrid/DotGrid";
import {
  Building,
  MapPin,
  Clock,
  DollarSign,
  ExternalLink,
  Download,
} from "lucide-react";

const Internships = () => {
  const internships = [
    {
      id: 1,
      company: "TechCorp Solutions",
      role: "Frontend Developer Intern",
      location: "Bangalore",
      duration: "3 months",
      stipend: "₹25,000/month",
      type: "Full-time",
      description:
        "Work on cutting-edge React applications and learn modern web development practices.",
      skills: ["React", "JavaScript", "HTML/CSS", "Git"],
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=80&h=80&fit=crop",
    },
    {
      id: 2,
      company: "DataMine Analytics",
      role: "Data Science Intern",
      location: "Hyderabad",
      duration: "6 months",
      stipend: "₹30,000/month",
      type: "Full-time",
      description:
        "Analyze large datasets and build machine learning models for business insights.",
      skills: ["Python", "SQL", "Machine Learning", "Pandas"],
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop",
    },
    {
      id: 3,
      company: "CloudTech Innovations",
      role: "DevOps Intern",
      location: "Mumbai",
      duration: "4 months",
      stipend: "₹28,000/month",
      type: "Hybrid",
      description:
        "Learn cloud infrastructure management and CI/CD pipeline development.",
      skills: ["AWS", "Docker", "Kubernetes", "Linux"],
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=80&h=80&fit=crop",
    },
    {
      id: 4,
      company: "MobileFirst Studio",
      role: "Mobile App Developer",
      location: "Pune",
      duration: "3 months",
      stipend: "₹22,000/month",
      type: "Remote",
      description:
        "Develop cross-platform mobile applications using Flutter framework.",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
      logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=80&h=80&fit=crop",
    },
  ];

  const portfolioTools = [
    {
      title: "Resume Builder",
      description:
        "Create professional resumes with industry-specific templates",
      icon: "📄",
      action: "Build Resume",
    },
    {
      title: "Portfolio Templates",
      description: "Showcase your projects with stunning portfolio websites",
      icon: "🎨",
      action: "Get Template",
    },
    {
      title: "Project Showcase",
      description: "Document and present your technical projects effectively",
      icon: "🚀",
      action: "Start Showcase",
    },
    {
      title: "Interview Prep",
      description:
        "Practice with common interview questions and coding challenges",
      icon: "💡",
      action: "Start Prep",
    },
  ];

  return (
    <div className="min-h-screen bg-white/95">
      <div style={{ width: "100vw", height: "98vh", position: "absolute", zIndex: 0 }}>
          <DotGrid
            dotSize={10}
            gap={15}
            // Updated baseColor to a light, subtle blue for the light theme
            baseColor="#dbeafe" // This corresponds to Tailwind's `blue-100`
            // Active color is a stronger blue for contrast on the light background
            activeColor="#3b82f6" // This corresponds to Tailwind's `blue-500`
            proximity={150}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          >
          </DotGrid>
        </div>
      {/* <Navigation /> */}
      <Dummy />

      {/* Hero Section */}
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6 pb-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up delay-100">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              Internships & Projects
            </h1>
            <p className="text-xl text-gray-800 font-medium mb-8">
              Gain real-world experience and build your professional portfolio
              with industry internships
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 text-center animate-fade-in-up delay-300">
              {[
                { label: "Active Internships", value: "250+" },
                { label: "Partner Companies", value: "80+" },
                { label: "Average Stipend", value: "₹25K/month" },
                { label: "Placement Rate", value: "93%" },
              ].map((stat, idx) => (
                <div key={stat.label} style={{ animationDelay: `${0.35 + idx * 0.07}s` }} className="animate-fade-in-up">
                  <div className="text-3xl font-bold text-blue-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Current Opportunities */}
      <section className="py-2">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up delay-100">
            <h2 className="text-4xl font-bold mb-6 text-blue-900">
              Current Opportunities
            </h2>
            <p className="text-gray-700 font-medium max-w-2xl mx-auto">
              Explore internship opportunities from top companies and startups
              across various technology domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship, idx) => (
              <Card
                key={internship.id}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.18 + idx * 0.09}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={internship.logo}
                        alt={internship.company}
                        className="w-12 h-12 rounded-lg object-cover border border-blue-100"
                      />
                      <div>
                        <CardTitle className="text-xl text-blue-950">
                          {internship.role}
                        </CardTitle>
                        <p className="font-medium text-blue-700">
                          {internship.company}
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={
                        internship.type === "Remote"
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-800"
                      }
                    >
                      {internship.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    {internship.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-blue-300 text-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm pt-2 border-t border-blue-100">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">
                        {internship.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">
                        {internship.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">
                        {internship.stipend}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">Tech</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up delay-400">
            <Button variant="outline" size="lg" className="border-blue-300 text-white hover:bg-blue-50 hover:scale-105 transition-all duration-300">
              View All Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Building */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up delay-100">
            <h3 className="text-3xl font-bold mb-6 text-blue-900">
              Portfolio Building Toolkit
            </h3>
            <p className="text-gray-700 font-medium max-w-2xl mx-auto">
              Access professional tools and templates to create an impressive
              portfolio and resume that stands out to employers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioTools.map((tool, idx) => (
              <Card
                key={tool.title}
                className="text-center group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <CardTitle className="text-xl text-blue-950">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm">
                    {tool.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-blue-300 text-white group-hover:bg-blue-600 group-hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    {tool.action}
                  </Button>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-900 animate-fade-in-up delay-100">
            How to Apply
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Browse & Select", description: "Explore opportunities that match your skills and interests" },
              { step: "02", title: "Prepare Application", description: "Use our toolkit to create a compelling resume and portfolio" },
              { step: "03", title: "Submit & Track", description: "Apply through our platform and track your application status" },
              { step: "04", title: "Interview & Start", description: "Prepare for interviews and begin your internship journey" },
            ].map((item, idx) => (
              <div key={item.step} className="text-center animate-fade-in-up p-6 border border-blue-200 rounded-md" style={{ animationDelay: `${0.18 + idx * 0.09}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-4 text-blue-900">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internships;