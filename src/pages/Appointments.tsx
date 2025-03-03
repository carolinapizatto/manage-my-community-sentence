
import { Calendar, ChevronLeft, Info, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      date: "Thursday 27 Feb 2025",
      time: "10:00am - 11:00am",
      title: "Unpaid Work Placement",
      location: "Jobcentre Plus, P.345 Mosley St, Manchester M2 3HZ",
      contact: "Karen Smith",
      description: "Initial meeting with your assigned work coach. The work coach will be able to guide and support you and, where appropriate, help you into work by providing personalised advice using their knowledge of local work opportunities."
    },
    {
      id: 2,
      date: "Thursday 27 Feb 2025",
      time: "2:00pm - 2:30pm",
      title: "Probation appointment",
      location: "National Probation Service, Redfern Building, 30 Hanover Street, Manchester M4 4AH",
      contact: "Julie Myers",
      description: "Regular probation check-in to discuss progress, any issues faced, and upcoming milestones. Make sure to bring any requested documents or updates for the probation officer."
    },
    {
      id: 3,
      date: "Thursday 27 Feb 2025",
      time: "4:00pm - 4:30pm",
      title: "Unpaid Work Placement",
      location: "Ingeus, 20 Lever Street, Manchester M1 1DW",
      contact: "Jack Kennedy",
      description: "Introductory session to help you overcome barriers to financial security, including low incomes, debt, disrupted access to benefits and insufficient income."
    },
    {
      id: 4,
      date: "Friday 28 Feb 2025",
      time: "10:00am - 11:00am",
      title: "Probation appointment",
      location: "National Probation Service, Redfern Building, 30 Hanover Street, Manchester M4 4AH",
      contact: "Julie Myers",
      description: "Follow-up appointment to review progress on previously set goals and discuss any new developments or challenges since the last meeting."
    },
    {
      id: 5,
      date: "Thursday 20 Mar 2025",
      time: "10:00am - 11:00am",
      title: "Probation appointment",
      location: "National Probation Service, Redfern Building, 30 Hanover Street, Manchester M4 4AH",
      contact: "Julie Myers",
      description: "Monthly probation meeting to review progress and discuss the next steps in rehabilitation. Consider if any assistance is needed from the probation team regarding employment or housing."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <Link to="/" className="text-primary hover:underline text-sm">
            Back to homepage
          </Link>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-secondary mb-2">Appointments</h1>
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

        <div className="space-y-6">
          {appointments.map((appointment) => (
            <Card key={appointment.id} className="p-6">
              <div className="space-y-4">
                <div className="bg-gray-100 p-3">
                  <h3 className="font-semibold">{appointment.date}</h3>
                  <p className="text-sm">{appointment.time}</p>
                </div>
                
                <h3 className="text-lg font-semibold">{appointment.title}</h3>
                <p className="text-sm text-muted">{appointment.location}</p>
                
                <div>
                  <p className="font-semibold text-sm">
                    Contact: <span className="font-normal">
                      {appointment.contact} {appointment.contact === "Julie Myers" && (
                        <Link to="/messages" className="text-primary hover:underline ml-1 inline-flex items-center">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          Message
                        </Link>
                      )}
                    </span>
                  </p>
                </div>
                
                <p className="text-sm">{appointment.description}</p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button variant="outline" size="sm" className="text-xs flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    View on map
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    Add to calendar
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs flex items-center">
                    <Info className="h-3 w-3 mr-1" />
                    What to expect (video)
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <footer className="space-y-6 mt-12">
          <Separator />
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              {['Accessibility statement', 'Privacy policy', 'Terms and conditions', 'Cookies'].map((text) => (
                <a key={text} href="#" className="text-primary hover:underline text-sm">
                  {text}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted">© Crown copyright</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Appointments;
