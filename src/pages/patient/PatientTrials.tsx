import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ArrowLeft, Search, MapPin, Star, TrendingUp, Calendar } from "lucide-react";

const PatientTrials = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const mockTrials = [
    {
      id: 1,
      title: "Immunotherapy for Advanced Glioblastoma",
      phase: "Phase 3",
      status: "Recruiting",
      location: "Multiple Centers, USA",
      match: 95,
      description: "Study evaluating novel immunotherapy combination for patients with advanced glioblastoma who have failed standard treatment.",
      enrolling: 180,
      startDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Novel Treatment Approach for Brain Cancer",
      phase: "Phase 2",
      status: "Recruiting",
      location: "Johns Hopkins, Baltimore",
      match: 88,
      description: "Investigating new therapeutic approach combining targeted therapy with immunotherapy for brain cancer patients.",
      enrolling: 60,
      startDate: "2024-03-01"
    },
    {
      id: 3,
      title: "CAR-T Cell Therapy for Glioma",
      phase: "Phase 1",
      status: "Recruiting",
      location: "Stanford Medical Center, CA",
      match: 82,
      description: "First-in-human study of CAR-T cell therapy specifically designed for glioma patients.",
      enrolling: 30,
      startDate: "2024-04-01"
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
              <Heart className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Clinical Trials</h1>
                <p className="text-sm text-muted-foreground">Find trials matched to your condition</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search and Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search trials by keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="recruiting">Recruiting</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Phase" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Phases</SelectItem>
                <SelectItem value="1">Phase 1</SelectItem>
                <SelectItem value="2">Phase 2</SelectItem>
                <SelectItem value="3">Phase 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{mockTrials.length}</span> matched trials
          </p>
          <Button variant="outline" size="sm">
            <MapPin className="w-4 h-4 mr-2" />
            Filter by Location
          </Button>
        </div>

        <div className="space-y-6">
          {mockTrials.map((trial) => (
            <Card key={trial.id} className="p-6 hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{trial.phase}</Badge>
                    <Badge className="bg-health-green">{trial.status}</Badge>
                    <div className="ml-auto flex items-center gap-1 text-sm font-semibold text-primary">
                      <TrendingUp className="w-4 h-4" />
                      {trial.match}% Match
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{trial.title}</h3>
                  <p className="text-muted-foreground mb-4">{trial.description}</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{trial.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Started {new Date(trial.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-muted-foreground" />
                      <span>{trial.enrolling} participants</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t">
                <Button variant="medical" className="flex-1">
                  View Full Details
                </Button>
                <Button variant="outline">
                  Contact Investigators
                </Button>
                <Button variant="ghost" size="icon">
                  <Star className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientTrials;
