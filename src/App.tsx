import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PatientOnboarding from "./pages/patient/PatientOnboarding";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientTrials from "./pages/patient/PatientTrials";
import PatientExperts from "./pages/patient/PatientExperts";
import PatientPublications from "./pages/patient/PatientPublications";
import PatientForums from "./pages/patient/PatientForums";
import PatientFavorites from "./pages/patient/PatientFavorites";
import ResearcherOnboarding from "./pages/researcher/ResearcherOnboarding";
import ResearcherDashboard from "./pages/researcher/ResearcherDashboard";
import ResearcherCollaborators from "./pages/researcher/ResearcherCollaborators";
import ResearcherTrials from "./pages/researcher/ResearcherTrials";
import ResearcherForums from "./pages/researcher/ResearcherForums";
import ResearcherFavorites from "./pages/researcher/ResearcherFavorites";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/patient/onboarding" element={<PatientOnboarding />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/trials" element={<PatientTrials />} />
          <Route path="/patient/experts" element={<PatientExperts />} />
          <Route path="/patient/publications" element={<PatientPublications />} />
          <Route path="/patient/forums" element={<PatientForums />} />
          <Route path="/patient/favorites" element={<PatientFavorites />} />
          <Route path="/researcher/onboarding" element={<ResearcherOnboarding />} />
          <Route path="/researcher/dashboard" element={<ResearcherDashboard />} />
          <Route path="/researcher/collaborators" element={<ResearcherCollaborators />} />
          <Route path="/researcher/trials" element={<ResearcherTrials />} />
          <Route path="/researcher/forums" element={<ResearcherForums />} />
          <Route path="/researcher/favorites" element={<ResearcherFavorites />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
