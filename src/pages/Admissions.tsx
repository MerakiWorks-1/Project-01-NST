import Navigation from '@/components/Navigation';
import Dummy from '@/components/Dummy'
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar, FileText, Users, Clock, BookOpen, Calculator, Languages, Brain, Mail, Phone, MessageCircle } from 'lucide-react';
import DotGrid from "../components/DotGrid/DotGrid";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <div style={{ width: "100vw", height: "98vh", position: "absolute", zIndex: 0 }}>
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
              Newton School of Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              B.Tech – Computer Science & Artificial Intelligence at Rishihood University
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              A rigorous, four-year residential program designed to nurture industry-ready professionals through cutting-edge AI coursework, hands-on projects, and expert mentorship.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in-up delay-100">
            Eligibility Criteria
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                Academic Requirements
              </h3>
              <ul className="space-y-4">
                {[
                  "Must be an Indian citizen residing in India",
                  "Completion of Class 12 in Science stream with Physics, Chemistry & Mathematics (PCM or PCMB)",
                  "At least 50% in PCM subjects and 50% aggregate in Class 12 board examinations",
                  "Open to students who completed Class 12 in 2023, 2024, or graduating in 2025"
                ].map((criteria, idx) => (
                  <li key={criteria} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${0.22 + idx * 0.07}s` }}>
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Required Documents
              </h3>
              <ul className="space-y-4">
                {[
                  "Personal details and academic records",
                  "Class 12 mark sheets",
                  "ID proof and photographs",
                  "Any extracurricular achievements",
                  "Transfer certificate",
                  "Character certificate"
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

      {/* Admission Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in-up delay-100">
            Step-by-Step Admission Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: FileText,
                title: "1. Online Application",
                description: "Complete the application form with personal details, academic records, and extracurricular achievements on Newton School website"
              },
              {
                icon: Calculator,
                title: "2. NSAT Registration",
                description: "Pay non-refundable application fee of ₹1,200 to register for Newton Scholastic Aptitude Test (NSAT)"
              },
              {
                icon: BookOpen,
                title: "3. NSAT Entrance Exam",
                description: "3-hour online exam testing logical reasoning, English comprehension, and mathematics"
              },
              {
                icon: Users,
                title: "4. Interview & GD",
                description: "Top NSAT performers invited for personal interview and group discussion with faculty panel"
              },
              {
                icon: CheckCircle,
                title: "5. Admission Offer",
                description: "Successful candidates receive official admission offer letter via email"
              },
              {
                icon: Calendar,
                title: "6. Enrollment",
                description: "Submit documents and pay ₹50,000 block fee within deadline to confirm your place"
              }
            ].map((step, index) => (
              <Card key={step.title} className="relative animate-fade-in-up h-full" style={{ animationDelay: `${0.18 + index * 0.09}s` }}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NSAT Exam Details */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in-up delay-100">
            NSAT Entrance Exam Details
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="animate-fade-in-up delay-150">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                  <Clock className="w-8 h-8 text-primary" />
                  Exam Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Mode</h4>
                    <p className="text-muted-foreground">Online</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Duration</h4>
                    <p className="text-muted-foreground">180 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Questions</h4>
                    <p className="text-muted-foreground">80 MCQs</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Marking</h4>
                    <p className="text-muted-foreground">+4 correct, -1 wrong</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "General Aptitude",
                questions: "30 Questions (37%)",
                topics: [
                  "Logical Reasoning & Data Interpretation (20)",
                  "Graphs, charts, tables analysis",
                  "Pattern recognition, series completion",
                  "Algorithmic Thinking (10)",
                  "Step-wise problem breakdown",
                  "Pseudocode interpretation"
                ]
              },
              {
                icon: Languages,
                title: "English Language",
                questions: "20 Questions (25%)",
                topics: [
                  "Reading Comprehension (10)",
                  "Passage analysis, inference, tone & purpose",
                  "Language Proficiency (10)",
                  "Grammar usage, error detection",
                  "Vocabulary: synonyms, antonyms",
                  "Sentence completion & correction"
                ]
              },
              {
                icon: Calculator,
                title: "Mathematics",
                questions: "30 Questions (37%)",
                topics: [
                  "Class 10 Topics (20): Number Systems, Arithmetic",
                  "Algebra, Basic Geometry & Mensuration",
                  "Profit & Loss, Interest calculations",
                  "Class 11 & 12 Topics (10): Functions, Sets",
                  "Permutations, Combinations, Probability",
                  "Calculus, Matrices, Statistics"
                ]
              }
            ].map((section, index) => (
              <Card key={section.title} className="animate-fade-in-up h-full" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <section.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <p className="text-sm text-primary font-semibold">{section.questions}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {section.topics.map((topic, idx) => (
                      <li key={idx} className="text-muted-foreground">• {topic}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in-up delay-100">
            Preparation Tips
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Begin Early",
                description: "Create a comprehensive study schedule covering all NSAT topics with dedicated time slots"
              },
              {
                title: "Practice Mock Tests",
                description: "Familiarize yourself with the online exam interface and time constraints through regular practice"
              },
              {
                title: "Strengthen Fundamentals",
                description: "Revisit Class 10-12 NCERT concepts, especially in mathematics and core subjects"
              },
              {
                title: "Read Widely",
                description: "Enhance comprehension skills by reading editorials, technical blogs, and short stories"
              },
              {
                title: "Stay Calm & Confident",
                description: "Prioritize accuracy over speed and learn quick elimination techniques for MCQs"
              },
              {
                title: "Time Management",
                description: "Practice solving questions within time limits and develop effective exam strategies"
              }
            ].map((tip, index) => (
              <Card key={tip.title} className="animate-fade-in-up h-full" style={{ animationDelay: `${0.18 + index * 0.08}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg text-center">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in-up delay-100">
            Need Help?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center animate-fade-in-up delay-150">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Get detailed answers to your queries</p>
                <Button variant="outline" className="w-full">
                  admissions@newtonschool.co
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in-up delay-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Mon-Fri, 9 AM-6 PM</p>
                <Button variant="outline" className="w-full">
                  +91 80 1234 5678
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in-up delay-250">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Instant assistance available</p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-in-up delay-300">
            <p className="text-lg text-muted-foreground mb-6">
              Embark on a transformative journey with NST at Rishihood University—where innovation meets excellence!
            </p>
            <p className="text-primary font-semibold">
              We look forward to welcoming you to our next batch of trailblazers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;