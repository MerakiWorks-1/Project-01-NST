import Dummy from '@/components/Dummy';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Users, Trophy, FileText, CheckCircle, Calendar, BookOpen, Calculator, Languages, Brain, Mail, Phone, MessageCircle, Clock } from 'lucide-react';

const Admissions = () => {
  const processSteps = [
    {
      icon: FileText,
      step: "01",
      title: "Online Application",
      description: "Complete the form with your personal details, academic records, and extracurricular achievements."
    },
    {
      icon: Calculator,
      step: "02",
      title: "NSAT Registration",
      description: "Pay a non-refundable application fee of ₹1,200 to register for our entrance test."
    },
    {
      icon: BookOpen,
      step: "03",
      title: "NSAT Entrance Exam",
      description: "A 3-hour online exam testing logical reasoning, English comprehension, and mathematics."
    },
    {
      icon: Users,
      step: "04",
      title: "Interview & GD",
      description: "Top performers are invited for a personal interview and group discussion with our faculty panel."
    },
    {
      icon: Mail,
      step: "05",
      title: "Admission Offer",
      description: "Successful candidates receive an official admission offer letter via email with the next steps."
    },
    {
      icon: Calendar,
      step: "06",
      title: "Enrollment",
      description: "Submit documents and pay the ₹50,000 block fee to confirm your place in the upcoming batch."
    }
  ];

  return (
    <div className="min-h-screen bg-white/95">
      {/* Navigation bar */}
      <Dummy />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
            Admissions Open for B.Tech
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            A rigorous, four-year residential program in Computer Science & AI, designed to nurture industry-ready professionals through a cutting-edge curriculum.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105 transition-all">
              <Rocket className="w-5 h-5 mr-2" /> Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50 transform hover:scale-105 transition-all">
              <FileText className="w-5 h-5 mr-2" /> Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Eligibility & Requirements
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <CheckCircle className="w-6 h-6" />
                  Academic Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>Completion of Class 12 in Science stream with Physics, Chemistry & Mathematics (PCM or PCMB).</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>Minimum 50% in PCM subjects and 50% aggregate in Class 12 board examinations.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>Open to students who completed Class 12 in 2024, or graduating in 2025.</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <FileText className="w-6 h-6" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><FileText className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>Class 10 & 12 mark sheets and passing certificates.</span></li>
                  <li className="flex items-start gap-3"><FileText className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>ID proof (Aadhar Card, Passport, etc.) and recent photographs.</span></li>
                  <li className="flex items-start gap-3"><FileText className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>Transfer certificate and character certificate from your previous institution.</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
            Step-by-Step Admission Process
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>
            <div className="space-y-12">
              {processSteps.map((step, idx) => (
                <div key={idx} className={`flex items-center w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:flex justify-center w-[calc(50%-1.5rem)]">
                    {idx % 2 !== 0 && (
                      <Card className="p-6 bg-white border border-blue-200 shadow-lg w-full">
                        <CardTitle className="text-xl text-blue-900 mb-2">{step.title}</CardTitle>
                        <p className="text-gray-700">{step.description}</p>
                      </Card>
                    )}
                  </div>
                  <div className="z-10 bg-white w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center font-bold text-blue-600 text-xl shadow-md mx-6 shrink-0">
                    {step.step}
                  </div>
                  <div className="w-full md:w-[calc(50%-1.5rem)]">
                     <Card className="p-6 bg-white border border-blue-200 shadow-lg">
                        <CardTitle className="text-xl text-blue-900 mb-2">{step.title}</CardTitle>
                        <p className="text-gray-700">{step.description}</p>
                      </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NSAT Exam Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            NSAT Entrance Exam Details
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Brain, title: "General Aptitude", questions: "30 Questions", topics: ["Logical Reasoning", "Data Interpretation", "Algorithmic Thinking"] },
              { icon: Languages, title: "English Language", questions: "20 Questions", topics: ["Reading Comprehension", "Grammar & Vocabulary", "Sentence Correction"] },
              { icon: Calculator, title: "Mathematics", questions: "30 Questions", topics: ["Class 10-12 Syllabus", "Calculus & Algebra", "Probability & Statistics"] }
            ].map((section) => (
              <Card key={section.title} className="group relative overflow-hidden bg-white border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-blue-950">{section.title}</CardTitle>
                  <CardDescription className="font-semibold text-blue-700">{section.questions}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.topics.map((topic) => (
                      <li key={topic} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-20 bg-blue-50/70">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Need Help?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Mail, title: "Email Support", detail: "admissions@newtonschool.co" },
              { icon: Phone, title: "Phone Support", detail: "+91 98765 43210" },
              { icon: MessageCircle, title: "Live Chat", detail: "Start Chat Now" }
            ].map((contact) => (
              <Card key={contact.title} className="text-center bg-white border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-blue-900">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-100">
                    {contact.detail}
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

export default Admissions;
