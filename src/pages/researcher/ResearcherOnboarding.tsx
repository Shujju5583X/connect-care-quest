import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Microscope, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResearcherOnboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    researchInterests: "",
    orcid: "",
    researchGate: "",
    availableForMeetings: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.specialty) {
      toast({
        title: "Required Field",
        description: "Please specify your medical specialty",
        variant: "destructive",
      });
      return;
    }

    // Store in localStorage for demo
    localStorage.setItem("researcherProfile", JSON.stringify(formData));
    
    toast({
      title: "Profile Created!",
      description: "Welcome to your research dashboard",
    });
    
    navigate("/researcher/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-8">
          <Microscope className="w-16 h-16 text-accent mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold mb-2 bg-gradient-accent bg-clip-text text-transparent">
            Create Your Research Profile
          </h1>
          <p className="text-muted-foreground text-lg">
            Connect with collaborators and share your expertise
          </p>
        </div>

        <Card className="p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Dr. Jane Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="transition-all focus:shadow-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialty" className="flex items-center gap-2">
                Medical Specialty <span className="text-destructive">*</span>
              </Label>
              <Input
                id="specialty"
                placeholder="E.g., Oncology, Neurology, Cardiology..."
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                className="transition-all focus:shadow-md"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="researchInterests">Research Interests</Label>
              <Textarea
                id="researchInterests"
                placeholder="E.g., Immunotherapy, Clinical AI, Gene Therapy..."
                value={formData.researchInterests}
                onChange={(e) => setFormData({ ...formData, researchInterests: e.target.value })}
                className="min-h-[100px] transition-all focus:shadow-md"
              />
              <p className="text-xs text-muted-foreground">
                Helps match you with relevant clinical trials and collaborators
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Optional: Auto-Import Publications</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="orcid">ORCID iD</Label>
                  <Input
                    id="orcid"
                    placeholder="0000-0000-0000-0000"
                    value={formData.orcid}
                    onChange={(e) => setFormData({ ...formData, orcid: e.target.value })}
                    className="transition-all focus:shadow-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="researchGate">ResearchGate Profile URL</Label>
                  <Input
                    id="researchGate"
                    placeholder="https://www.researchgate.net/profile/..."
                    value={formData.researchGate}
                    onChange={(e) => setFormData({ ...formData, researchGate: e.target.value })}
                    className="transition-all focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4">
              <Checkbox
                id="meetings"
                checked={formData.availableForMeetings}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, availableForMeetings: checked as boolean })
                }
              />
              <Label htmlFor="meetings" className="text-sm font-normal cursor-pointer">
                I'm available for meetings with patients and collaborators
              </Label>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="success" size="lg" className="w-full group">
                Create My Profile
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>
        </Card>

        <div className="mt-8 text-center">
          <Button variant="ghost" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResearcherOnboarding;
