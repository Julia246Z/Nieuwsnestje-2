
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroFlow from "./pages/IntroFlow";
import Homepage from "./pages/Homepage";
import Gift from "./pages/Gift";
import Collection from "./pages/Collection";
import AnimalCare from "./pages/AnimalCare";
import Quiz from "./pages/Quiz";
import NewsArticle from "./pages/NewsArticle";
import NewsHome from "./pages/NewsHome";
import NewsIntro from "./pages/NewsIntro";
import Teachers from "./pages/Teachers";
import WeekOverview from "./pages/WeekOverview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroFlow />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/diertje" element={<AnimalCare />} />
          <Route path="/news" element={<NewsHome />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/news-intro" element={<NewsIntro />} />
          <Route path="/docenten" element={<Teachers />} />
          <Route path="/docenten/week/:weekNumber" element={<WeekOverview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
