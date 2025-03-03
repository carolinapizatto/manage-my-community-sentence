
import { ChevronLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AppointmentType = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>("2"); // Default to "Unpaid Work" (id: 2)
  
  const appointmentTypes = [
    {
      id: "1",
      title: "Meeting with Probation Officer",
      description: "Schedule a meeting with your probation officer to discuss your progress and any concerns.",
      disabled: true
    },
    {
      id: "2",
      title: "Unpaid Work",
      description: "Book an unpaid work placement session to fulfill your community service requirements.",
      disabled: false
    },
    {
      id: "3",
      title: "Rehabilitation Activity",
      description: "Participate in activities designed to help with rehabilitation and reduce reoffending.",
      disabled: true
    },
    {
      id: "5",
      title: "Interventions",
      description: "Access specialized interventions tailored to your individual needs and circumstances.",
      disabled: true
    },
  ];

  const handleContinue = () => {
    // Navigate to book appointment with the selected type
    navigate("/book-appointment", {
      state: { appointmentTypeId: parseInt(selectedType) }
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <Link to="/appointments" className="text-primary hover:underline text-sm">
            Back to appointments
          </Link>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-secondary mb-2">Select appointment type</h1>
          <p className="text-muted mb-6">Choose the type of appointment you would like to book</p>
        </div>

        <div className="bg-white p-6 border border-gray-200 rounded-md">
          <RadioGroup 
            value={selectedType} 
            onValueChange={setSelectedType}
            className="space-y-6"
          >
            {appointmentTypes.map((type) => (
              <div 
                key={type.id} 
                className={`flex items-start space-x-3 p-4 border rounded-md ${
                  type.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary cursor-pointer'
                }`}
              >
                <RadioGroupItem 
                  value={type.id} 
                  id={`appointment-type-${type.id}`} 
                  disabled={type.disabled}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label 
                    htmlFor={`appointment-type-${type.id}`}
                    className={`text-lg font-medium block mb-1 ${type.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {type.title}
                  </Label>
                  <p className="text-sm text-muted">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </RadioGroup>
          
          <div className="mt-8">
            <Button onClick={handleContinue} disabled={!selectedType}>
              Continue
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentType;
