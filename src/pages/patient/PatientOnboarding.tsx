import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PatientOnboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    condition: "",
    location: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.condition) {
      toast({
        title: "Required Field",
        description: "Please describe your medical condition or symptoms",
        variant: "destructive",
      });
      return;
    }

    // Store in localStorage for demo
    localStorage.setItem("patientProfile", JSON.stringify(formData));
    
    toast({
      title: "Profile Created!",
      description: "Your personalized dashboard is ready",
    });
    
    navigate("/patient/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Let's Get to Know You
          </h1>
          <p className="text-muted-foreground text-lg">
            Help us personalize your experience by sharing a few details
          </p>
        </div>

        <Card className="p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name (Optional)</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="transition-all focus:shadow-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition" className="flex items-center gap-2">
                Medical Condition or Symptoms <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="condition"
                placeholder="E.g., Brain Cancer, Glioma, Type 2 Diabetes..."
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                className="min-h-[100px] transition-all focus:shadow-md"
                required
              />
              <p className="text-xs text-muted-foreground">
                You can use natural language - our AI will understand and match you with relevant information
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location (Optional)
              </Label>
              <Input
                id="location"
                placeholder="City, Country"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="transition-all focus:shadow-md"
              />
              <p className="text-xs text-muted-foreground">
                Helps find nearby health experts and clinical trials
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Any other details that might help us serve you better..."
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="min-h-[80px] transition-all focus:shadow-md"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Create My Dashboard
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

export default PatientOnboarding;
