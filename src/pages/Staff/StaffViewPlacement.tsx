
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, AlertTriangle } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const StaffViewPlacement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { placement } = location.state || {};

  const [attendees] = useState([
    { id: "P258053P", name: "John Smith", hoursRemaining: 45, attendanceRate: "85%" },
    { id: "P258054P", name: "Sarah Johnson", hoursRemaining: 30, attendanceRate: "92%" },
    { id: "P258055P", name: "Michael Brown", hoursRemaining: 60, attendanceRate: "78%" },
    // ... more attendees
  ]);

  const totalSlots = placement?.totalSlots || 20;
  const bookedSlots = attendees.length;
  const expectedTurnout = Math.round((bookedSlots * 0.85)); // 85% expected attendance rate

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <button onClick={() => navigate(-1)} className="text-[#1d70b8] hover:underline text-sm">
            Back to search
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">{placement?.name || "Community Garden Maintenance"}</h2>
          <p className="text-muted">{placement?.date || "Monday 15 April 2024, 09:00 - 16:00"}</p>
          <p className="text-muted">{placement?.address || "123 Green Lane, London SE1"}</p>
        </div>

        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted">Booked slots</h3>
              <p className="text-2xl font-bold">{bookedSlots}/{totalSlots}</p>
              <Progress value={(bookedSlots/totalSlots) * 100} className="bg-secondary [&>div]:bg-[#1d70b8]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted">Slots remaining</h3>
              <p className="text-2xl font-bold">{totalSlots - bookedSlots}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted">Predicted turnout based on attendance history</h3>
              <p className="text-2xl font-bold">{expectedTurnout} people</p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-secondary">Attendee list</h3>
            <Button 
              onClick={() => navigate('/staff-book', { state: { placement } })} 
              className="bg-[#1d70b8] hover:bg-[#1d70b8]/90"
            >
              Add attendee
            </Button>
          </div>

          <Card>
            <div className="rounded-md border">
              <div className="grid grid-cols-6 gap-4 p-4 font-medium border-b">
                <div>User ID</div>
                <div className="col-span-2">Name</div>
                <div>Hours remaining</div>
                <div>Attendance rate</div>
                <div>Actions</div>
              </div>
              <div className="divide-y">
                {attendees.map((attendee) => (
                  <div key={attendee.id} className="grid grid-cols-6 gap-4 p-4 items-center">
                    <div className="text-sm">{attendee.id}</div>
                    <div className="col-span-2">{attendee.name}</div>
                    <div>{attendee.hoursRemaining} hours</div>
                    <div>{attendee.attendanceRate}</div>
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => navigate('/staff-view-pop', { state: { attendee, placement } })} 
                        className="text-[#1d70b8] hover:underline text-sm"
                      >
                        View
                      </button>
                      <button className="text-[#1d70b8] hover:underline text-sm">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {attendees.length === 0 && (
          <Card className="p-6">
            <div className="flex items-center gap-4 text-muted">
              <AlertTriangle className="h-5 w-5" />
              <p>No attendees have been added to this placement yet.</p>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default StaffViewPlacement;
