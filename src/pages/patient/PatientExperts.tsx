import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, ArrowLeft, Search, Star, Mail, MapPin, BookOpen } from "lucide-react";

const PatientExperts = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const mockExperts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Neuro-Oncology",
      institution: "Mayo Clinic",
      location: "Rochester, MN",
      publications: 127,
      expertise: ["Glioblastoma", "Immunotherapy", "Clinical Trials"],
      bio: "Leading expert in neuro-oncology with over 20 years of experience in brain cancer research and treatment.",
      availableForMeetings: true,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Glioma Research",
      institution: "Stanford Medicine",
      location: "Stanford, CA",
      publications: 94,
      expertise: ["Molecular Biology", "Targeted Therapy", "Pediatric Glioma"],
      bio: "Pioneering researcher focused on molecular mechanisms of glioma and developing targeted therapies.",
      availableForMeetings: true,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Radiation Oncology",
      institution: "MD Anderson Cancer Center",
      location: "Houston, TX",
      publications: 156,
      expertise: ["Radiation Therapy", "Brain Tumors", "Treatment Planning"],
      bio: "Specializes in advanced radiation techniques for brain tumor treatment with focus on quality of life.",
      availableForMeetings: false,
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
              <Users className="w-8 h-8 text-accent" />
              <div>
                <h1 className="text-2xl font-bold">Health Experts</h1>
                <p className="text-sm text-muted-foreground">Connect with leading specialists</p>
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
              placeholder="Search by name, specialty, or expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{mockExperts.length}</span> experts
          </p>
        </div>

        <div className="space-y-6">
          {mockExperts.map((expert) => (
            <Card key={expert.id} className="p-6 hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{expert.name}</h3>
                      <p className="text-lg text-primary font-semibold mb-2">{expert.specialty}</p>
                    </div>
                    {expert.availableForMeetings && (
                      <Badge className="bg-health-green">Available for Meetings</Badge>
                    )}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{expert.institution}, {expert.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{expert.publications} publications</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{expert.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {expert.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4 border-t">
                    <Button variant="medical" className="flex-1">
                      View Full Profile
                    </Button>
                    {expert.availableForMeetings && (
                      <Button variant="success">
                        <Mail className="w-4 h-4 mr-2" />
                        Request Meeting
                      </Button>
                    )}
                    <Button variant="ghost" size="icon">
                      <Star className="w-4 h-4" />
                    </Button>
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

export default PatientExperts;
