import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, ArrowLeft, Plus, Users, Calendar, BarChart } from "lucide-react";

const ResearcherTrials = () => {
  const navigate = useNavigate();

  const mockTrials = [
    {
      id: 1,
      title: "CAR-T Cell Therapy for Leukemia",
      phase: "Phase 2",
      status: "Active",
      participants: 45,
      target: 60,
      startDate: "2023-06-15",
      description: "Investigating efficacy of CAR-T cell therapy in patients with relapsed/refractory acute lymphoblastic leukemia.",
      sites: 3,
    },
    {
      id: 2,
      title: "Novel Immunotherapy Combination Study",
      phase: "Phase 1",
      status: "Recruiting",
      participants: 12,
      target: 30,
      startDate: "2024-01-10",
      description: "First-in-human study combining checkpoint inhibitor with novel immune activator in solid tumors.",
      sites: 2,
    },
    {
      id: 3,
      title: "Biomarker-Driven Precision Oncology Trial",
      phase: "Phase 3",
      status: "Active",
      participants: 198,
      target: 250,
      startDate: "2023-03-01",
      description: "Multi-center study using genomic profiling to match patients with targeted therapies.",
      sites: 8,
    },
    {
      id: 4,
      title: "Gene Therapy for Inherited Disorders",
      phase: "Phase 1",
      status: "Completed",
      participants: 24,
      target: 24,
      startDate: "2022-09-20",
      description: "Safety and efficacy study of gene therapy approach for rare genetic disease.",
      sites: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/researcher/dashboard")}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold">Clinical Trials Management</h1>
                  <p className="text-sm text-muted-foreground">Manage your trials and recruitment</p>
                </div>
              </div>
            </div>
            <Button variant="success">
              <Plus className="w-4 h-4 mr-2" />
              Add New Trial
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Total Trials</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-health-green/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-health-green" />
              </div>
              <div>
                <p className="text-2xl font-bold">279</p>
                <p className="text-sm text-muted-foreground">Total Participants</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <BarChart className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Recruiting</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Trials List */}
        <div className="space-y-6">
          {mockTrials.map((trial) => (
            <Card key={trial.id} className="p-6 hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{trial.phase}</Badge>
                      <Badge className={
                        trial.status === "Recruiting" ? "bg-health-green" :
                        trial.status === "Active" ? "bg-primary" :
                        "bg-muted"
                      }>
                        {trial.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{trial.title}</h3>
                    <p className="text-muted-foreground mb-3">{trial.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Participant Enrollment</span>
                      <span className="font-semibold">
                        {trial.participants} / {trial.target}
                      </span>
                    </div>
                    <Progress value={(trial.participants / trial.target) * 100} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Start Date</p>
                      <p className="font-semibold">{new Date(trial.startDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Sites</p>
                      <p className="font-semibold">{trial.sites} centers</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="medical" className="flex-1">
                    Manage Trial
                  </Button>
                  <Button variant="outline">
                    View Analytics
                  </Button>
                  <Button variant="outline">
                    Update Status
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearcherTrials;
