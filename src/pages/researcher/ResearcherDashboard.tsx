import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Microscope, 
  Users, 
  FileText, 
  MessageSquare, 
  Star, 
  Plus,
  TrendingUp,
  LogOut
} from "lucide-react";

const ResearcherDashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("researcherProfile");
    if (stored) {
      setProfile(JSON.parse(stored));
    } else {
      navigate("/researcher/onboarding");
    }
  }, [navigate]);

  if (!profile) return null;

  const mockTrials = [
    {
      id: 1,
      title: "CAR-T Cell Therapy for Leukemia",
      phase: "Phase 2",
      status: "Active",
      participants: 45,
      target: 60,
    },
    {
      id: 2,
      title: "Novel Immunotherapy Combination Study",
      phase: "Phase 1",
      status: "Recruiting",
      participants: 12,
      target: 30,
    },
  ];

  const mockCollaborators = [
    {
      id: 1,
      name: "Dr. Emily Rodriguez",
      specialty: "Immunology",
      institution: "Harvard Medical School",
      sharedInterests: 3,
    },
    {
      id: 2,
      name: "Dr. James Kim",
      specialty: "Clinical Oncology",
      institution: "MD Anderson",
      sharedInterests: 2,
    },
  ];

  const mockForumQuestions = [
    {
      id: 1,
      question: "Looking for clinical trials for Stage 4 Lung Cancer",
      author: "Patient - Sarah M.",
      time: "2 hours ago",
      replies: 0,
    },
    {
      id: 2,
      question: "Questions about immunotherapy side effects",
      author: "Patient - John D.",
      time: "5 hours ago",
      replies: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Microscope className="w-8 h-8 text-accent" />
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
        <Card className="p-6 mb-8 bg-gradient-accent">
          <div className="flex items-start justify-between text-accent-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Research Profile</h2>
              <p className="text-accent-foreground/90 mb-1">{profile.specialty}</p>
              {profile.researchInterests && (
                <p className="text-sm text-accent-foreground/80">{profile.researchInterests}</p>
              )}
              {profile.availableForMeetings && (
                <Badge className="mt-3 bg-white/20">Available for Meetings</Badge>
              )}
            </div>
            <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Edit Profile
            </Button>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/researcher/trials")}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Active Trials</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/researcher/collaborators")}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-muted-foreground">Collaborators</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">7</p>
                <p className="text-sm text-muted-foreground">Forum Replies</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/researcher/favorites")}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
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
                <FileText className="w-6 h-6 text-primary" />
                Your Clinical Trials
              </h2>
              <Button variant="success" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Trial
              </Button>
            </div>

            {mockTrials.map((trial) => (
              <Card key={trial.id} className="p-6 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{trial.phase}</Badge>
                      <Badge className="bg-health-green">{trial.status}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{trial.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Participants</span>
                        <span className="font-semibold">{trial.participants} / {trial.target}</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all"
                          style={{ width: `${(trial.participants / trial.target) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="medical" size="sm" className="flex-1">
                    Manage Trial
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}

            {/* Forum Questions */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  Recent Forum Questions
                </h2>
                <Button variant="ghost" size="sm" onClick={() => navigate("/researcher/forums")}>
                  View All
                </Button>
              </div>
              {mockForumQuestions.map((question) => (
                <Card key={question.id} className="p-4 mb-3 hover:shadow-lg transition-all cursor-pointer">
                  <h4 className="font-semibold mb-2">{question.question}</h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{question.author}</span>
                    <div className="flex items-center gap-3">
                      <span>{question.time}</span>
                      <Badge variant="secondary">{question.replies} replies</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Potential Collaborators */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Suggested Collaborators
                </h3>
                <Button variant="ghost" size="sm" onClick={() => navigate("/researcher/collaborators")}>
                  View All
                </Button>
              </div>
              {mockCollaborators.map((collab) => (
                <Card key={collab.id} className="p-4 mb-3 hover:shadow-lg transition-all">
                  <h4 className="font-semibold mb-1">{collab.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{collab.specialty}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>{collab.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      {collab.sharedInterests} shared interests
                    </span>
                  </div>
                  <Button variant="medical" size="sm" className="w-full">
                    Connect
                  </Button>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/researcher/trials")}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Trial
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/researcher/forums")}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Answer Questions
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/researcher/collaborators")}>
                  <Users className="w-4 h-4 mr-2" />
                  Find Collaborators
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearcherDashboard;
