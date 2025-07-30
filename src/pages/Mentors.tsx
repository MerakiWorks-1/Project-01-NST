import Navigation from "@/components/Navigation";
import Dummy from "@/components/Dummy";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, Users, MessageCircle } from "lucide-react";


const Mentors = () => {
  return (
    <div className="min-h-screen bg-white/95">
      {/* <Navigation /> */}
      <Dummy />

      {/* Hero Section */}
      <section className="pt-40 pb-10">
        <div className="container mx-auto px-6 pb-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up delay-100">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              🌱 Junior Mentorship Culture at NST
            </h1>
            <p className="text-xl text-gray-800 font-medium mb-8">
              “Culture does not make people, people make the culture.”
              <br />
              At NST, we believe that the transition into college life should
              feel less like a leap and more like a warm welcome. That’s why
              we’ve launched the Junior Mentorship Culture — a student-led
              initiative designed to make our newest members feel right at home.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Passionate Mentors", value: "29" },
                { label: "Batches Connected", value: "3+" },
                { label: "Avg. Session/Month", value: "100+" },
                { label: "Success Stories", value: "Countless" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.25 + idx * 0.07}s` }}
                >
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

      {/* What Is the Junior Mentorship Culture */}
      <section className="py-2">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up delay-100">
            <h2 className="text-4xl font-bold mb-6 text-blue-900">
              🤝 What Is the Junior Mentorship Culture?
            </h2>
            <p className="text-gray-700 font-medium max-w-2xl mx-auto">
              The Junior Mentorship Culture is a carefully curated support
              system where second and third-year students volunteer as mentors
              to guide the incoming batch of freshers. These mentors act as the
              first point of contact — friends, guides, and motivators — helping
              juniors adjust, grow, and thrive in their new academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Aarav Sharma",
                role: "Web Dev & Academics",
                desc: "Loves React, hackathons, and helping juniors ace their first semester.",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Priya Mehta",
                role: "AI/ML & Campus Life",
                desc: "Passionate about AI, always up for a coffee chat and career advice.",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Rohan Gupta",
                role: "Robotics & Motivation",
                desc: "Robotics enthusiast, motivator, and your go-to for project ideas.",
                img: "https://randomuser.me/api/portraits/men/65.jpg",
              },
            ].map((mentor, idx) => (
              <Card
                key={mentor.name}
                className="overflow-hidden border border-blue-200 bg-white hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.13 + idx * 0.09}s` }}
              >
                <CardHeader className="flex flex-col items-center pt-8">
                  <img
                    src={mentor.img}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100 shadow"
                  />
                  <h4 className="text-lg font-bold text-blue-900">
                    {mentor.name}
                  </h4>
                  <span className="text-blue-700 text-sm mb-2">
                    {mentor.role}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center text-sm">
                    {mentor.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic & Personal Guidance",
                desc: "Mentors provide both academic and personal guidance, helping juniors navigate campus life, resources, and opportunities.",
                icon: <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
              },
              {
                title: "Emotional Support",
                desc: "Mentors offer a listening ear and foster a safe, encouraging space for growth and well-being.",
                icon: <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />,
              },
              {
                title: "Culture of Hype & Care",
                desc: "Mentors are not just here to help — they’re here to hype you up and make you feel at home!",
                icon: (
                  <Badge className="bg-blue-100 text-blue-800 mx-auto mb-3">
                    Vibe
                  </Badge>
                ),
              },
            ].map((item, idx) => (
              <Card
                key={item.title}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.18 + idx * 0.09}s` }}
              >
                <CardHeader className="text-center pt-8">
                  <div className="relative mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-950">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm text-center pt-2">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Culture Matters */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-900 animate-fade-in-up delay-100">
            💬 Why This Culture Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Smooth Transition",
                description:
                  "Starting college can be overwhelming — but with someone walking beside you, the path feels a lot less lonely. Our mentorship culture eases the transition into college life.",
              },
              {
                step: "02",
                title: "Bonding & Empathy",
                description:
                  "We build long-lasting bonds across batches and promote a culture of empathy, collaboration, and open communication.",
              },
              {
                step: "03",
                title: "Empowerment & Community",
                description:
                  "Juniors gain confidence, clarity, and a strong support network that genuinely cares.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
              >
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

      {/* What Juniors Can Expect */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up delay-100">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              🪄 What Juniors Can Expect
            </h2>
            <p className="text-gray-700 font-medium max-w-2xl mx-auto">
              Regular one-on-one catch-ups, group bonding sessions, academic and
              career insight sharing, personal growth challenges, and an
              approachable support network that genuinely cares.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "1:1 Catch-ups",
                desc: "Personalized guidance and regular check-ins.",
                icon: (
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                ),
              },
              {
                label: "Group Mixers",
                desc: "Fun bonding sessions and group activities.",
                icon: <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />,
              },
              {
                label: "Growth Challenges",
                desc: "Academic, career, and personal growth support.",
                icon: <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />,
              },
              {
                label: "Support Network",
                desc: "A safe, approachable, and caring community.",
                icon: (
                  <Badge className="bg-blue-100 text-blue-800 mx-auto mb-3">
                    Care
                  </Badge>
                ),
              },
            ].map((item, idx) => (
              <Card
                key={item.label}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.18 + idx * 0.09}s` }}
              >
                <CardHeader className="text-center pt-8">
                  <div className="relative mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-950">
                    {item.label}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm text-center pt-2">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The NST Promise */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up delay-100">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              🚀 The NST Promise
            </h2>
            <p className="text-xl text-gray-800 font-medium mb-8">
              This isn’t just a program — it’s a culture. A tradition we hope to
              build stronger with each new batch. A culture of connection,
              support, and shared success.
              <br />
              <br />
              We’re excited to see the Junior Mentorship Culture grow and evolve
              as more students step up to give back, support others, and lead
              with heart.
            </p>
            <div className="text-2xl font-semibold text-blue-700 mb-4">
              Let’s build something beautiful — together.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentors;
