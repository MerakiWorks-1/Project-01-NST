import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./pages/NotFound";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Clubs = lazy(() => import("./pages/Clubs"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Academics = lazy(() => import("./pages/Academics"));
const Campus = lazy(() => import("./pages/Campus"));
const Events = lazy(() => import("./pages/Events"));
const Mentors = lazy(() => import("./pages/Mentors"));
const Startups = lazy(() => import("./pages/Startups"));
const Internships = lazy(() => import("./pages/Internships"));
const Support = lazy(() => import("./pages/Support"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/events" element={<Events />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/support" element={<Support />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
