
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { placement } = location.state || {};

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-[#00703c] text-white p-6 rounded-lg space-y-4">
            <h1 className="text-2xl font-bold">Booking confirmed</h1>
            <p>We've sent you a confirmation email and text message with your booking details.</p>
            <p>You'll receive a reminder email and text message 24 hours before your placement.</p>
          </div>

          <Card className="p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">What to know before your placement</h2>
              <div className="space-y-2">
                <h3 className="font-medium">What to wear</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comfortable, smart casual clothing</li>
                  <li>Closed-toe shoes</li>
                  <li>No jewelry or loose accessories</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">What to expect</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Arrive 10 minutes before your scheduled time</li>
                  <li>Bring a valid form of ID</li>
                  <li>You'll receive a brief orientation</li>
                  <li>The placement will last approximately 2 hours</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between pt-6 border-t gap-4">
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/book-appointment')}
                >
                  Edit or cancel booking
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/book-appointment')}
                >
                  Make a new booking
                </Button>
              </div>
              <div className="self-end">
                <Button 
                  onClick={() => navigate('/index-next-session')}
                  className="gap-2"
                >
                  Return to homepage
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmation;
