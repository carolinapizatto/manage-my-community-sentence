
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search, Filter, UserSearch, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StaffSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const placements = [
    {
      id: 1,
      name: "Community Garden Maintenance",
      address: "123 Green Lane, London SE1",
      totalSlots: 15,
      bookedSlots: 8,
      nextSession: "Tomorrow, 9:00 AM",
      expectedAttendance: "85%"
    },
    {
      id: 2,
      name: "Local Park Clean-up",
      address: "45 Park Road, London E2",
      totalSlots: 20,
      bookedSlots: 12,
      nextSession: "Today, 2:00 PM",
      expectedAttendance: "75%"
    },
    {
      id: 3,
      name: "Senior Center Support",
      address: "78 Elder Street, London N1",
      totalSlots: 10,
      bookedSlots: 5,
      nextSession: "Monday, 10:00 AM",
      expectedAttendance: "90%"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <a href="/" className="text-primary hover:underline text-sm">
            Back to dashboard
          </a>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Search placements</h2>
          <p className="text-muted mb-6">
            Search for placements by location, name, or attendee
          </p>
        </div>

        <Card className="p-6">
          <Tabs defaultValue="location" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="location">
                <MapPin className="h-4 w-4 mr-2" />
                Location
              </TabsTrigger>
              <TabsTrigger value="placement">
                <Search className="h-4 w-4 mr-2" />
                Placement
              </TabsTrigger>
              <TabsTrigger value="person">
                <UserSearch className="h-4 w-4 mr-2" />
                Person
              </TabsTrigger>
            </TabsList>

            <TabsContent value="location" className="space-y-4">
              <Label htmlFor="postcode">Enter postcode</Label>
              <div className="flex gap-4">
                <Input
                  id="postcode"
                  placeholder="e.g. SW1A 1AA"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-[200px]"
                />
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="placement" className="space-y-4">
              <Label htmlFor="placement">Search by placement name</Label>
              <div className="flex gap-4">
                <Input
                  id="placement"
                  placeholder="e.g. Community Garden"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-[300px]"
                />
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="person" className="space-y-4">
              <Label htmlFor="person">Search by person's name or ID</Label>
              <div className="flex gap-4">
                <Input
                  id="person"
                  placeholder="Name or ID number"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-[300px]"
                />
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-secondary">Available placements</h3>
          </div>

          <div className="space-y-4">
            {placements.map((placement) => (
              <Card key={placement.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{placement.name}</h4>
                    <p className="text-muted">{placement.address}</p>
                    <div className="flex gap-4 text-sm text-muted">
                      <span>Next session: {placement.nextSession}</span>
                      <span>•</span>
                      <span>{placement.bookedSlots}/{placement.totalSlots} slots booked</span>
                      <span>•</span>
                      <span>Expected attendance: {placement.expectedAttendance}</span>
                    </div>
                  </div>
                  <Button onClick={() => navigate('/staff-view-placement', { state: { placement } })}>
                    View details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffSearch;
