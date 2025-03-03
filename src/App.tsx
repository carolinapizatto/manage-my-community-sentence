
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import YourProgress from "./pages/YourProgress";
import IndexNextSession from "./pages/IndexNextSession";
import IndexPreviousAttendance from "./pages/IndexPreviousAttendance";
import BookAppointment from "./pages/BookAppointment";
import SelectDate from "./pages/BookingFlow/SelectDate";
import SelectTime from "./pages/BookingFlow/SelectTime";
import CheckAnswers from "./pages/BookingFlow/CheckAnswers";
import BookingConfirmation from "./pages/BookingFlow/BookingConfirmation";
import YourDetails from "./pages/YourDetails";
import ViewAppointment from "./pages/ViewAppointment";
import Messages from "./pages/Messages";
import MessageDetail from "./pages/MessageDetail";
import LicenceConditions from "./pages/LicenceConditions";
import Appointments from "./pages/Appointments";
import AppointmentType from "./pages/AppointmentType";
import StaffSearch from "./pages/Staff/StaffSearch";
import StaffViewPlacement from "./pages/Staff/StaffViewPlacement";
import StaffBook from "./pages/Staff/StaffBook";
import NotFound from "./pages/NotFound";
import StaffBookingConfirmation from "./pages/BookingFlow/StaffBookingConfirmation";
import StaffCheckAnswers from "./pages/Staff/StaffCheckAnswers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/your-progress" element={<YourProgress />} />
          <Route path="/index" element={<YourProgress />} /> {/* Keeping old route for backward compatibility */}
          <Route path="/index-next-session" element={<IndexNextSession />} />
          <Route path="/index-previous-attendance" element={<IndexPreviousAttendance />} />
          <Route path="/your-details" element={<YourDetails />} />
          <Route path="/view-appointment" element={<ViewAppointment />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:threadId" element={<MessageDetail />} />
          <Route path="/licence-conditions" element={<LicenceConditions />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/book-appointment/select-date" element={<SelectDate />} />
          <Route path="/book-appointment/select-time" element={<SelectTime />} />
          <Route path="/book-appointment/check-answers" element={<CheckAnswers />} />
          <Route path="/book-appointment/confirmation" element={<BookingConfirmation />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointment-type" element={<AppointmentType />} />
          <Route path="/staff-search" element={<StaffSearch />} />
          <Route path="/staff-view-placement" element={<StaffViewPlacement />} />
          <Route path="/staff-book" element={<StaffBook />} />
          <Route path="/staff-check-answers" element={<StaffCheckAnswers />} />
          <Route path="/staff-booking-confirmation" element={<StaffBookingConfirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
