import { Calendar, Trophy, Lightbulb, Users, ArrowRight, Plane, MapPin, Globe, Zap, Music, Camera, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Neutron 2025",
      subtitle: "India's First Techno-Cultural Fest",
      date: "Coming Soon",
      type: "Techno-Cultural Festival",
      description: "Student-led fest blending cutting-edge technology with vibrant cultural performances. Experience hands-on robotics, VR, live music, and creative workshops.",
      highlights: [
        "1,700+ registered participants",
        "Signature drone show with 150 drones",
        "₹10+ lakh prize pool",
        "₹5.5+ lakh in sponsorships"
      ],
      stats: {
        participants: "1,700+",
        attendees: "1,100+",
        prizePool: "₹10L+"
      },
      status: "upcoming",
      icon: Zap,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "DAMRU 2024",
      subtitle: "Diversity, Art, Music & Recreation Unleashed",
      date: "Nov 29-30, 2024",
      type: "Cultural Festival",
      description: "Rishihood University's flagship cultural fest combining art, music, theatre, gaming, and tech with celebrity performances and workshops.",
      highlights: [
        "45,000+ participants from 100+ colleges",
        "₹15-20 lakh prize pool",
        "Live performances by Aastha Gill & Gaurav Kapoor",
        "Campus Ambassador program"
      ],
      stats: {
        participants: "45,000+",
        colleges: "100+",
        prizePool: "₹15-20L"
      },
      ticketInfo: [
        "₹199 (one-day general)",
        "₹299 (two-day general)", 
        "₹499 (VIP with accommodation)"
      ],
      status: "upcoming",
      icon: Music,
      gradient: "from-pink-600 to-purple-600"
    }
  ];

  const techTreks = [
    {
      id: 1,
      title: "China Tech Exploration",
      location: "Beijing & Shanghai",
      description: "100+ hours of workshops with visits to Baidu Apollo, Alibaba Cloud, JD.com, and DeepSeek labs.",
      highlights: ["Expert panels with AWS China", "BWJ & CubeVi sessions", "Cutting-edge AI labs"],
      icon: Globe,
      type: "International Trek"
    },
    {
      id: 2,
      title: "Singapore Innovation Trek",
      location: "Singapore",
      description: "Campus sessions at NUS & SUTD with networking opportunities at leading tech companies.",
      highlights: ["CXO networking at Gojek & Shell", "Hands-on robotics labs", "Graviton masterclasses"],
      icon: MapPin,
      type: "International Trek"
    },
    {
      id: 3,
      title: "HPAIR at Harvard University",
      location: "Boston, USA",
      description: "Harvard Project for Asia and International Relations conference with global AI and policy leaders.",
      highlights: ["World Bank alumni sessions", "Twitter India insights", "40+ countries networking"],
      icon: Plane,
      type: "International Conference"
    },
    {
      id: 4,
      title: "Bangalore Tech Trek",
      location: "Bangalore, India",
      description: "Domestic innovation hub visits with startup ecosystems and entrepreneurship workshops.",
      highlights: ["Leading startup visits", "AI workshops", "Local tech community networking"],
      icon: Lightbulb,
      type: "Domestic Trek"
    }
  ];

  const pastHighlights = [
    {
      title: "Neutron Success",
      description: "India's first techno-cultural fest attracted 1,700+ registrations with innovative drone shows",
      achievement: "₹10L+ Prize Pool"
    },
    {
      title: "Global Tech Exposure",
      description: "Students gained hands-on experience at leading tech companies across China, Singapore & USA",
      achievement: "100+ Workshop Hours"
    },
    {
      title: "Industry Recognition",
      description: "DAMRU became a landmark event with 45,000+ participants from 100+ colleges",
      achievement: "Regional Leadership"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white/95">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Real-World Exposure & 
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent"> Fest Experiences</span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-4xl mx-auto">
            Bridge theory and practice through our flagship festivals and international tech treks. Gain leadership experience, global exposure, and real-world insights that shape your future career.
          </p>
        </div>

        {/* Flagship Events */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center animate-fade-in-up delay-200">
            🎉 Techno-Cultural Fests
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, idx) => {
              const IconComponent = event.icon;
              return (
                <Card
                  key={event.id}
                  className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 animate-fade-in-up transform hover:-translate-y-2"
                  style={{ animationDelay: `${0.22 + idx * 0.15}s` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium border border-blue-700 z-10">
                    Flagship Event
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${event.gradient} mr-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
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
                    <div className="text-sm font-medium text-indigo-600 mb-2">{event.subtitle}</div>
                    <CardDescription className="text-gray-700">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    {/* Stats Display */}
                    <div className="flex justify-around bg-blue-50 rounded-lg p-4 mb-6">
                      {Object.entries(event.stats).map(([key, value], index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-blue-900">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

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

                    {event.ticketInfo && (
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-purple-900 mb-2">Ticket Options:</h4>
                        <div className="space-y-1">
                          {event.ticketInfo.map((ticket, index) => (
                            <div key={index} className="text-sm text-purple-700">{ticket}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button className={`w-full bg-gradient-to-r ${event.gradient} text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                      Learn More & Register
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Tech Treks */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center animate-fade-in-up delay-300">
            🌍 International & Domestic Tech Treks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techTreks.map((trek, idx) => {
              const IconComponent = trek.icon;
              return (
                <Card
                  key={trek.id}
                  className="group relative overflow-hidden bg-gradient-to-br from-white to-indigo-50 border border-indigo-200 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up transform hover:-translate-y-1"
                  style={{ animationDelay: `${0.32 + idx * 0.08}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-lg bg-indigo-100 mr-3">
                        <IconComponent className="h-5 w-5 text-indigo-700" />
                      </div>
                      <div className="text-xs text-indigo-800 bg-indigo-100 px-2 py-1 rounded">
                        {trek.type}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-blue-950 group-hover:text-indigo-700 transition-all duration-300">
                      {trek.title}
                    </CardTitle>
                    <div className="text-sm font-medium text-indigo-600 mb-2">📍 {trek.location}</div>
                    <CardDescription className="text-gray-700 text-sm">
                      {trek.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      {trek.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-700">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Past Highlights */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center animate-fade-in-up delay-400">
            🏆 Competition Outcomes & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pastHighlights.map((highlight, idx) => (
              <div key={idx} className="text-center group animate-fade-in-up" style={{ animationDelay: `${0.42 + idx * 0.09}s` }}>
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

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center animate-fade-in-up delay-500 border border-blue-200">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Join Us to Bridge Theory and Practice
          </h3>
          <p className="text-gray-700 font-medium mb-8 max-w-3xl mx-auto">
            Gain leadership experience, global exposure, and real-world insights that will shape your future career. 
            For registration details, schedules, and FAQs, explore our complete events calendar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              View Events Calendar
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className='border-blue-300 text-blue-700 hover:bg-blue-100 transition-all duration-300 hover:scale-105'>
              Subscribe to Updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;