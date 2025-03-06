
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, AlertTriangle, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/Alert";

const StaffViewPOP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { attendee, placement } = location.state || {};

  // Mock data for the POP details
  const popDetails = {
    name: attendee?.name || "John Smith",
    cnr: attendee?.id || "P258053P",
    dob: "15/05/1985",
    imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    risks: [
      { type: "Violence", level: "Medium" },
      { type: "Self-harm", level: "Low" }
    ]
  };

  const handleCheckIn = () => {
    navigate('/staff-checkin-confirmation', { 
      state: { 
        attendee, 
        placement,
        checkedInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      } 
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <button 
            onClick={() => navigate(-1)} 
            className="text-[#1d70b8] hover:underline text-sm"
          >
            Back to placement
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Person details</h2>
          <p className="text-muted">
            {placement?.name || "Community Garden Maintenance"} - {placement?.date || "Monday 15 April 2024"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="relative">
                  <img 
                    src={popDetails.imageUrl} 
                    alt={popDetails.name} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" 
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute bottom-0 right-0 bg-green-600 text-white border-2 border-white"
                  >
                    Verified
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{popDetails.name}</h3>
                    <p className="text-gray-500">CNR: {popDetails.cnr}</p>
                    <p className="text-gray-500">DOB: {popDetails.dob}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Attendance rate: {attendee?.attendanceRate || "85%"}</p>
                    <p className="text-gray-500">Hours remaining: {attendee?.hoursRemaining || "45"} hours</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-5 w-5 text-orange-500" />
                  <h3 className="text-lg font-semibold">Risk assessment</h3>
                </div>
                
                {popDetails.risks.length > 0 ? (
                  <div className="space-y-4">
                    {popDetails.risks.map((risk, index) => (
                      <Alert 
                        key={index} 
                        variant={risk.level === "High" ? "error" : risk.level === "Medium" ? "warning" : "info"}
                        title={`${risk.type} - ${risk.level} risk`}
                        className="text-sm"
                      >
                        <p>Take appropriate precautions based on risk level.</p>
                      </Alert>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No specific risks identified.</p>
                )}
              </CardContent>
            </Card>

            <Button 
              onClick={handleCheckIn} 
              className="w-full bg-[#1d70b8] hover:bg-[#1d70b8]/90 py-6"
            >
              Check in {popDetails.name}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffViewPOP;
