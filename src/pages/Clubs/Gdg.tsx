import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Dummy from '@/components/Dummy';
import Footer from '@/components/Footer';
import { Linkedin, BrainCircuit, Users, Lightbulb, Mic, Award, Handshake, Rocket, Calendar, Target, Trophy, Star, Code, Users as UsersIcon, Globe, MessageCircle } from 'lucide-react';

const GdgPresidentPhoto = "/path/to/aaryan-yadav.jpg"; // Replace with actual path
const GdgVpPhoto = "/path/to/puneet.jpg"; // Replace with actual path
const GdgSecretaryPhoto = "/path/to/pranav-singh.jpg"; // Replace with actual path

const leadership = [
  {
    name: "Aaryan Yadav",
    role: "President",
    photo: GdgPresidentPhoto,
    bio: "Leading the charge to foster a vibrant tech community at Rishihood University. Passionate about leveraging Google technologies to solve real-world problems.",
    linkedin: "https://www.linkedin.com/in/aaryanyadav/",
  },
  {
    name: "Puneet",
    role: "Vice President",
    photo: GdgVpPhoto,
    bio: "Dedicated to creating opportunities for students to learn, grow, and connect. Manages operations and ensures the smooth execution of our events.",
    linkedin: "https://www.linkedin.com/in/puneet/",
  },
  {
    name: "Pranav Singh",
    role: "Secretary",
    photo: GdgSecretaryPhoto,
    bio: "The organizational backbone of GDG RU. Manages communications, documentation, and helps coordinate between different verticals of the club.",
    linkedin: "https://www.linkedin.com/in/pranavsingh/",
  },
];

const benefits = [
    { icon: BrainCircuit, title: "Technical Skill Development", description: "Access workshops, hackathons, and codelabs on Google technologies like Android, AI/ML, Cloud, and Firebase." },
    { icon: Users, title: "Networking & Community", description: "Connect with peers, professionals, and Google experts, fostering collaboration and mentorship." },
    { icon: Award, title: "Professional Growth", description: "Showcase projects, earn certificates, and gain leadership experience to bolster your resume." },
    { icon: Mic, title: "Personal Growth", description: "Develop soft skills like public speaking, teamwork, and innovative problem-solving." },
    { icon: Rocket, title: "Access to Google Ecosystem", description: "Get perks like early access to new tech, swag, and opportunities to attend flagship Google events." },
    { icon: Handshake, title: "Give Back to the Community", description: "Mentor newcomers and contribute to a thriving tech ecosystem." },
];

const eventBenefits = [
    { icon: BrainCircuit, title: "Skills Development", description: "Gain hands-on experience in UI/UX, pitching, teamwork, and innovation." },
    { icon: Users, title: "Mentoring", description: "Receive guidance from leading designers, founders, and industry professionals." },
    { icon: Handshake, title: "Networking", description: "Connect with recruiters, entrepreneurs, and experts in the tech ecosystem." },
    { icon: Award, title: "Recognition", description: "Earn certificates, awards, and unlock potential career and internship opportunities." },
]

export default function Gdg() {
  return (
    <div className="min-h-screen bg-white/95">
      <Dummy />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="container mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full shadow-lg border border-gray-200 animate-fade-in-up backdrop-blur-sm">
              <img src="https://developers.google.com/site-assets/images/shared/google-developers-logo.svg" alt="Google Developers Logo" className="w-6 h-6" />
              <span className="text-gray-800 font-semibold">Google Developer Groups</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
              GDG Rishihood University
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              An open, inclusive space for students to learn, collaborate, and innovate with Google technologies.
            </p>
          </div>
        </section>

        {/* What is GDG Section */}
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What is GDG and Why Does It Exist?</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        A network of local communities for developers, designers, and tech enthusiasts interested in Google’s technology stack.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
                    <p className="text-lg text-gray-800 mb-4">
                        <strong>GDG</strong> stands for Google Developer Groups. It is a network of local technical communities for developers, designers, and tech enthusiasts interested in Google’s technology stack—such as Android, Cloud, AI, and more. Each “chapter” is run by community volunteers, often on college campuses or in cities worldwide.
                    </p>
                    <p className="text-lg text-gray-800 mb-6">
                        GDGs exist to create <strong>open, inclusive spaces</strong> for people to learn, collaborate, and innovate. Members get to build skills, work on real-world projects, and find mentorship, regardless of experience level. Activities range from hands-on coding meetups and workshops to hackathons and guest lectures.
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-6 py-2 text-lg text-gray-700 italic bg-blue-50 rounded-r-lg">
                        “GDG’s mission is simple: to create an open, inclusive environment where people of all technical expertise can learn from each other, innovate, and explore rapidly evolving tech.”
                    </blockquote>
                </div>
            </div>
        </section>

        {/* Benefits of Joining GDG Section */}
        <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Benefits of Joining GDG</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, idx) => (
                        <Card key={benefit.title} className="group relative overflow-hidden bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                                    <benefit.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-gray-900">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Flagship Events Section */}
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Flagship Events</h2>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <Card className="overflow-hidden shadow-lg border border-gray-200">
                        <CardHeader className="bg-red-50 p-6">
                            <CardTitle className="text-3xl font-bold text-red-800">Visual Vortex (UI/UX Hackathon)</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-gray-700 mb-4">The flagship UI/UX hackathon of GDG RU, bringing together student designers, developers, and creative thinkers to tackle real-world user experience challenges.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li><strong>Date:</strong> First edition on November 15, 2024.</li>
                                <li><strong>Format:</strong> Teams design wireframes, workflows, or prototypes in a 24-hour competition.</li>
                                <li><strong>Workshops:</strong> Pre-event sessions on Figma and design principles.</li>
                                <li><strong>Judging:</strong> Evaluated by design professionals on creativity, usability, and problem-solution fit.</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden shadow-lg border border-gray-200">
                        <CardHeader className="bg-green-50 p-6">
                            <CardTitle className="text-3xl font-bold text-green-800">Ideathon (Entrepreneurial Hackathon)</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-gray-700 mb-4">An entrepreneurship-themed hackathon where students ideate and build business models or prototypes for innovative solutions.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li><strong>Format:</strong> Teams brainstorm, develop, and pitch creative business ideas or technical prototypes.</li>
                                <li><strong>Pitch Session:</strong> Finalists present to a jury of entrepreneurs, VCs, and technical experts.</li>
                                <li><strong>Mentorship:</strong> Guidance from startup founders and industry mentors.</li>
                                <li><strong>Recognition:</strong> Winners receive prizes and potential incubation support.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Benefits of Participating Section */}
        <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Participate in Our Events?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {eventBenefits.map((benefit, idx) => (
                        <Card key={benefit.title} className="text-center p-6 bg-white border-2 border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <benefit.icon className="w-8 h-8 text-gray-600" />
                            </div>
                            <CardTitle className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</CardTitle>
                            <p className="text-gray-600">{benefit.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leadership.map((leader) => (
                <Card key={leader.name} className="group relative overflow-hidden text-center bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <img
                      src={`https://ui-avatars.com/api/?name=${leader.name.replace(' ', '+')}&background=0D8ABC&color=fff&size=128`}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { const img = e.target as HTMLImageElement; img.onerror = null; img.src = 'https://via.placeholder.com/128'; }}
                    />
                    <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                    <p className="text-gray-600 mb-6">{leader.bio}</p>
                    <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How to Join GDG RU</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        Our process is designed to find passionate individuals for various roles.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Application Form</h3>
                        <p className="text-gray-700">
                            We roll out a Google Form where you can express your interest in different verticals like Web Dev, Marketing, Social Media, Design, and Event Management. The form includes some case-based and aptitude questions to gauge your skills.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Selection Process</h3>
                        <p className="text-gray-700">
                            The selection process varies by vertical. For non-technical roles, there might be a direct interview. For technical roles like Web Development, the process typically involves a task or exam followed by an interview to assess your technical abilities.
                        </p>
                    </div>
                </div>
            </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
