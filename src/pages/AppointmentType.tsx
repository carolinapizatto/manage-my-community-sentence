
import { ChevronLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AppointmentType = () => {
  const navigate = useNavigate();
  
  const appointmentTypes = [
    {
      id: 1,
      title: "Meeting with Probation Officer",
      description: "Schedule a meeting with your probation officer to discuss your progress and any concerns.",
    },
    {
      id: 2,
      title: "Unpaid Work",
      description: "Book an unpaid work placement session to fulfill your community service requirements.",
    },
    {
      id: 3,
      title: "Rehabilitation Activity",
      description: "Participate in activities designed to help with rehabilitation and reduce reoffending.",
    },
    {
      id: 4,
      title: "Behaviour Programmes",
      description: "Attend structured programmes aimed at addressing specific behavioral issues.",
    },
    {
      id: 5,
      title: "Interventions",
      description: "Access specialized interventions tailored to your individual needs and circumstances.",
    },
  ];

  const handleSelectType = (id: number) => {
    // For now, all types navigate to the book appointment flow
    // In a real app, different types might have different flows
    navigate("/book-appointment", {
      state: { appointmentTypeId: id }
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

        <div className="space-y-4">
          {appointmentTypes.map((type) => (
            <Card key={type.id} className="p-6 hover:bg-accent transition-colors cursor-pointer" onClick={() => handleSelectType(type.id)}>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{type.title}</h3>
                <p className="text-sm text-muted">{type.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AppointmentType;
