
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexNextSession from "./pages/IndexNextSession";
import IndexPreviousAttendance from "./pages/IndexPreviousAttendance";
import BookAppointment from "./pages/BookAppointment";
import SelectDate from "./pages/BookingFlow/SelectDate";
import SelectTime from "./pages/BookingFlow/SelectTime";
import CheckAnswers from "./pages/BookingFlow/CheckAnswers";
import BookingConfirmation from "./pages/BookingFlow/BookingConfirmation";
import AboutYou from "./pages/AboutYou";
import YourDetails from "./pages/YourDetails";
import ViewAppointment from "./pages/ViewAppointment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutYou />} />
          <Route path="/index" element={<Index />} />
          <Route path="/index-next-session" element={<IndexNextSession />} />
          <Route path="/index-previous-attendance" element={<IndexPreviousAttendance />} />
          <Route path="/your-details" element={<YourDetails />} />
          <Route path="/view-appointment" element={<ViewAppointment />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/book-appointment/select-date" element={<SelectDate />} />
          <Route path="/book-appointment/select-time" element={<SelectTime />} />
          <Route path="/book-appointment/check-answers" element={<CheckAnswers />} />
          <Route path="/book-appointment/confirmation" element={<BookingConfirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
