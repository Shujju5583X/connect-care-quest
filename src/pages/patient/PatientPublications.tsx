import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft, Search, Star, ExternalLink, Calendar } from "lucide-react";

const PatientPublications = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const mockPublications = [
    {
      id: 1,
      title: "Advances in Glioblastoma Treatment: A 2024 Review",
      journal: "Nature Medicine",
      date: "2024-03-15",
      authors: "Johnson S., Chen M., Rodriguez E.",
      abstract: "This comprehensive review examines recent advances in glioblastoma treatment, including novel immunotherapy approaches and targeted therapies that have shown promising results in clinical trials.",
      keywords: ["Glioblastoma", "Immunotherapy", "Clinical Trials"],
    },
    {
      id: 2,
      title: "Immunotherapy Breakthroughs in Brain Cancer",
      journal: "NEJM",
      date: "2024-02-28",
      authors: "Chen M., Williams A., Davis K.",
      abstract: "Recent breakthroughs in immunotherapy have opened new avenues for treating aggressive brain cancers, with several Phase 2 trials demonstrating significant improvements in patient outcomes.",
      keywords: ["Brain Cancer", "Immunotherapy", "Treatment"],
    },
    {
      id: 3,
      title: "CAR-T Cell Therapy Applications in Neuro-Oncology",
      journal: "The Lancet Oncology",
      date: "2024-01-20",
      authors: "Rodriguez E., Thompson B., Lee S.",
      abstract: "CAR-T cell therapy shows promise in treating various brain tumors. This study reviews current applications and discusses future directions for cellular immunotherapy in neuro-oncology.",
      keywords: ["CAR-T", "Neuro-Oncology", "Cellular Therapy"],
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
              <BookOpen className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Medical Publications</h1>
                <p className="text-sm text-muted-foreground">Latest research relevant to your condition</p>
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
              placeholder="Search publications by keywords, authors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{mockPublications.length}</span> publications
          </p>
        </div>

        <div className="space-y-6">
          {mockPublications.map((pub) => (
            <Card key={pub.id} className="p-6 hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="font-semibold text-primary">{pub.journal}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(pub.date).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{pub.authors}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>

                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="medical" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Full Paper
                  </Button>
                  <Button variant="outline">
                    AI Summary
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Star className="w-4 h-4" />
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

export default PatientPublications;
