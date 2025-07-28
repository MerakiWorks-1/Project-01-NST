import Navigation from '@/components/Navigation';
import Dummy from '@/components/Dummy'
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar, FileText, Users } from 'lucide-react';
import DotGrid from "../components/DotGrid/DotGrid";

const Admissions = () => {
  return (
    <div className="min-h-screen">
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
      <section className="pt-24 pb-20 bg-gradient-to-br from-[hsl(217_15%_7%)]  to-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up delay-100">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Join Newton School
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start your journey into technology with our comprehensive admission process
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in-up delay-100">
            Admission Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Application",
                description: "Submit your online application with required documents"
              },
              {
                icon: Users,
                title: "Interview",
                description: "Attend the admission interview with our faculty"
              },
              {
                icon: CheckCircle,
                title: "Selection",
                description: "Receive your admission confirmation"
              },
              {
                icon: Calendar,
                title: "Enrollment",
                description: "Complete enrollment and join orientation"
              }
            ].map((step, index) => (
              <Card key={step.title} className="relative animate-fade-in-up" style={{ animationDelay: `${0.18 + index * 0.09}s` }}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </CardContent>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30 rotate-45 transform -translate-y-1/2" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Eligibility Criteria</h3>
              <ul className="space-y-4">
                {[
                  "12th standard completed with minimum 60% marks",
                  "Strong foundation in Mathematics and Science",
                  "Basic computer literacy",
                  "Age between 17-25 years",
                  "Passion for technology and innovation"
                ].map((criteria, idx) => (
                  <li key={criteria} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${0.22 + idx * 0.07}s` }}>
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Required Documents</h3>
              <ul className="space-y-4">
                {[
                  "10th & 12th standard mark sheets",
                  "Transfer certificate",
                  "Character certificate",
                  "Passport size photographs",
                  "Identity proof (Aadhar/PAN)",
                  "Category certificate (if applicable)"
                ].map((document, idx) => (
                  <li key={document} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${0.22 + idx * 0.07}s` }}>
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{document}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in-up delay-100">Important Dates</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Application Opens", date: "March 1, 2024", status: "open" },
              { title: "Application Deadline", date: "June 30, 2024", status: "upcoming" },
              { title: "Classes Begin", date: "August 15, 2024", status: "upcoming" }
            ].map((item, idx) => (
              <Card key={item.title} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.22 + idx * 0.09}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">{item.date}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'open' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {item.status}
                  </span>
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

export default Admissions;