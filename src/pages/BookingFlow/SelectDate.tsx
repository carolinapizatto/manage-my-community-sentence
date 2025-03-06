
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { format } from "date-fns";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SelectDate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const placement = location.state?.placement;

  // Mock available dates for the next 7 days
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const handleDateSelection = (date: Date) => {
    navigate("/book-appointment/select-time", {
      state: {
        placement,
        selectedDate: date,
      },
    });
  };

  if (!placement) {
    return <div>No placement selected. Please go back and select a placement.</div>;
  }

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <button onClick={() => navigate(-1)} className="text-[#1d70b8] hover:underline text-sm">
            Back
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Choose a date</h2>
          <p className="text-muted mb-6">
            Select an available date for your placement.
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">{placement.name}</h3>
              <p className="text-muted">{placement.address}</p>
            </div>

            <div className="space-y-4">
              {availableDates.map((date) => (
                <div
                  key={date.toISOString()}
                  className="flex justify-between items-center p-4 border rounded-md hover:bg-accent"
                >
                  <div>
                    <p className="font-medium">{format(date, "EEEE d MMMM yyyy")}</p>
                  </div>
                  <Button
                    variant="link"
                    onClick={() => handleDateSelection(date)}
                    className="text-[#1d70b8] hover:underline"
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

export default SelectDate;
