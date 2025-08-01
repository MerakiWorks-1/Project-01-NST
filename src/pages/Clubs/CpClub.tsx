import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Code, Trophy, Users, Target, Star, Award, Zap, ArrowRight, PlayCircle, Youtube, Brain, Rocket, Globe, BookOpen, TrendingUp, Medal, Flame, Sparkles, Crown, Swords, Shield, MessageCircle } from "lucide-react"
import Dummy from "@/components/Dummy";
import Footer from "@/components/Footer";

export default function CpClub() {

  const communityMembers = [
    { 
      icon: Crown, 
      title: "Candidate Master", 
      value: "1",
      colors: {
        border: "border-red-200",
        bg: "bg-gradient-to-br from-red-50 to-red-100/60",
        iconBg: "bg-gradient-to-r from-red-500 to-red-600",
        iconText: "text-white",
        titleText: "text-red-900",
        valueText: "text-red-700",
        hoverBorder: "hover:border-red-400",
        glow: "hover:shadow-red-200"
      }
    },
    { 
      icon: Medal, 
      title: "Expert", 
      value: "2",
      colors: {
        border: "border-purple-200",
        bg: "bg-gradient-to-br from-purple-50 to-purple-100/60",
        iconBg: "bg-gradient-to-r from-purple-500 to-purple-600",
        iconText: "text-white",
        titleText: "text-purple-900",
        valueText: "text-purple-700",
        hoverBorder: "hover:border-purple-400",
        glow: "hover:shadow-purple-200"
      }
    },
    { 
      icon: Flame, 
      title: "Specialists", 
      value: "2",
      colors: {
        border: "border-cyan-200",
        bg: "bg-gradient-to-br from-cyan-50 to-cyan-100/60",
        iconBg: "bg-gradient-to-r from-cyan-500 to-cyan-600",
        iconText: "text-white",
        titleText: "text-cyan-900",
        valueText: "text-cyan-700",
        hoverBorder: "hover:border-cyan-400",
        glow: "hover:shadow-cyan-200"
      }
    },
    { 
      icon: Sparkles, 
      title: "Pupils", 
      value: "6",
      colors: {
        border: "border-green-200",
        bg: "bg-gradient-to-br from-green-50 to-green-100/60",
        iconBg: "bg-gradient-to-r from-green-500 to-green-600",
        iconText: "text-white",
        titleText: "text-green-900",
        valueText: "text-green-700",
        hoverBorder: "hover:border-green-400",
        glow: "hover:shadow-green-200"
      }
    },
  ];

  const clubBenefits = [
    {
      icon: Brain,
      title: "Problem-Solving Mastery",
      description: "Develop algorithmic thinking and enhance your logical reasoning skills through consistent practice",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      hoverBorder: "hover:border-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Skill Enhancement",
      description: "Master data structures, algorithms, and competitive programming techniques used in top tech companies",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      hoverBorder: "hover:border-green-400"
    },
    {
      icon: Swords,
      title: "Competitive Edge",
      description: "Regular contests on CodeChef, Codeforces, and LeetCode to sharpen your competitive programming skills",
      gradient: "from-red-500 to-rose-600",
      bgGradient: "from-red-50 to-rose-50",
      borderColor: "border-red-200",
      hoverBorder: "hover:border-red-400"
    },
    {
      icon: Shield,
      title: "ICPC Preparation",
      description: "Structured training program designed to prepare teams for ICPC and other international competitions",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      hoverBorder: "hover:border-purple-400"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Opportunity to represent NST in national and international programming competitions",
      gradient: "from-cyan-500 to-teal-600",
      bgGradient: "from-cyan-50 to-teal-50",
      borderColor: "border-cyan-200",
      hoverBorder: "hover:border-cyan-400"
    },
    {
      icon: Rocket,
      title: "Career Advancement",
      description: "Strong competitive programming background opens doors to top tech companies and prestigious internships",
      gradient: "from-orange-500 to-yellow-600",
      bgGradient: "from-orange-50 to-yellow-50",
      borderColor: "border-orange-200",
      hoverBorder: "hover:border-orange-400"
    }
  ];

  const spotlightVideos = [
    {
      id: 1,
      title: "From Pupil to Specialist",
      description: "An inspiring journey to the Specialist rank on Codeforces.",
      embedId: "fylywqd_gGQ"
    },
    {
      id: 2,
      title: "Live Contest Walkthrough",
      description: "See how our members tackle problems under pressure in real-time.",
      embedId: "68o5Qe6E92k"
    },
    {
      id: 3,
      title: "Advanced Problem Solving",
      description: "A deep dive into the strategies used to solve complex challenges.",
      embedId: "b4wztf5q8Os"
    }
  ];

  return (
    <div className="min-h-screen bg-white/95">
      <Dummy />
      <div className="min-h-screen">

        {/* Hero Section - Enhanced */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0" />
          <div className="absolute inset-0" />
          <div className="container mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full shadow-lg border border-blue-200 animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: "0.1s" }}>
              <Trophy className="w-5 h-5 text-yellow-600 animate-pulse" />
              <span className="text-blue-800 font-semibold">Aiming for ICPC World Finals Gold</span>
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-transparent text-black mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.18s" }}>
              OOPS - Organization of Problem Solvers
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-700 mb-12 max-w-4xl mx-auto font-medium animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.25s" }}>
              The Official Competitive Programming Club of Newton School of Technology
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { value: "50+", label: "Active Coders", icon: Code, color: "from-blue-500 to-blue-600" },
                { value: "250+", label: "Total Students", icon: Users, color: "from-green-500 to-green-600" },
                { value: "11", label: "Rated Members", icon: Star, color: "from-yellow-500 to-yellow-600" },
                { value: "4+", label: "Platforms", icon: Globe, color: "from-purple-500 to-purple-600" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 animate-fade-in-up transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
                  style={{ animationDelay: `${0.35 + idx * 0.07}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">{stat.value}</div>
                  <div className="text-blue-800 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

    {/* Club POC Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                🤝 Club Point of Contact
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto font-medium animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.18s" }}>
                Connect with our club leader for queries, guidance, and opportunities
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 hover:border-blue-400 shadow-xl transition-all duration-500 hover:-translate-y-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-8 border-r-8 border-transparent group-hover:border-t-blue-200 group-hover:border-r-blue-200 transition-all duration-300" />
                  
                  <CardContent className="p-8 text-center relative z-10">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300">
                        <img
                          src="https://media.licdn.com/dms/image/v2/D4D03AQHYnjLR5FUbhw/profile-displayphoto-crop_800_800/B4DZeyo43iG8AI-/0/1751048754518?e=1756944000&v=beta&t=-WOyrODketSY_tAXPA_M13eEPBLfTlgjdXN_4HaQ92g"
                          alt="Karan"
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=Karan+Chhillar&background=3b82f6&color=fff&size=200`;
                          }}
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Name & Title */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-blue-950 mb-2 group-hover:text-blue-900 transition-colors">
                        Karan Chhillar
                      </h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full">
                        <Star className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-800 font-semibold text-sm">Club President</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mb-8">
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                        Passionate competitive programmer and leader driving OOPS towards ICPC excellence. 
                        Experienced in algorithmic problem-solving and mentoring aspiring programmers to achieve their goals.
                      </p>
                    </div>

                    {/* LinkedIn Button */}
                    <div className="space-y-3">
                      <a
                        href="https://www.linkedin.com/in/karan-chhillar-0a1618309/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          Connect on LinkedIn
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </a>
                      
                      <div className="text-sm text-gray-600">
                        <span className="inline-flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          Available for mentorship & queries
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Entrance Process - Enhanced */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent text-black mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                🚪 Join Our Elite Community
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto font-medium animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.18s" }}>
                Start your competitive programming journey with us through our welcoming entrance process
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-400 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-green-900 group-hover:text-green-800 transition-colors">
                        Initial Joining
                      </CardTitle>
                      <div className="text-green-600 font-medium">Step 1</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <p className="text-green-800 font-semibold text-lg">
                        <span className="text-green-600">Open to All!</span> No entrance test required
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <p className="text-green-700 leading-relaxed">
                        All students are welcome to join and start their competitive programming journey with us
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <p className="text-green-700 leading-relaxed">
                        Immediate access to club resources and community support
                      </p>
                    </div>
                  </div>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 w-0 h-2 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-500" />
              </Card>
              
              <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-blue-900 group-hover:text-blue-800 transition-colors">
                        Active Membership
                      </CardTitle>
                      <div className="text-blue-600 font-medium">Step 2</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="bg-blue-100/50 rounded-xl p-4 group-hover:bg-blue-100/70 transition-colors duration-300">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                        <p className="text-blue-800 font-semibold">
                          Performance-Based Membership
                        </p>
                      </div>
                      <p className="text-blue-700 text-sm pl-5">
                        Missing 3 consecutive CodeChef contests results in removal
                      </p>
                    </div>
                    
                    <div className="bg-indigo-100/50 rounded-xl p-4 group-hover:bg-indigo-100/70 transition-colors duration-300">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
                        <p className="text-indigo-800 font-semibold">
                          Easy Rejoin Process
                        </p>
                      </div>
                      <p className="text-indigo-700 text-sm pl-5">
                        Participate in 2 consecutive CodeChef contests to rejoin
                      </p>
                    </div>
                  </div>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 w-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500" />
              </Card>
            </div>
          </div>
        </section>

        {/* Our Community - Enhanced */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0" />
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent text-black mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                👑 Our Elite Community
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto font-medium animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.18s" }}>
                A diverse and skilled community focused on excellence, peer learning, and competitive programming mastery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {communityMembers.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className={`group text-center bg-white/80 ${item.colors.border} ${item.colors.hoverBorder} hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fade-in-up relative overflow-hidden`}
                    style={{ animationDelay: `${0.25 + idx * 0.1}s` }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                      <div className={`absolute inset-0 ${item.colors.glow} shadow-2xl opacity-50`} />
                    </div>
                    
                    <CardHeader className="relative z-10">
                      <div className={`mx-auto w-16 h-16 ${item.colors.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                        <Icon className={`w-8 h-8 ${item.colors.iconText}`} />
                      </div>
                      <CardTitle className={`${item.colors.titleText} font-bold text-lg group-hover:scale-105 transition-transform duration-300`}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <div className={`text-4xl font-black ${item.colors.valueText} group-hover:scale-110 transition-transform duration-300 mb-2`}>
                        {item.value}
                      </div>
                      <div className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Elite Members
                      </div>
                    </CardContent>
                    
                    <div className="absolute bottom-0 left-0 w-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500" />
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Join OOPS - New Benefits Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0" />
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent text-black mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                🚀 Why Join OOPS?
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto font-medium animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.18s" }}>
                Unlock your potential and transform your programming journey with exclusive benefits
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {clubBenefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={benefit.title}
                    className={`group relative overflow-hidden bg-white/80 border-2 ${benefit.borderColor} ${benefit.hoverBorder} hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                    style={{ animationDelay: `${0.25 + idx * 0.1}s` }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-5`} />
                    </div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                          {benefit.title}
                        </h3>
                        
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                    
                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${benefit.gradient} group-hover:w-full transition-all duration-500`} />
                    <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-8 border-r-8 border-transparent group-hover:border-t-blue-200 group-hover:border-r-blue-200 transition-all duration-300" />
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Member Spotlights - Enhanced */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 " />
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent text-black mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                🌟 Member Spotlights
              </h2>
              <p className="text-xl text-purple-700 max-w-3xl mx-auto font-medium animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.18s" }}>
                Celebrating the achievements and dedication of our community members through their inspiring journeys
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {spotlightVideos.map((video, idx) => (
                <div key={video.id} className="animate-fade-in-up" style={{ animationDelay: `${0.25 + idx * 0.1}s` }}>
                  <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 hover:border-purple-400 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-8 border-r-8 border-transparent group-hover:border-t-purple-200 group-hover:border-r-purple-200 transition-all duration-300" />
                    
                    <CardHeader className="p-8 relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <PlayCircle className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-purple-100 text-purple-800 group-hover:bg-purple-200 transition-colors duration-300">
                          Success Story
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-2xl font-bold text-purple-950 group-hover:text-purple-900 transition-colors duration-300 mb-3">
                        {video.title}
                      </CardTitle>
                      
                      <CardDescription className="text-purple-700 leading-relaxed group-hover:text-purple-800 transition-colors duration-300">
                        {video.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="px-8 pb-8 relative z-10">
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white group-hover:shadow-3xl transition-shadow duration-300">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${video.embedId}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </CardContent>
                    
                    <div className="absolute bottom-0 left-0 w-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contest Schedule - Enhanced */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0" />
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent text-black mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                ⚔️ Contest Arena
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto font-medium animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.18s" }}>
                Rigorous and engaging contest schedule across multiple platforms to sharpen your competitive edge
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {[
                { 
                  icon: Calendar, 
                  title: "Weekly Mandatory", 
                  desc: "CodeChef Contests", 
                  time: "Every Wednesday, 8:00 PM", 
                  timeIcon: Clock,
                  gradient: "from-orange-500 to-red-500",
                  bgGradient: "from-orange-50 to-red-50",
                  borderColor: "border-orange-200",
                  hoverBorder: "hover:border-orange-400"
                },
                { 
                  icon: Calendar, 
                  title: "Sunday Morning", 
                  desc: "LeetCode Contests", 
                  time: "Every Sunday, 8:00 AM", 
                  timeIcon: Clock,
                  gradient: "from-green-500 to-emerald-500",
                  bgGradient: "from-green-50 to-emerald-50",
                  borderColor: "border-green-200",
                  hoverBorder: "hover:border-green-400"
                },
                { 
                  icon: Calendar, 
                  title: "Official Schedule", 
                  desc: "Codeforces Contests", 
                  time: "Usually around 8:05 PM", 
                  timeIcon: Clock,
                  gradient: "from-blue-500 to-indigo-500",
                  bgGradient: "from-blue-50 to-indigo-50",
                  borderColor: "border-blue-200",
                  hoverBorder: "hover:border-blue-400"
                },
                { 
                  icon: Trophy, 
                  title: "Internal Contests", 
                  desc: "College Competitions", 
                  time: "Tech Fest, Mock Rounds, Ladder Challenges", 
                  timeIcon: null,
                  gradient: "from-purple-500 to-violet-500",
                  bgGradient: "from-purple-50 to-violet-50",
                  borderColor: "border-purple-200",
                  hoverBorder: "hover:border-purple-400"
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                const TimeIcon = item.timeIcon;
                return (
                  <Card
                    key={item.title}
                    className={`group relative overflow-hidden bg-gradient-to-br ${item.bgGradient} border-2 ${item.borderColor} ${item.hoverBorder} hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                    style={{ animationDelay: `${0.25 + idx * 0.1}s` }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5`} />
                    </div>
                    
                    <CardHeader className="relative z-10">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-gray-700 group-hover:text-gray-800 transition-colors">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-blue-600 transition-all duration-300" />
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <div className="flex items-center gap-3 text-gray-700 group-hover:text-gray-800 transition-colors">
                        {TimeIcon && <TimeIcon className="w-5 h-5 text-blue-600" />}
                        <span className="font-medium">{item.time}</span>
                      </div>
                    </CardContent>
                    
                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500`} />
                  </Card>
                )
              })}
            </div>
            
            {/* Special Event Card - Enhanced */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
              <h3 className="text-3xl font-bold text-blue-900 mb-8">🎯 Special Events & Announcements</h3>
              <div className="max-w-3xl mx-auto">
                <Card className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl border-none transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                  
                  <CardContent className="p-10 relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Badge className="bg-white/20 text-white backdrop-blur-sm border border-white/30">
                        <Sparkles className="w-4 h-4 mr-1" />
                        New Event
                      </Badge>
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900">
                        <Flame className="w-4 h-4 mr-1" />
                        Hot
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-4xl font-black mb-4 group-hover:scale-105 transition-transform duration-300">
                      Monthly Long Challenge
                    </CardTitle>
                    
                    <CardDescription className="text-blue-100 text-lg mb-6 leading-relaxed">
                      Conducted by <span className="font-bold text-white">MerakiCode</span> | 
                      Organized by <span className="font-bold text-white">Mayank Gupta</span>
                    </CardDescription>
                    
                    <div className="flex items-center justify-center gap-3 text-blue-100 mb-8">
                      <Clock className="w-5 h-5" />
                      <span className="text-lg">Launching from <span className="font-bold text-white">August 20th</span></span>
                    </div>
                    
                    <a href="https://www.hackerrank.com/contests/long-challenge-merakicode/challenges" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-white text-blue-700 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg">
                        <Rocket className="mr-3 w-5 h-5" />
                        Register on HackerRank 
                        <ArrowRight className="ml-3 w-5 h-5 hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Our Vision
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-xl text-gray-800 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
                The ultimate vision of the CP Club is to make India win its first{" "}
                <strong className="text-blue-700">ICPC World Finals Gold Medal</strong>, and we aspire for{" "}
                <strong>Newton School of Technology</strong> to lead that historic moment.
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Trophy, title: "Build Strong ICPC Team", desc: "Develop competitive teams ready for international competitions" },
                  { icon: Target, title: "International Problem-Solving", desc: "Promote world-class algorithmic thinking and coding skills" },
                  { icon: Star, title: "Global CP Presence", desc: "Elevate India's standing in global competitive programming" },
                ].map((item, idx) => {
                   const Icon = item.icon;
                   return (
                    <div
                      key={item.title}
                      className="bg-white/80 rounded-lg p-6 border border-blue-100 animate-fade-in-up transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300"
                      style={{ animationDelay: `${0.22 + idx * 0.09}s` }}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                      <h3 className="font-semibold text-blue-950 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                       </div>
                   )
                })}
                    </div>
            </div>
          </div>
        </section>

        {/* Add CSS for enhanced animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
          
          .hover\\:shadow-3xl:hover {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
        `}</style>

      </div>
      <Footer />
    </div>
  )
}
