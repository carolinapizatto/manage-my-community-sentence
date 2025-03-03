
import { ChevronLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const ViewAppointment = () => {
  const navigate = useNavigate();
  
  const appointment = {
    id: 1,
    name: "Community Garden Maintenance",
    location: "123 Garden Street, London SE1 7TH",
    date: "Friday 15 March 2024",
    time: "09:00"
  };

  const handleCancelBooking = () => {
    navigate("/cancel-appointment", { state: { appointment, step: "reason" } });
  };

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <Link to="/index-next-session" className="text-primary hover:underline text-sm">
            Back to Your progress
          </Link>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">View appointment</h2>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <h3 className="font-semibold">Placement</h3>
                <div className="col-span-2">
                  <p>{appointment.name}</p>
                  <p className="text-muted">{appointment.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <h3 className="font-semibold">Date</h3>
                <p className="col-span-2">{appointment.date}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <h3 className="font-semibold">Time</h3>
                <p className="col-span-2">{appointment.time}</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" className="w-full md:w-auto">
                Edit booking
              </Button>
              <Button 
                variant="outline" 
                className="w-full md:w-auto"
                onClick={handleCancelBooking}
              >
                Cancel booking
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ViewAppointment;
