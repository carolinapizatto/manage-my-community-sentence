
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { format } from "date-fns";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SelectTime = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { placement, selectedDate } = location.state || {};

  // Mock available time slots
  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
  ];

  const handleTimeSelection = (time: string) => {
    navigate("/book-appointment/check-answers", {
      state: {
        placement,
        selectedDate,
        selectedTime: time,
      },
    });
  };

  if (!placement || !selectedDate) {
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
          <h2 className="text-3xl font-bold text-secondary mb-2">Choose a time</h2>
          <p className="text-muted mb-6">
            Select an available time slot for {format(new Date(selectedDate), "EEEE d MMMM yyyy")}.
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">{placement.name}</h3>
              <p className="text-muted">{placement.address}</p>
            </div>

            <div className="space-y-4">
              {timeSlots.map((time) => (
                <div
                  key={time}
                  className="flex justify-between items-center p-4 border rounded-md hover:bg-accent"
                >
                  <div>
                    <p className="font-medium">{time}</p>
                  </div>
                  <Button
                    variant="link"
                    onClick={() => handleTimeSelection(time)}
                    className="text-primary hover:underline"
                  >
                    Select
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default SelectTime;
