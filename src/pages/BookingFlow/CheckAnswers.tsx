
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { format } from "date-fns";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const CheckAnswers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { placement, selectedDate, selectedTime } = location.state || {};

  const handleConfirmBooking = () => {
    // Here you would typically make an API call to save the booking
    toast({
      title: "Booking confirmed",
      description: "Your placement has been successfully booked.",
    });
    navigate("/book-appointment/confirmation", { 
      state: { placement, selectedDate, selectedTime } 
    });
  };

  if (!placement || !selectedDate || !selectedTime) {
    return <div>Missing booking information. Please start again.</div>;
  }

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <button onClick={() => navigate(-1)} className="text-primary hover:underline text-sm">
            Back
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Check your answers</h2>
          <p className="text-muted mb-6">
            Review your booking details before confirming.
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <h3 className="font-semibold">Placement</h3>
                <div className="col-span-2">
                  <p>{placement.name}</p>
                  <p className="text-muted">{placement.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <h3 className="font-semibold">Date</h3>
                <p className="col-span-2">
                  {format(new Date(selectedDate), "EEEE d MMMM yyyy")}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <h3 className="font-semibold">Time</h3>
                <p className="col-span-2">{selectedTime}</p>
              </div>
            </div>

            <Button
              onClick={handleConfirmBooking}
              className="w-full md:w-auto"
            >
              Confirm and book
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default CheckAnswers;
