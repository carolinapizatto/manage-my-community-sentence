
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookAppointment from "./pages/BookAppointment";
import SelectDate from "./pages/BookingFlow/SelectDate";
import SelectTime from "./pages/BookingFlow/SelectTime";
import CheckAnswers from "./pages/BookingFlow/CheckAnswers";
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
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/book-appointment/select-date" element={<SelectDate />} />
          <Route path="/book-appointment/select-time" element={<SelectTime />} />
          <Route path="/book-appointment/check-answers" element={<CheckAnswers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
