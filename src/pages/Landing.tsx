import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Microscope, ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-12 h-12 text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              CuraLink
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connecting patients and researchers to discover clinical trials, health experts, and groundbreaking medical research
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Patient Card */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">I'm a Patient or Caregiver</h2>
                <p className="text-muted-foreground mb-6">
                  Find clinical trials, connect with health experts, and discover relevant medical research for your condition
                </p>
              </div>
              <Button
                variant="hero"
                size="lg"
                className="w-full group"
                onClick={() => navigate("/patient/onboarding")}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Researcher Card */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent cursor-pointer group">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Microscope className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">I'm a Researcher</h2>
                <p className="text-muted-foreground mb-6">
                  Manage clinical trials, find collaborators, and engage with patients seeking medical solutions
                </p>
              </div>
              <Button
                variant="success"
                size="lg"
                className="w-full group"
                onClick={() => navigate("/researcher/onboarding")}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="text-center p-6 rounded-lg bg-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Clinical Trials</h3>
            <p className="text-sm text-muted-foreground">Discover relevant trials matched to your needs</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Expert Network</h3>
            <p className="text-sm text-muted-foreground">Connect with leading health professionals</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Microscope className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Latest Research</h3>
            <p className="text-sm text-muted-foreground">Access cutting-edge medical publications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
