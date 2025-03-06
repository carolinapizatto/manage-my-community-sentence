
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert } from "@/components/Alert";

const StaffCheckinConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { attendee, placement, checkedInTime } = location.state || {};

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <button 
            onClick={() => navigate('/staff-view-placement', { state: { placement } })} 
            className="text-[#1d70b8] hover:underline text-sm"
          >
            Back to placement
          </button>
        </div>

        <Card className="p-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-secondary">Check-in successful</h2>
              <p className="text-gray-500">
                {attendee?.name || "John Smith"} has been checked in at {checkedInTime || "10:30"}
              </p>
            </div>

            <Alert variant="info" className="text-left my-6">
              <p>
                Don't forget to check {attendee?.name || "John Smith"} out when the work placement is completed.
              </p>
            </Alert>

            <div className="space-y-4 w-full pt-4">
              <Button 
                onClick={() => navigate('/staff-view-placement', { state: { placement } })} 
                className="w-full bg-[#1d70b8] hover:bg-[#1d70b8]/90"
              >
                Return to placement
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/staff-search')} 
                className="w-full"
              >
                Back to search
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default StaffCheckinConfirmation;
