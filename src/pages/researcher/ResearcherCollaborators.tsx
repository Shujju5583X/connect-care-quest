import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, ArrowLeft, Search, Star, Mail, BookOpen, TrendingUp } from "lucide-react";

const ResearcherCollaborators = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const mockCollaborators = [
    {
      id: 1,
      name: "Dr. Emily Rodriguez",
      specialty: "Immunology",
      institution: "Harvard Medical School",
      location: "Boston, MA",
      publications: 156,
      researchInterests: ["T-Cell Therapy", "Cancer Immunology", "Clinical Trials"],
      sharedInterests: 3,
      connected: false,
    },
    {
      id: 2,
      name: "Dr. James Kim",
      specialty: "Clinical Oncology",
      institution: "MD Anderson Cancer Center",
      location: "Houston, TX",
      publications: 189,
      researchInterests: ["Precision Medicine", "Biomarkers", "Drug Development"],
      sharedInterests: 2,
      connected: false,
    },
    {
      id: 3,
      name: "Dr. Lisa Thompson",
      specialty: "Molecular Biology",
      institution: "Stanford University",
      location: "Stanford, CA",
      publications: 134,
      researchInterests: ["Gene Therapy", "CRISPR", "Translational Research"],
      sharedInterests: 4,
      connected: true,
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
              <Users className="w-8 h-8 text-accent" />
              <div>
                <h1 className="text-2xl font-bold">Find Collaborators</h1>
                <p className="text-sm text-muted-foreground">Connect with researchers worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search */}
        <Card className="p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, specialty, or research interests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </Card>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{mockCollaborators.length}</span> potential collaborators
          </p>
          <Badge variant="secondary">Sorted by Relevance</Badge>
        </div>

        <div className="space-y-6">
          {mockCollaborators.map((collab) => (
            <Card key={collab.id} className="p-6 hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center">
                    <Users className="w-12 h-12 text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{collab.name}</h3>
                      <p className="text-lg text-accent font-semibold mb-2">{collab.specialty}</p>
                    </div>
                    {collab.connected && (
                      <Badge className="bg-health-green">Connected</Badge>
                    )}
                  </div>

                  <div className="space-y-2 mb-4 text-muted-foreground">
                    <p>{collab.institution}</p>
                    <p className="text-sm">{collab.location}</p>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{collab.publications} publications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">{collab.sharedInterests} shared research interests</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Research Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {collab.researchInterests.map((interest, index) => (
                        <Badge key={index} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t">
                    {collab.connected ? (
                      <>
                        <Button variant="success" className="flex-1">
                          <Mail className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                        <Button variant="outline">
                          View Profile
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="medical" className="flex-1">
                          Send Connection Request
                        </Button>
                        <Button variant="outline">
                          View Profile
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Star className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearcherCollaborators;
