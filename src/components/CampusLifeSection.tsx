import { Home, UtensilsCrossed, Dumbbell, MapPin, Wifi, Car } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CampusLifeSection = () => {
  const accommodations = [
    {
      id: 1,
      name: "Hostel Block R1",
      type: "Boys Hostel",
      capacity: "150 Students",
      features: ["AC Rooms", "Wi-Fi", "Study Areas", "Common Room"],
      icon: Home
    },
    {
      id: 2,
      name: "Hostel Block R2", 
      type: "Girls Hostel",
      capacity: "120 Students",
      features: ["AC Rooms", "24/7 Security", "Laundry", "Recreation"],
      icon: Home
    },
    {
      id: 3,
      name: "Hostel Block R3",
      type: "Mixed Accommodation",
      capacity: "200 Students",
      features: ["Single/Double Rooms", "Cafeteria", "Gym Access", "Parking"],
      icon: Home
    }
  ];

  const facilities = [
    {
      icon: UtensilsCrossed,
      title: "Central Mess",
      description: "Nutritious meals with diverse menu options",
      details: ["Multi-cuisine", "Dietary preferences", "Quality assured"]
    },
    {
      icon: Dumbbell,
      title: "Sports Complex",
      description: "Modern sports facilities and fitness center",
      details: ["Football field", "Basketball court", "Tennis lawn", "Cricket nets"]
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Campus-wide connectivity for all students",
      details: ["Fiber optic", "24/7 connectivity", "Study areas"]
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Shuttle services and parking facilities",
      details: ["Campus shuttle", "City connectivity", "Bike parking"]
    }
  ];

  return (
    <section id="campus" className="py-20 bg-white/95">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up delay-100 relative">
          <div className="absolute inset-0 -z-10 mx-auto w-3/4 h-full bg-blue-50/50 blur-3xl rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
            Campus Life
          </h2>
          <p className="text-gray-800 text-lg max-w-3xl mx-auto font-medium">
            Experience world-class facilities, comfortable accommodation, and a vibrant community that makes Newton School feel like home.
          </p>
        </div>

        {/* Accommodation Section */}
        <div id="accommodation" className="mb-16 relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center animate-fade-in-up delay-200">
            Accommodation & Housing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((hostel, idx) => {
              const IconComponent = hostel.icon;
              return (
                <Card
                  key={hostel.id}
                  className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${0.25 + idx * 0.09}s` }}
                >
                  <div className="relative z-10">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-lg bg-blue-100/80">
                          <IconComponent className="h-6 w-6 text-blue-700" />
                        </div>
                        <span className="text-sm text-blue-700 bg-blue-50 px-3 py-1 rounded-full font-medium">
                          {hostel.capacity}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-blue-950">{hostel.name}</CardTitle>
                      <CardDescription className="text-blue-700 font-medium">
                        {hostel.type}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-blue-900">Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {hostel.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-700">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-6 border-blue-300 text-white group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        View Floor Plans
                      </Button>
                    </CardContent>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Facilities Grid */}
        <div id="facilities" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {facilities.map((facility, idx) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={idx}
                className="text-center group animate-fade-in-up bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                style={{ animationDelay: `${0.35 + idx * 0.09}s` }}
              >
                <div className="relative z-10">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-950 mb-3">{facility.title}</h3>
                  <p className="text-gray-700 mb-4">{facility.description}</p>
                  <div className="space-y-1">
                    {facility.details.map((detail, i) => (
                      <div key={i} className="text-sm text-gray-700 flex items-center justify-center">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Virtual Tour CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 md:p-12 text-center animate-fade-in-up delay-400 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-100/20 opacity-50 -z-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Experience Our Campus
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Take a virtual tour of our modern facilities or schedule an in-person visit to see what makes our campus special.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <MapPin className="mr-2 h-5 w-5" />
                Virtual Campus Tour
              </Button>
              <Button variant="outline" size="lg" className='border-blue-300 text-white hover:bg-blue-50 transition-all duration-300 hover:scale-105'>
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;