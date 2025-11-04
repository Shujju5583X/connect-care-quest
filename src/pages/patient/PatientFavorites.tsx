import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ArrowLeft, Heart, Users, BookOpen, Trash2 } from "lucide-react";

const PatientFavorites = () => {
  const navigate = useNavigate();

  const mockFavoriteTrials = [
    {
      id: 1,
      title: "Immunotherapy for Advanced Glioblastoma",
      phase: "Phase 3",
      status: "Recruiting",
      match: 95,
    },
  ];

  const mockFavoriteExperts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Neuro-Oncology",
      institution: "Mayo Clinic",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Glioma Research",
      institution: "Stanford Medicine",
    },
  ];

  const mockFavoritePublications = [
    {
      id: 1,
      title: "Advances in Glioblastoma Treatment: A 2024 Review",
      journal: "Nature Medicine",
      date: "2024-03-15",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/patient/dashboard")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-accent" />
              <div>
                <h1 className="text-2xl font-bold">My Favorites</h1>
                <p className="text-sm text-muted-foreground">Saved items for quick access</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Tabs defaultValue="trials" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="trials">
              <Heart className="w-4 h-4 mr-2" />
              Trials
            </TabsTrigger>
            <TabsTrigger value="experts">
              <Users className="w-4 h-4 mr-2" />
              Experts
            </TabsTrigger>
            <TabsTrigger value="publications">
              <BookOpen className="w-4 h-4 mr-2" />
              Publications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trials" className="space-y-4">
            {mockFavoriteTrials.map((trial) => (
              <Card key={trial.id} className="p-6 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{trial.phase}</Badge>
                      <Badge className="bg-health-green">{trial.status}</Badge>
                      <span className="ml-auto text-sm font-semibold text-primary">
                        {trial.match}% Match
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{trial.title}</h3>
                    <div className="flex gap-2">
                      <Button variant="medical" size="sm">
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="experts" className="space-y-4">
            {mockFavoriteExperts.map((expert) => (
              <Card key={expert.id} className="p-6 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{expert.name}</h3>
                      <p className="text-sm text-muted-foreground">{expert.specialty}</p>
                      <p className="text-sm text-muted-foreground">{expert.institution}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="medical" size="sm">
                      View Profile
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="publications" className="space-y-4">
            {mockFavoritePublications.map((pub) => (
              <Card key={pub.id} className="p-6 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{pub.journal}</span>
                      <span>{new Date(pub.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="medical" size="sm">
                        Read Paper
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Empty State */}
        <Card className="p-12 text-center mt-8">
          <Star className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Start Building Your Collection</h3>
          <p className="text-muted-foreground mb-6">
            Save clinical trials, experts, and publications you're interested in for easy access later
          </p>
          <Button variant="medical" onClick={() => navigate("/patient/dashboard")}>
            Explore Dashboard
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PatientFavorites;
