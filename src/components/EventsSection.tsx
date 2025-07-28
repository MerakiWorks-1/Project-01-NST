import { Calendar, Trophy, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "TechFest: Neutron 2024",
      date: "Dec 15-17, 2024",
      type: "Technical Festival",
      description: "Annual tech festival featuring hackathons, coding competitions, and tech talks.",
      highlights: ["48-hour Hackathon", "Industry Speakers", "Prize Pool ₹5L+"],
      status: "upcoming",
      icon: Lightbulb
    },
    {
      id: 2,
      title: "Cultural Fest: Damru",
      date: "Jan 20-22, 2025",
      type: "Cultural Festival",
      description: "Showcase your artistic talents in music, dance, drama, and creative arts.",
      highlights: ["Inter-college Competition", "Celebrity Performances", "Art Exhibitions"],
      status: "upcoming",
      icon: Users
    },
    {
      id: 3,
      title: "Innovation Expo",
      date: "Feb 10, 2025",
      type: "Academic Event",
      description: "Present your innovative projects and research to industry experts.",
      highlights: ["Student Projects", "Research Showcase", "Industry Networking"],
      status: "upcoming",
      icon: Trophy
    }
  ];

  const pastHighlights = [
    {
      title: "Hackathon Champions",
      description: "Our students won 1st place in Inter-University Hackathon 2024",
      achievement: "₹2L Prize Money"
    },
    {
      title: "Cultural Excellence",
      description: "Damru 2024 attracted 50+ colleges and 10,000+ participants",
      achievement: "Regional Recognition"
    },
    {
      title: "Industry Connect",
      description: "100+ companies participated in our placement drive",
      achievement: "95% Placement Rate"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white/95">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Events & 
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"> Festivals</span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Experience vibrant campus life through our exciting events, festivals, and competitions that bring together the entire Newton community.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center animate-fade-in-up delay-200">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => {
              const IconComponent = event.icon;
              return (
                <Card
                  key={event.id}
                  className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium border border-blue-700">
                    Upcoming
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-blue-100/80 mr-4">
                        <IconComponent className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-700">{event.date}</div>
                        <div className="text-xs text-blue-800 bg-blue-100 px-2 py-1 rounded">
                          {event.type}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-blue-950 group-hover:text-blue-700 transition-all duration-300">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-blue-900">Event Highlights:</h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full border-blue-300 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 hover:scale-105">
                      Register Now
                      <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Past Highlights */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center animate-fade-in-up delay-300">
            Competition Outcomes & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pastHighlights.map((highlight, idx) => (
              <div key={idx} className="text-center group animate-fade-in-up" style={{ animationDelay: `${0.32 + idx * 0.09}s` }}>
                <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-950 mb-2">{highlight.title}</h4>
                  <p className="text-gray-700 mb-4">{highlight.description}</p>
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {highlight.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Calendar CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center animate-fade-in-up delay-400 border border-blue-200">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Never Miss an Event
          </h3>
          <p className="text-gray-700 font-medium mb-8 max-w-2xl mx-auto">
            Stay updated with our complete event calendar and get notified about registration deadlines and important announcements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              View Full Calendar
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className='border-blue-300 text-blue-700 hover:bg-blue-100 transition-all duration-300 hover:scale-105'>
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;