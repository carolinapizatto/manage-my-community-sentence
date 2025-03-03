
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, AlertTriangle, Upload } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Alert } from "@/components/Alert";

const CancelAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { appointment, step = "reason" } = location.state || {};
  
  const [reason, setReason] = useState("");
  const [supportingFiles, setSupportingFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  
  if (!appointment) {
    return <div>Missing appointment information. Please go back and try again.</div>;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      setSupportingFiles(prevFiles => [...prevFiles, ...newFiles]);
      setFileNames(prevNames => [...prevNames, ...newFiles.map(file => file.name)]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setSupportingFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    setFileNames(prevNames => prevNames.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    if (!reason.trim()) {
      toast({
        title: "Please provide a reason",
        description: "You need to provide a reason for cancelling this appointment.",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to confirmation step with the reason and files
    navigate("/cancel-appointment", { 
      state: { 
        appointment, 
        reason,
        supportingFiles,
        fileNames,
        step: "confirm" 
      } 
    });
  };

  const handleConfirmCancel = () => {
    // Here you would typically make an API call to cancel the booking
    // and upload the supporting files
    navigate("/cancel-appointment", { 
      state: { 
        appointment,
        reason,
        fileNames,
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
              <h3 className="text-lg font-medium">Check your answers</h3>
              
              <div className="space-y-8">
                <div className="border-b pb-4">
                  <div className="flex justify-between">
                    <dt className="font-medium">Appointment</dt>
                    <dd className="flex justify-end gap-2">
                      <Button 
                        variant="link" 
                        className="p-0 h-auto" 
                        onClick={() => navigate("/view-appointment")}
                      >
                        Change
                      </Button>
                    </dd>
                  </div>
                  <dd className="mt-2">
                    <strong>{appointment.name}</strong><br />
                    {appointment.date} at {appointment.time}<br />
                    {appointment.location}
                  </dd>
                </div>
              
                <div className="border-b pb-4">
                  <div className="flex justify-between">
                    <dt className="font-medium">Reason for cancelling</dt>
                    <dd className="flex justify-end gap-2">
                      <Button 
                        variant="link" 
                        className="p-0 h-auto" 
                        onClick={() => navigate("/cancel-appointment", { state: { appointment, step: "reason", reason: location.state.reason, fileNames: location.state.fileNames } })}
                      >
                        Change
                      </Button>
                    </dd>
                  </div>
                  <dd className="mt-2 bg-muted p-3 rounded whitespace-pre-wrap">
                    {location.state.reason}
                  </dd>
                </div>

                {location.state.fileNames && location.state.fileNames.length > 0 && (
                  <div className="border-b pb-4">
                    <div className="flex justify-between">
                      <dt className="font-medium">Supporting evidence</dt>
                      <dd className="flex justify-end gap-2">
                        <Button 
                          variant="link" 
                          className="p-0 h-auto" 
                          onClick={() => navigate("/cancel-appointment", { state: { appointment, step: "reason", reason: location.state.reason, fileNames: location.state.fileNames } })}
                        >
                          Change
                        </Button>
                      </dd>
                    </div>
                    <dd className="mt-2">
                      <ul className="list-disc pl-5">
                        {location.state.fileNames.map((fileName: string, index: number) => (
                          <li key={index}>{fileName}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}

                <Alert variant="warning">
                  <p>
                    This action cannot be undone. If you still need to attend a session, 
                    you will need to book a new appointment.
                  </p>
                </Alert>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate("/cancel-appointment", { state: { appointment, step: "reason", reason: location.state.reason, fileNames: location.state.fileNames } })} 
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Back
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
              <div>
                <p className="mb-4">
                  You are about to cancel the following appointment:
                </p>
                <p className="font-medium">
                  <strong>{appointment.name}</strong><br />
                  {appointment.date} at {appointment.time}<br />
                  {appointment.location}
                </p>
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

                <div className="space-y-2">
                  <Label htmlFor="supporting-evidence">
                    Upload supporting evidence (optional)
                  </Label>
                  <div className="border-2 border-dashed border-input rounded-md p-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Drag and drop files here or click to upload
                      </p>
                      <Input
                        id="supporting-evidence"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        multiple
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => document.getElementById("supporting-evidence")?.click()}
                      >
                        Select files
                      </Button>
                    </div>
                  </div>
                </div>

                {fileNames.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Uploaded files:</p>
                    <ul className="space-y-2">
                      {fileNames.map((name, index) => (
                        <li key={index} className="flex items-center justify-between bg-muted p-2 rounded-md">
                          <span className="text-sm truncate max-w-[80%]">{name}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveFile(index)}
                          >
                            Remove
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
                navigate("/cancel-appointment", { state: { appointment, step: "reason", reason: location.state.reason, fileNames: location.state.fileNames } });
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
