
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import LoginLanding from "@/pages/LoginLanding";
import LoginEmail from "@/pages/LoginEmail";
import LoginPassword from "@/pages/LoginPassword";
import LoginSecurityCode from "@/pages/LoginSecurityCode";
import AboutYou from "@/pages/AboutYou";
import BookAppointment from "@/pages/BookAppointment";
import Index from "@/pages/Index";
import IndexNextSession from "@/pages/IndexNextSession";
import IndexPreviousAttendance from "@/pages/IndexPreviousAttendance";
import ViewAppointment from "@/pages/ViewAppointment";
import YourDetails from "@/pages/YourDetails";
import StaffSearch from "@/pages/Staff/StaffSearch";
import StaffBook from "@/pages/Staff/StaffBook";
import StaffCheckAnswers from "@/pages/Staff/StaffCheckAnswers";
import StaffViewPlacement from "@/pages/Staff/StaffViewPlacement";
import NotFound from "@/pages/NotFound";
import SelectDate from "@/pages/BookingFlow/SelectDate";
import SelectTime from "@/pages/BookingFlow/SelectTime";
import CheckAnswers from "@/pages/BookingFlow/CheckAnswers";
import BookingConfirmation from "@/pages/BookingFlow/BookingConfirmation";
import StaffBookingConfirmation from "@/pages/BookingFlow/StaffBookingConfirmation";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginLanding />} />
        <Route path="/login/email" element={<LoginEmail />} />
        <Route path="/login/password" element={<LoginPassword />} />
        <Route path="/login/security-code" element={<LoginSecurityCode />} />
        <Route path="/about-you" element={<AboutYou />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/index" element={<Index />} />
        <Route path="/index/next-session" element={<IndexNextSession />} />
        <Route path="/index/previous-attendance" element={<IndexPreviousAttendance />} />
        <Route path="/view-appointment/:id" element={<ViewAppointment />} />
        <Route path="/your-details" element={<YourDetails />} />
        <Route path="/staff-search" element={<StaffSearch />} />
        <Route path="/staff-book/:id" element={<StaffBook />} />
        <Route path="/staff-check-answers/:id" element={<StaffCheckAnswers />} />
        <Route path="/staff-view-placement/:id" element={<StaffViewPlacement />} />
        <Route path="/book-appointment/select-date" element={<SelectDate />} />
        <Route path="/book-appointment/select-time" element={<SelectTime />} />
        <Route path="/book-appointment/check-answers" element={<CheckAnswers />} />
        <Route path="/book-appointment/confirmation" element={<BookingConfirmation />} />
        <Route path="/staff-booking-confirmation/:id" element={<StaffBookingConfirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
