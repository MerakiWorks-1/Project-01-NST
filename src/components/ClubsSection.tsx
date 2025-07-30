import Dummy from '@/components/Dummy';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Users, Trophy, FileText, ExternalLink, Download, Star, Quote, CheckCircle } from 'lucide-react';

const Internships = () => {
  
  const gsocStudents = [
    { name: "Krishna Dave", quote: "From not knowing GSoC to cracking it in 6 months — all thanks to NST’s support. What a journey!", batch: 2024 },
    { name: "Agnik Misra", quote: "In one year I’ve cracked GSoC 2025 — proud to have hit my first-year milestone!", batch: 2024 },
    { name: "Birajit Saikia", quote: "If I can do it, so can you.", batch: 2024 },
    { name: "Ashu Choudhary", quote: "I cracked GSoC 2025 in just one focused month.", batch: 2024 },
    { name: "Yakshit Savaliya", quote: "NST’s support made it all possible.", batch: 2024 },
  ];
  
  const studentProjects = [
      { title: "Crypto Wallet", description: "Web3-based wallet for secure crypto management, inspired by MetaMask.", madeBy: "Aditya Kumar", batch: 2024 },
      { title: "CritiAI: AI Chatbot", description: "AI-powered chatbot for travel recs, coding help, and language learning.", madeBy: "Agnik Mishra", batch: 2024 },
      { title: "Skippi Clone", description: "Modernized website for Skippi ice pop brand, with future e-commerce integration planned.", madeBy: "MD Sajjan", batch: 2024 },
      { title: "Go-For-Gold", description: "7-day ICPC bootcamp with mentorship from World Finalists and intensive training.", madeBy: "Kunal Vats, Udit Jain", batch: 2024 },
      { title: "NST AI", description: "AI study buddy for NST using Mistral 7b LLM for Q&A and lecture summaries.", madeBy: "Vivek Wagadare", batch: 2024 },
      { title: "Smart India Hackathon", description: "Youngest first-year team tackling Delhi Transport Corporation challenges.", madeBy: "Roni, Deeptanu & Team", batch: 2024 },
  ];


  return (
    <div className="min-h-screen bg-white/95">
      <Dummy />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-800 animate-fade-in-up">
              NSAT Applications for 2025 have been closed
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: "0.1s"}}>
                Internship & Placement Success
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: "0.2s"}}>
                Our students achieve in two years what others take four. That’s why our curriculum is built to rigorously develop industry-relevant skills.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
                <Button size="lg" className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105 transition-all" disabled>
                    Applications Closed
                </Button>
                <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50 transform hover:scale-105 transition-all">
                    <FileText className="w-5 h-5 mr-2" /> Resume Application
                </Button>
            </div>
        </div>
      </section>
      
      {/* Internship Report Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-2 animate-fade-in-up">Internship Report 2025 Released</h2>
                <p className="text-xl text-blue-700 font-semibold mb-4 animate-fade-in-up" style={{animationDelay: "0.1s"}}>93.07% of students secured internships by their second year.</p>
                <p className="text-gray-600 mb-6 animate-fade-in-up" style={{animationDelay: "0.2s"}}>Certified by B2K Analytics (IIM Ahmedabad’s Placement Auditors)</p>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
                    View Official Report <ExternalLink className="w-4 h-4 ml-2"/>
                </Button>
            </div>
        </div>
      </section>
      
      {/* GSoC Success Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4 animate-fade-in-up">Google Summer of Code Success</h2>
                <p className="text-blue-700 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: "0.1s"}}>
                    6 First-Year Students Selected in GSoC with an average stipend of ₹2.3 lakhs, a testament to our hands-on curriculum.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gsocStudents.map((student, idx) => (
                    <Card key={idx} className="group relative overflow-hidden bg-white border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.2 + idx * 0.07}s` }}>
                        <CardContent className="p-6 relative z-10">
                            <Quote className="w-8 h-8 text-blue-300 mb-4" />
                            <p className="text-gray-700 mb-4 italic">"{student.quote}"</p>
                            <p className="font-semibold text-blue-900">{student.name}</p>
                            <p className="text-sm text-gray-600">NST {student.batch} Batch</p>
                        </CardContent>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Zuvees Case Study */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-fade-in-up">
                      <Badge className="mb-4 bg-blue-100 text-blue-800">Case Study</Badge>
                      <h2 className="text-3xl font-bold text-blue-900 mb-4">Building a UAE‑Based Startup’s Product from Scratch</h2>
                      <p className="text-gray-700 mb-6">
                          When Zuvees, a fast‑growing gifting tech startup in Dubai, needed a full‑stack tech solution, they turned to our students who built their entire product from the ground up.
                      </p>
                      <Card className="bg-blue-50/50 border-blue-200">
                          <CardContent className="p-6">
                              <p className="text-blue-800 italic">"It didn’t feel like we were working with students — it felt like we were working with professionals. They delivered like pros."</p>
                              <p className="font-semibold text-right mt-2 text-blue-900">- Abhishek Daiya, Founder of Zuvees</p>
                          </CardContent>
                      </Card>
                  </div>
                  <div className="animate-fade-in-up" style={{animationDelay: "0.1s"}}>
                      <Card className="group relative overflow-hidden bg-white border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                          <CardHeader className="relative z-10">
                              <CardTitle className="text-blue-900">From Zero to One: What They Built</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3 relative z-10">
                              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>Real‑time dashboards for the Dubai Ops Team.</span></li>
                              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>Live integrations for payment gateways and order tracking.</span></li>
                              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>Backend to manage inventory, logistics, and user flows.</span></li>
                              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" /><span>Frontend designed for customers and ops teams.</span></li>
                          </CardContent>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
                      </Card>
                  </div>
              </div>
          </div>
      </section>

      {/* Student Projects */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Student‑Built Projects Showcasing Internship‑Level Work</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {studentProjects.map((project, idx) => (
                      <Card key={idx} className="group relative overflow-hidden bg-white border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${0.1 + idx * 0.07}s` }}>
                          <CardHeader className="relative z-10">
                              <CardTitle className="text-blue-950">{project.title}</CardTitle>
                              <CardDescription className="text-blue-700">By {project.madeBy} ({project.batch})</CardDescription>
                          </CardHeader>
                          <CardContent className="relative z-10">
                              <p className="text-gray-700">{project.description}</p>
                          </CardContent>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internships;
