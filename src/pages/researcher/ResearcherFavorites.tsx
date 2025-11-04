import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ArrowLeft, FileText, Users, BookOpen, Trash2 } from "lucide-react";

const ResearcherFavorites = () => {
  const navigate = useNavigate();

  const mockFavoriteTrials = [
    {
      id: 1,
      title: "Novel Approach to Solid Tumor Immunotherapy",
      institution: "Johns Hopkins",
      phase: "Phase 2",
      relevance: "Similar methodology",
    },
  ];

  const mockFavoriteCollaborators = [
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

  const mockFavoritePublications = [
    {
      id: 1,
      title: "CAR-T Cell Engineering: Next Generation Approaches",
      journal: "Cell",
      date: "2024-03-15",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/researcher/dashboard")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-accent" />
              <div>
                <h1 className="text-2xl font-bold">My Favorites</h1>
                <p className="text-sm text-muted-foreground">Saved items for quick reference</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Tabs defaultValue="trials" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="trials">
              <FileText className="w-4 h-4 mr-2" />
              Trials
            </TabsTrigger>
            <TabsTrigger value="collaborators">
              <Users className="w-4 h-4 mr-2" />
              Collaborators
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
                      <Badge className="bg-primary/10 text-primary">{trial.relevance}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{trial.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{trial.institution}</p>
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

          <TabsContent value="collaborators" className="space-y-4">
            {mockFavoriteCollaborators.map((collab) => (
              <Card key={collab.id} className="p-6 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
                      <Users className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{collab.name}</h3>
                      <p className="text-sm text-muted-foreground">{collab.specialty}</p>
                      <p className="text-sm text-muted-foreground">{collab.institution}</p>
                      <p className="text-xs text-primary mt-1">{collab.sharedInterests} shared interests</p>
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
                      <span className="font-semibold text-primary">{pub.journal}</span>
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
          <h3 className="text-xl font-semibold mb-2">Build Your Research Library</h3>
          <p className="text-muted-foreground mb-6">
            Save trials, collaborators, and publications to easily track relevant research
          </p>
          <Button variant="success" onClick={() => navigate("/researcher/dashboard")}>
            Explore Dashboard
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ResearcherFavorites;
