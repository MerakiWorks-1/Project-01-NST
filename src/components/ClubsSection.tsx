import { ArrowRight, Users, Code, Palette, Music, Trophy, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ClubsSection = () => {
  const clubs = [
    {
      id: 1,
      name: "Coding Club",
      description: "Master programming languages and participate in hackathons",
      icon: Code,
      members: 120,
      category: "Technical",
      color: "primary"
    },
    {
      id: 2,
      name: "Design Studio",
      description: "UI/UX design, graphics, and creative digital solutions",
      icon: Palette,
      members: 85,
      category: "Creative",
      color: "accent"
    },
    {
      id: 3,
      name: "Music Society",
      description: "Campus events, cultural performances, and music production",
      icon: Music,
      members: 95,
      category: "Cultural",
      color: "primary"
    },
    {
      id: 4,
      name: "Sports Arena",
      description: "Inter-college competitions and fitness activities",
      icon: Trophy,
      members: 150,
      category: "Sports",
      color: "accent"
    },
    {
      id: 5,
      name: "AI/ML Club",
      description: "Machine learning projects and research initiatives",
      icon: Cpu,
      members: 110,
      category: "Technical",
      color: "primary"
    },
    {
      id: 6,
      name: "Student Council",
      description: "Student representation and campus governance",
      icon: Users,
      members: 25,
      category: "Leadership",
      color: "accent"
    }
  ];

  return (
    <section id="clubs" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Clubs & 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Societies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join vibrant communities, develop new skills, and make lifelong connections through our diverse range of student organizations.
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {clubs.map((club) => {
            const IconComponent = club.icon;
            return (
              <Card 
                key={club.id} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${
                      club.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        club.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {club.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {club.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {club.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{club.members} members</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Join Club
                    <ArrowRight className="ml-2 h-4 w-4 hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Get Involved?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore all our clubs and societies. Find your passion, develop leadership skills, and create amazing memories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Browse All Clubs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Start a New Club
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;