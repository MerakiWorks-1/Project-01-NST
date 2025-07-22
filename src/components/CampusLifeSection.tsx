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
    <section id="campus" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Campus
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Life</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience world-class facilities, comfortable accommodation, and a vibrant community that makes Newton School feel like home.
          </p>
        </div>

        {/* Accommodation Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Accommodation & Housing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((hostel) => {
              const IconComponent = hostel.icon;
              return (
                <Card key={hostel.id} className="bg-card border-border hover:shadow-card transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {hostel.capacity}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-foreground">{hostel.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">
                      {hostel.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {hostel.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      View Floor Plans
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{facility.title}</h3>
                <p className="text-muted-foreground mb-4">{facility.description}</p>
                <div className="space-y-1">
                  {facility.details.map((detail, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Virtual Tour CTA */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Experience Our Campus
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take a virtual tour of our modern facilities or schedule an in-person visit to see what makes our campus special.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <MapPin className="mr-2 h-5 w-5" />
              Virtual Campus Tour
            </Button>
            <Button variant="outline" size="lg" className='transition-all duration-300'>
              Schedule Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;