import Navigation from "@/components/Navigation";
import Dummy from "@/components/Dummy";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, Users, MessageCircle } from "lucide-react";

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Priya Sharma",
      expertise: ["React", "Node.js", "System Design"],
      year: "4th Year",
      department: "Computer Science",
      rating: 4.9,
      sessions: 127,
      bio: "Full-stack developer with experience in building scalable web applications. Passionate about helping students master modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Arjun Patel",
      expertise: ["Python", "Machine Learning", "Data Science"],
      year: "3rd Year",
      department: "Data Science",
      rating: 4.8,
      sessions: 89,
      bio: "Data science enthusiast with hands-on experience in ML projects. Love sharing knowledge about Python and statistical analysis.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Sneha Reddy",
      expertise: ["UI/UX", "Figma", "Design Systems"],
      year: "4th Year",
      department: "Design",
      rating: 4.9,
      sessions: 156,
      bio: "Creative designer focused on user experience and interface design. Helping students build design thinking and practical skills.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Rohit Kumar",
      expertise: ["DevOps", "AWS", "Docker"],
      year: "4th Year",
      department: "Computer Science",
      rating: 4.7,
      sessions: 94,
      bio: "Cloud infrastructure specialist with expertise in containerization and deployment. Passionate about automation and best practices.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Kavya Nair",
      expertise: ["Mobile Dev", "Flutter", "React Native"],
      year: "3rd Year",
      department: "Computer Science",
      rating: 4.8,
      sessions: 73,
      bio: "Mobile application developer with experience in cross-platform development. Love helping students build their first mobile apps.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Vikram Singh",
      expertise: ["Blockchain", "Web3", "Smart Contracts"],
      year: "4th Year",
      department: "Computer Science",
      rating: 4.6,
      sessions: 52,
      bio: "Blockchain developer exploring decentralized technologies. Eager to share knowledge about Web3 and cryptocurrency development.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-white/95">
      {/* <Navigation /> */}
      <Dummy />

      {/* Hero Section */}
      <section className="pt-40 pb-10">
        <div className="container mx-auto px-6 pb-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up delay-100">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              Student Mentors
            </h1>
            <p className="text-xl text-gray-800 font-medium mb-8">
              Connect with experienced students who can guide you through your
              academic journey
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-300 text-white hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Active Mentors", value: "50+" },
                { label: "Sessions Completed", value: "1,200+" },
                { label: "Average Rating", value: "4.8/5" },
                { label: "Success Rate", value: "95%" },
              ].map((stat, idx) => (
                <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${0.25 + idx * 0.07}s` }}>
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

      {/* Mentors Grid */}
      <section className="py-2">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up delay-100">
            <h2 className="text-4xl font-bold mb-6 text-blue-900">
              Meet Your Mentors
            </h2>
            <p className="text-gray-700 font-medium max-w-2xl mx-auto">
              Our student mentors are carefully selected based on their academic
              excellence and willingness to help fellow students succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, idx) => (
              <Card
                key={mentor.id}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.18 + idx * 0.09}s` }}
              >
                <CardHeader className="text-center pt-8">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-950">
                    {mentor.name}
                  </h3>
                  <p className="text-blue-700 font-medium">
                    {mentor.year} • {mentor.department}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4 px-6 pb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.expertise.map((skill) => (
                      <Badge key={skill} className="bg-blue-100 text-blue-800 border-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm text-center pt-2">
                    {mentor.bio}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-600 pt-2 border-t border-blue-100">
                    <div className=" flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                      <span className="font-semibold">{mentor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{mentor.sessions} sessions</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg cursor-pointer transition-all duration-300 hover:scale-105">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-900 animate-fade-in-up delay-100">
            How Mentoring Works
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Mentor",
                description:
                  "Browse mentor profiles and select based on your learning goals and their expertise.",
              },
              {
                step: "02",
                title: "Schedule Session",
                description:
                  "Book a convenient time slot and specify what you'd like to learn or discuss.",
              },
              {
                step: "03",
                title: "Learn & Grow",
                description:
                  "Join the session, ask questions, get guidance, and accelerate your learning journey.",
              },
            ].map((item, idx) => (
              <div key={item.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.22 + idx * 0.09}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-blue-900">
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

export default Mentors;