
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, AlertTriangle } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Alert } from "@/components/Alert";

const CancelAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { appointment, step = "reason" } = location.state || {};
  
  const [reason, setReason] = useState("");
  
  if (!appointment) {
    return <div>Missing appointment information. Please go back and try again.</div>;
  }

  const handleContinue = () => {
    if (!reason.trim()) {
      toast({
        title: "Please provide a reason",
        description: "You need to provide a reason for cancelling this appointment.",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to confirmation step with the reason
    navigate("/cancel-appointment", { 
      state: { 
        appointment, 
        reason,
        step: "confirm" 
      } 
    });
  };

  const handleConfirmCancel = () => {
    // Here you would typically make an API call to cancel the booking
    navigate("/cancel-appointment", { 
      state: { 
        appointment,
        reason,
        step: "success" 
      } 
    });
  };

  // Render different content based on the step
  const renderStepContent = () => {
    switch (location.state?.step) {
      case "confirm":
        return (
          <Card className="p-6">
            <div className="space-y-6">
              <Alert variant="warning" title="You are about to cancel the following appointment:">
                <p className="mt-2">
                  <strong>{appointment.name}</strong><br />
                  {appointment.date} at {appointment.time}<br />
                  {appointment.location}
                </p>
              </Alert>

              <div className="space-y-4">
                <p>
                  <strong>Your reason for cancelling:</strong>
                </p>
                <p className="bg-muted p-3 rounded">
                  {location.state.reason}
                </p>
                <p>
                  This action cannot be undone. If you still need to attend a session, 
                  you will need to book a new appointment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate("/cancel-appointment", { state: { appointment, step: "reason", reason: location.state.reason } })} 
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Go back
                </Button>
                <Button 
                  onClick={handleConfirmCancel}
                  variant="destructive"
                  className="w-full sm:w-auto"
                >
                  Confirm cancellation
                </Button>
              </div>
            </div>
          </Card>
        );
      
      case "success":
        return (
          <Card className="p-6">
            <div className="space-y-6">
              <Alert variant="success" title="Appointment cancelled">
                <p>Your appointment has been successfully cancelled.</p>
              </Alert>
              
              <div className="mt-6">
                <Button onClick={() => navigate("/appointments")}>
                  Return to appointments
                </Button>
              </div>
            </div>
          </Card>
        );
      
      default: // "reason" step
        return (
          <Card className="p-6">
            <div className="space-y-6">
              <Alert variant="warning">
                <p className="font-medium text-amber-800">
                  You are about to cancel the following appointment:
                </p>
                <p className="mt-2">
                  <strong>{appointment.name}</strong><br />
                  {appointment.date} at {appointment.time}<br />
                  {appointment.location}
                </p>
              </Alert>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cancel-reason">
                    Please provide a reason for cancelling this appointment
                  </Label>
                  <Textarea
                    id="cancel-reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter your reason for cancelling..."
                    rows={5}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate(-1)} 
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Go back
                </Button>
                <Button 
                  onClick={handleContinue}
                  variant="destructive"
                  className="w-full sm:w-auto"
                >
                  Continue
                </Button>
              </div>
            </div>
          </Card>
        );
    }
  };

  const getStepTitle = () => {
    switch (location.state?.step) {
      case "confirm":
        return "Confirm cancellation";
      case "success":
        return "Appointment cancelled";
      default:
        return "Cancel appointment";
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <button 
            onClick={() => {
              if (location.state?.step === "success") {
                navigate("/appointments");
              } else if (location.state?.step === "confirm") {
                navigate("/cancel-appointment", { state: { appointment, step: "reason", reason: location.state.reason } });
              } else {
                navigate(-1);
              }
            }} 
            className="text-primary hover:underline text-sm"
          >
            {location.state?.step === "success" ? "Back to appointments" : "Back"}
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">{getStepTitle()}</h2>
        </div>

        {renderStepContent()}
      </main>
    </div>
  );
};

export default CancelAppointment;
