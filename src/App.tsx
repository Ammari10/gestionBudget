
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Placeholder routes that will be implemented later */}
          <Route path="/contractors" element={<Index />} />
          <Route path="/agencies" element={<Index />} />
          <Route path="/hours" element={<Index />} />
          <Route path="/reports" element={<Index />} />
          <Route path="/budget" element={<Index />} />
          <Route path="/alerts" element={<Index />} />
          <Route path="/calendar" element={<Index />} />
          <Route path="/settings" element={<Index />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
