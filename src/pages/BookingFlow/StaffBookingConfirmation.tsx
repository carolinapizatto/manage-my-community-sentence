
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const StaffBookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { placement, person } = location.state || {};

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-[#00703c] text-white p-6 rounded-lg space-y-4">
            <h1 className="text-2xl font-bold">Booking confirmed</h1>
            <p>Booking reference: #UPW-2024-0123</p>
          </div>

          <Card className="p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Communication sent to attendee</h2>
              <div className="space-y-2">
                <p>The following has been sent to the attendee:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Confirmation email with booking details</li>
                  <li>Confirmation text message</li>
                  <li>Calendar invite</li>
                  <li>QR code for attendance tracking</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p>They will also receive:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Email reminder 24 hours before the placement</li>
                  <li>Text message reminder 24 hours before the placement</li>
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
                  onClick={() => navigate('/staff-book')}
                >
                  Make another booking
                </Button>
              </div>
              <div className="self-end">
                <Button 
                  onClick={() => navigate('/staff-search')}
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

export default StaffBookingConfirmation;
