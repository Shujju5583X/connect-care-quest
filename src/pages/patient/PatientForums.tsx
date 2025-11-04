import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ArrowLeft, Send, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PatientForums = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newQuestion, setNewQuestion] = useState("");

  const mockForums = [
    {
      id: 1,
      name: "Brain Cancer Research",
      description: "Discussion about latest brain cancer research and treatments",
      members: 1247,
      questions: 89,
    },
    {
      id: 2,
      name: "Clinical Trials Insights",
      description: "Questions and experiences about participating in clinical trials",
      members: 892,
      questions: 156,
    },
    {
      id: 3,
      name: "Immunotherapy Discussion",
      description: "Share experiences and ask about immunotherapy treatments",
      members: 634,
      questions: 78,
    },
  ];

  const mockRecentQuestions = [
    {
      id: 1,
      forum: "Brain Cancer Research",
      question: "What are the latest immunotherapy options for glioblastoma?",
      author: "Sarah M.",
      time: "2 hours ago",
      replies: 3,
      hasResearcherReply: true,
    },
    {
      id: 2,
      forum: "Clinical Trials Insights",
      question: "How do I find trials that match my specific condition?",
      author: "John D.",
      time: "5 hours ago",
      replies: 5,
      hasResearcherReply: true,
    },
  ];

  const handleSubmit = () => {
    if (!newQuestion.trim()) {
      toast({
        title: "Required",
        description: "Please enter your question",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Question Posted!",
      description: "Researchers will be notified of your question",
    });
    setNewQuestion("");
  };

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
              <MessageSquare className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Community Forums</h1>
                <p className="text-sm text-muted-foreground">Ask questions, get expert answers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Ask Question */}
        <Card className="p-6 mb-8 bg-gradient-primary">
          <div className="text-primary-foreground">
            <h2 className="text-xl font-bold mb-4">Ask a Question</h2>
            <Textarea
              placeholder="What would you like to know? Researchers will be able to answer..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="mb-4 bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60"
              rows={4}
            />
            <Button
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              onClick={handleSubmit}
            >
              <Send className="w-4 h-4 mr-2" />
              Post Question
            </Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Questions */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Recent Questions</h2>
            {mockRecentQuestions.map((question) => (
              <Card key={question.id} className="p-6 hover:shadow-xl transition-all cursor-pointer">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary">{question.forum}</Badge>
                    {question.hasResearcherReply && (
                      <Badge className="bg-health-green">Researcher Replied</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{question.question}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Asked by {question.author}</span>
                    <div className="flex items-center gap-4">
                      <span>{question.time}</span>
                      <span className="font-semibold">{question.replies} replies</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Forum Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Forum Categories</h3>
            <div className="space-y-4">
              {mockForums.map((forum) => (
                <Card key={forum.id} className="p-4 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold mb-1">{forum.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{forum.description}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {forum.members}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {forum.questions}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientForums;
