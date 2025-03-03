import { Calendar, ChevronLeft, Info, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Appointments = () => {
  const [appointments] = useState([{
    id: 1,
    date: "Thursday 27 Feb 2025",
    time: "10:00am - 11:00am",
    title: "Community Garden Maintenance",
    type: "Unpaid Work",
    location: "123 Garden Street, London SE1 7TH",
    contact: "Karen Smith",
    description: "Group session focused on weeding, planting seasonal vegetables, and general garden maintenance. Bring appropriate clothing for outdoor work, tools will be provided. Break times will be scheduled during the session.",
    isPast: false
  }, {
    id: 2,
    date: "Thursday 27 Feb 2025",
    time: "2:00pm - 2:30pm",
    title: "Probation appointment",
    type: "General",
    location: "National Probation Service, Redfern Building, 30 Hanover Street, Manchester M4 4AH",
    contact: "Julie Myers",
    description: "Regular probation check-in to discuss progress, any issues faced, and upcoming milestones. Make sure to bring any requested documents or updates for the probation officer.",
    isPast: false
  }, {
    id: 3,
    date: "Thursday 27 Feb 2025",
    time: "4:00pm - 4:30pm",
    title: "Community Garden Maintenance",
    type: "Unpaid Work",
    location: "123 Garden Street, London SE1 7TH",
    contact: "Jack Kennedy",
    description: "Afternoon session focused on pathway clearing, composting, and preparing garden beds for spring planting. Please wear sturdy footwear and weather-appropriate clothing. All equipment will be provided on site.",
    isPast: false
  }, {
    id: 4,
    date: "Friday 28 Feb 2025",
    time: "10:00am - 11:00am",
    title: "Probation appointment",
    type: "General",
    location: "National Probation Service, Redfern Building, 30 Hanover Street, Manchester M4 4AH",
    contact: "Julie Myers",
    description: "Follow-up appointment to review progress on previously set goals and discuss any new developments or challenges since the last meeting.",
    isPast: false
  }, {
    id: 5,
    date: "Thursday 20 Mar 2025",
    time: "10:00am - 11:00am",
    title: "Probation appointment",
    type: "General",
    location: "National Probation Service, Redfern Building, 30 Hanover Street, Manchester M4 4AH",
    contact: "Julie Myers",
    description: "Monthly probation meeting to review progress and discuss the next steps in rehabilitation. Consider if any assistance is needed from the probation team regarding employment or housing.",
    isPast: false
  }, {
    id: 6,
    date: "Thursday 20 Jan 2025",
    time: "10:00am - 11:00am",
    title: "Community Garden Maintenance",
    type: "Unpaid Work",
    location: "123 Garden Street, London SE1 7TH",
    contact: "Karen Smith",
    description: "Past garden maintenance session.",
    isPast: true
  }, {
    id: 7,
    date: "Thursday 15 Jan 2025",
    time: "2:00pm - 2:30pm",
    title: "Probation appointment",
    type: "General",
    location: "National Probation Service, Redfern Building, 30 Hanover Street, Manchester M4 4AH",
    contact: "Julie Myers",
    description: "Past probation check-in.",
    isPast: true
  }]);
  const upcomingAppointments = appointments.filter(appointment => !appointment.isPast);
  const pastAppointments = appointments.filter(appointment => appointment.isPast);
  const renderAppointmentCard = appointment => <Card key={appointment.id} className="p-6">
      <div className="space-y-4">
        {/* Date and Time Section */}
        <div className="space-y-1">
          <h3 className="font-bold text-xl">{appointment.date}</h3>
          <p className="font-bold text-xl">{appointment.time.split(' - ')[0]}</p>
        </div>
        
        {/* Appointment Type Section */}
        <div className="space-y-1">
          <h4 className="font-semibold text-base">Appointment type</h4>
          <p>{appointment.type}</p>
          <p className="font-medium">{appointment.title}</p>
          <p>{appointment.contact}</p>
        </div>
        
        {/* Location Section */}
        <div className="space-y-1">
          <h4 className="font-semibold text-base">Location</h4>
          <p className="whitespace-pre-line">{appointment.location}</p>
        </div>
        
        {/* Description (if needed) */}
        <p className="text-sm text-muted pt-2">{appointment.description}</p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="outline" size="sm" className="text-xs flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            View on map
          </Button>
          <Button variant="outline" size="sm" className="text-xs flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            Add to calendar
          </Button>
        </div>
      </div>
    </Card>;
  return <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <Link to="/" className="text-primary hover:underline text-sm">
            Back to homepage
          </Link>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-secondary mb-2">Appointments</h1>
          <Link to="/appointment-type">
            <Button className="flex items-center gap-2">
              Book appointment
            </Button>
          </Link>
        </div>

        <div className="bg-gray-100 p-4 border-l-4 border-gray-500 mb-6">
          <div className="flex items-start gap-3">
            <Info className="h-6 w-6 text-black" />
            <div>
              <p className="font-bold mb-2">Attending probation appointments is part of complying with your conditions.</p>
              <p>If you have a problem attending an appointment, you need to tell your probation worker as soon as possible.</p>
            </div>
          </div>
        </div>

        {upcomingAppointments.length > 0 && <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Upcoming appointments</h2>
            <div className="space-y-6">
              {upcomingAppointments.map(renderAppointmentCard)}
            </div>
          </div>}
        
        {pastAppointments.length > 0 && <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-semibold">Past appointments</h2>
            <div className="space-y-6">
              {pastAppointments.map(renderAppointmentCard)}
            </div>
          </div>}

        <footer className="space-y-6 mt-12">
          <Separator />
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              {['Accessibility statement', 'Privacy policy', 'Terms and conditions', 'Cookies'].map(text => <a key={text} href="#" className="text-primary hover:underline text-sm">
                  {text}
                </a>)}
            </div>
            <p className="text-xs text-muted">© Crown copyright</p>
          </div>
        </footer>
      </main>
    </div>;
};
export default Appointments;