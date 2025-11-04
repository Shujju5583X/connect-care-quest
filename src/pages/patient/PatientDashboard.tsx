import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Star, 
  FileText,
  MapPin,
  Calendar,
  TrendingUp,
  LogOut
} from "lucide-react";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("patientProfile");
    if (stored) {
      setProfile(JSON.parse(stored));
    } else {
      navigate("/patient/onboarding");
    }
  }, [navigate]);

  if (!profile) return null;

  const mockTrials = [
    {
      id: 1,
      title: "Immunotherapy for Advanced Glioblastoma",
      phase: "Phase 3",
      status: "Recruiting",
      location: "Multiple Centers, USA",
      match: 95,
    },
    {
      id: 2,
      title: "Novel Treatment Approach for Brain Cancer",
      phase: "Phase 2",
      status: "Recruiting",
      location: "Johns Hopkins, Baltimore",
      match: 88,
    },
  ];

  const mockExperts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Neuro-Oncology",
      institution: "Mayo Clinic",
      publications: 127,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Glioma Research",
      institution: "Stanford Medicine",
      publications: 94,
    },
  ];

  const mockPublications = [
    {
      id: 1,
      title: "Advances in Glioblastoma Treatment: A 2024 Review",
      journal: "Nature Medicine",
      date: "2024-03-15",
    },
    {
      id: 2,
      title: "Immunotherapy Breakthroughs in Brain Cancer",
      journal: "NEJM",
      date: "2024-02-28",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">CuraLink</h1>
                {profile.name && <p className="text-sm text-muted-foreground">Welcome back, {profile.name}</p>}
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <LogOut className="w-4 h-4 mr-2" />
              Exit
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Summary */}
        <Card className="p-6 mb-8 bg-gradient-primary">
          <div className="flex items-start justify-between text-primary-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Health Profile</h2>
              <p className="text-primary-foreground/90 mb-3">{profile.condition}</p>
              {profile.location && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </div>
              )}
            </div>
            <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Edit Profile
            </Button>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/patient/trials")}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Matched Trials</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/patient/experts")}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Health Experts</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/patient/publications")}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">New Publications</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/patient/favorites")}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Saved Items</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Clinical Trials */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Recommended Clinical Trials
              </h2>
              <Button variant="ghost" size="sm" onClick={() => navigate("/patient/trials")}>
                View All
              </Button>
            </div>

            {mockTrials.map((trial) => (
              <Card key={trial.id} className="p-6 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{trial.phase}</Badge>
                      <Badge className="bg-health-green">{trial.status}</Badge>
                      <div className="ml-auto flex items-center gap-1 text-sm font-semibold text-primary">
                        <TrendingUp className="w-4 h-4" />
                        {trial.match}% Match
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{trial.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {trial.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="medical" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Health Experts */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Top Experts
                </h3>
                <Button variant="ghost" size="sm" onClick={() => navigate("/patient/experts")}>
                  View All
                </Button>
              </div>
              {mockExperts.map((expert) => (
                <Card key={expert.id} className="p-4 mb-3 hover:shadow-lg transition-all">
                  <h4 className="font-semibold mb-1">{expert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{expert.specialty}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{expert.institution}</span>
                    <span>{expert.publications} publications</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Recent Publications */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Recent Research
                </h3>
                <Button variant="ghost" size="sm" onClick={() => navigate("/patient/publications")}>
                  View All
                </Button>
              </div>
              {mockPublications.map((pub) => (
                <Card key={pub.id} className="p-4 mb-3 hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-sm mb-2">{pub.title}</h4>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{pub.journal}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(pub.date).toLocaleDateString()}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Forums */}
            <Card className="p-6 bg-gradient-accent hover:shadow-xl transition-all cursor-pointer" onClick={() => navigate("/patient/forums")}>
              <div className="flex items-center gap-3 text-accent-foreground">
                <MessageSquare className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold">Community Forums</h3>
                  <p className="text-sm text-accent-foreground/80">Ask questions, get expert answers</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
