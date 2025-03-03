
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, AlertTriangle } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import CancelConfirmDialog from "@/components/CancelConfirmDialog";

const CancelAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { appointment } = location.state || {};
  
  const [reason, setReason] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  if (!appointment) {
    return <div>Missing appointment information. Please go back and try again.</div>;
  }

  const handleCancelRequest = () => {
    if (!reason.trim()) {
      toast({
        title: "Please provide a reason",
        description: "You need to provide a reason for cancelling this appointment.",
        variant: "destructive",
      });
      return;
    }
    setIsDialogOpen(true);
  };

  const handleConfirmCancel = () => {
    // Here you would typically make an API call to cancel the booking
    toast({
      title: "Appointment cancelled",
      description: "Your appointment has been successfully cancelled.",
    });
    navigate("/appointments");
  };

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <button onClick={() => navigate(-1)} className="text-primary hover:underline text-sm">
            Back to appointment
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Cancel appointment</h2>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800">
                    You are about to cancel the following appointment:
                  </p>
                  <p className="mt-2">
                    <strong>{appointment.name}</strong><br />
                    {appointment.date} at {appointment.time}<br />
                    {appointment.location}
                  </p>
                </div>
              </div>
            </div>

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
                onClick={handleCancelRequest}
                variant="destructive"
                className="w-full sm:w-auto"
              >
                Request cancellation
              </Button>
            </div>
          </div>
        </Card>
      </main>
      
      <CancelConfirmDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
        onConfirm={handleConfirmCancel}
        appointment={appointment}
        reason={reason}
      />
    </div>
  );
};

export default CancelAppointment;
