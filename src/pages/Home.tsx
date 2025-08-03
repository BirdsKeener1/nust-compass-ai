import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ParticleBackground } from "@/components/ParticleBackground";
import { FloatingElement } from "@/components/FloatingElement";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useNavigate } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Trophy, 
  MapPin, 
  Target,
  MessageCircle,
  Search,
  Building,
  UserCheck,
  Award,
  Globe
} from "lucide-react";
import nustCampusHero from "@/assets/nust-campus-hero.jpg";
import nustLogo from "@/assets/nust-logo.png";
import aiAgent from "@/assets/ai-agent.png";

const Home = () => {
  const navigate = useNavigate();

  const quickAccessCategories = [
    {
      title: "Admissions & Programs",
      description: "Explore our diverse academic programs and admission requirements",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      title: "Campus Facilities",
      description: "Discover our state-of-the-art facilities and resources",
      icon: Building,
      color: "bg-secondary"
    },
    {
      title: "Research Opportunities", 
      description: "Learn about cutting-edge research projects and collaborations",
      icon: Search,
      color: "bg-accent"
    },
    {
      title: "Student Services",
      description: "Access comprehensive support services for student success",
      icon: UserCheck,
      color: "bg-nust-gold"
    },
    {
      title: "Faculty Information",
      description: "Meet our distinguished faculty and their expertise",
      icon: Users,
      color: "bg-primary"
    },
    {
      title: "Alumni Network",
      description: "Connect with our global community of NUST graduates",
      icon: Globe,
      color: "bg-secondary"
    }
  ];

  const agentCapabilities = [
    {
      title: "Academic Information",
      description: "Programs, admissions, curriculum details",
      icon: BookOpen
    },
    {
      title: "Campus Life",
      description: "Facilities, societies, events",
      icon: Users
    },
    {
      title: "Research",
      description: "Projects, publications, collaborations",
      icon: Search
    },
    {
      title: "Career Services",
      description: "Placements, internships, alumni network",
      icon: Trophy
    }
  ];

  const stats = [
    { label: "Students", value: 25000, suffix: "+" },
    { label: "Faculty Members", value: 1200, suffix: "+" },
    { label: "Programs", value: 150, suffix: "+" },
    { label: "Research Projects", value: 500, suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={nustCampusHero} 
            alt="NUST Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/60 to-accent/40" />
        </div>
        
        <ParticleBackground />
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <FloatingElement delay={0}>
            <img 
              src={nustLogo} 
              alt="NUST Logo" 
              className="w-32 h-32 mx-auto mb-8 animate-scale-in"
            />
          </FloatingElement>
          
          <FloatingElement delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-nust-gold to-yellow-200 bg-clip-text text-transparent">
                NUST
              </span>{" "}
              University Agent
            </h1>
          </FloatingElement>
          
          <FloatingElement delay={0.4}>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up max-w-4xl mx-auto">
              Your AI-Powered Guide to National University of Sciences and Technology
            </p>
          </FloatingElement>
          
          <FloatingElement delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Button 
                size="xl" 
                variant="hero"
                onClick={() => navigate('/chat')}
                className="group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                Start Chatting with Agent
              </Button>
              <Button size="xl" variant="gold" className="group">
                <BookOpen className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                Explore Programs
              </Button>
            </div>
          </FloatingElement>
          
          <FloatingElement delay={0.8}>
            <div className="mt-12 animate-bounce-gentle">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
              </div>
              <p className="text-sm mt-2 opacity-70">Scroll to explore</p>
            </div>
          </FloatingElement>
        </div>
      </section>

      {/* University Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About NUST University
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 1991, the National University of Sciences and Technology (NUST) 
              is Pakistan's premier institution for science, technology, engineering, and business education. 
              With campuses across Pakistan, we're committed to excellence in education, research, and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="text-center hover:shadow-nust transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      duration={2000 + index * 200}
                    />
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To emerge as a comprehensive residential university producing leaders in diverse fields 
                  through excellence in teaching, research and technology transfer.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3">Excellence & Rankings</h3>
                <p className="text-muted-foreground">
                  Consistently ranked among top universities in Pakistan and recognized globally 
                  for our contributions to science, technology, and innovation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Campus Locations</h3>
                <p className="text-muted-foreground">
                  Multiple campuses across Pakistan including Islamabad (main), Karachi, and Risalpur, 
                  each offering specialized programs and world-class facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agent Introduction */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Meet Your{" "}
                  <span className="bg-gradient-nust bg-clip-text text-transparent">
                    AI University Guide
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our intelligent NUST Agent is here to help you navigate everything about the university. 
                  From admissions and academics to campus life and career opportunities, get instant, 
                  accurate answers to all your questions.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {agentCapabilities.map((capability, index) => (
                    <div key={capability.title} className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                        <capability.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{capability.title}</h4>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  variant="nust"
                  onClick={() => navigate('/chat')}
                  className="group"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                  Chat with NUST Agent
                </Button>
              </div>
              
              <div className="text-center">
                <FloatingElement>
                  <img 
                    src={aiAgent} 
                    alt="NUST AI Agent" 
                    className="w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
                  />
                </FloatingElement>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quick Access</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore popular categories and find the information you need quickly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickAccessCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/chat')}
              >
                <CardContent className="p-6">
                  <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:animate-bounce-gentle transition-all duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <ParticleBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Explore NUST?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your journey with our AI-powered university guide. 
              Get instant answers, explore programs, and discover everything NUST has to offer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="hero"
                onClick={() => navigate('/chat')}
                className="group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                Start Your NUST Journey
              </Button>
              <Button size="xl" variant="gold" className="group">
                <BookOpen className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                Browse Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;