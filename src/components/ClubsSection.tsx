import { Users, Code, Mic, Brush, Gamepad, Film } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ClubsSection = () => {
  const clubs = [
    {
      name: "Coding Club",
      description: "For aspiring developers and competitive programmers.",
      members: "250+ Members",
      icon: Code,
      tags: ["Development", "CP", "Web", "App"],
    },
    {
      name: "Orators Club",
      description: "Hone your public speaking and communication skills.",
      members: "120+ Members",
      icon: Mic,
      tags: ["Public Speaking", "Debate", "MUN"],
    },
    {
      name: "Design & Arts Society",
      description: "A community for creative minds and visual artists.",
      members: "180+ Members",
      icon: Brush,
      tags: ["UI/UX", "Graphics", "Fine Arts"],
    },
    {
      name: "E-Sports Guild",
      description: "Compete in popular gaming titles and tournaments.",
      members: "300+ Members",
      icon: Gamepad,
      tags: ["Gaming", "Tournaments", "Strategy"],
    },
    {
      name: "Film & Photography Club",
      description: "Capture moments and tell stories through visuals.",
      members: "150+ Members",
      icon: Film,
      tags: ["Filmmaking", "Photography", "Editing"],
    },
    {
      name: "Entrepreneurship Cell",
      description: "Nurturing the next generation of startup founders.",
      members: "200+ Members",
      icon: Users,
      tags: ["Startups", "Business", "Innovation"],
    },
  ];

  return (
    <section id="clubs" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Clubs & Societies
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Join vibrant communities, develop new skills, and make lifelong connections through our diverse range of student organizations.
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, idx) => {
            const IconComponent = club.icon;
            return (
              <Card
                key={club.name}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.18 + idx * 0.07}s` }}
              >
                <div className="relative z-10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-4 rounded-xl bg-blue-100/80 mb-4">
                        <IconComponent className="h-8 w-8 text-blue-700" />
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                        {club.members}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-blue-950">{club.name}</CardTitle>
                    <CardDescription className="text-gray-700 pt-1">
                      {club.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {club.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-blue-300 text-blue-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-white group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      Join Community
                    </Button>
                  </CardContent>
                </div>
                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
