import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ArrowLeft, Plus, TrendingUp } from "lucide-react";

const ResearcherForums = () => {
  const navigate = useNavigate();

  const mockForums = [
    {
      id: 1,
      name: "Brain Cancer Research",
      description: "Discussion about latest brain cancer research and treatments",
      members: 1247,
      questions: 89,
      myReplies: 12,
    },
    {
      id: 2,
      name: "Clinical Trials Insights",
      description: "Questions and experiences about participating in clinical trials",
      members: 892,
      questions: 156,
      myReplies: 8,
    },
    {
      id: 3,
      name: "Immunotherapy Discussion",
      description: "Share experiences and ask about immunotherapy treatments",
      members: 634,
      questions: 78,
      myReplies: 15,
    },
  ];

  const mockQuestions = [
    {
      id: 1,
      forum: "Brain Cancer Research",
      question: "What are the latest immunotherapy options for glioblastoma?",
      author: "Sarah M.",
      time: "2 hours ago",
      replies: 3,
      hasMyReply: false,
      urgent: true,
    },
    {
      id: 2,
      forum: "Clinical Trials Insights",
      question: "How do I find trials that match my specific condition?",
      author: "John D.",
      time: "5 hours ago",
      replies: 5,
      hasMyReply: true,
      urgent: false,
    },
    {
      id: 3,
      forum: "Immunotherapy Discussion",
      question: "What are common side effects of checkpoint inhibitors?",
      author: "Maria L.",
      time: "1 day ago",
      replies: 7,
      hasMyReply: true,
      urgent: false,
    },
    {
      id: 4,
      forum: "Brain Cancer Research",
      question: "CAR-T therapy eligibility criteria?",
      author: "Robert K.",
      time: "1 day ago",
      replies: 2,
      hasMyReply: false,
      urgent: false,
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
                <MessageSquare className="w-8 h-8 text-accent" />
                <div>
                  <h1 className="text-2xl font-bold">Community Forums</h1>
                  <p className="text-sm text-muted-foreground">Answer questions and engage with patients</p>
                </div>
              </div>
            </div>
            <Button variant="success">
              <Plus className="w-4 h-4 mr-2" />
              Create Forum
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">35</p>
                <p className="text-sm text-muted-foreground">Total Replies</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-health-green/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-health-green" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Unanswered</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Questions to Answer */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Recent Questions</h2>
            {mockQuestions.map((question) => (
              <Card key={question.id} className="p-6 hover:shadow-xl transition-all">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{question.forum}</Badge>
                      {question.urgent && (
                        <Badge variant="destructive">Urgent</Badge>
                      )}
                      {question.hasMyReply && (
                        <Badge className="bg-health-green">You Replied</Badge>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{question.question}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Asked by {question.author}</span>
                    <div className="flex items-center gap-4">
                      <span>{question.time}</span>
                      <span className="font-semibold">{question.replies} replies</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-3 border-t">
                    {question.hasMyReply ? (
                      <>
                        <Button variant="outline" className="flex-1">
                          View Thread
                        </Button>
                        <Button variant="ghost">
                          Edit Reply
                        </Button>
                      </>
                    ) : (
                      <Button variant="medical" className="flex-1">
                        Answer Question
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* My Forums */}
          <div>
            <h3 className="text-xl font-bold mb-4">My Forums</h3>
            <div className="space-y-4">
              {mockForums.map((forum) => (
                <Card key={forum.id} className="p-4 hover:shadow-lg transition-all cursor-pointer">
                  <h4 className="font-semibold mb-2">{forum.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{forum.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Members</span>
                      <span className="font-semibold">{forum.members}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Questions</span>
                      <span className="font-semibold">{forum.questions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">My Replies</span>
                      <span className="font-semibold text-primary">{forum.myReplies}</span>
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

export default ResearcherForums;
