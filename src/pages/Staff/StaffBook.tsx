import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StaffBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { placement } = location.state || {};
  const [searchTerm, setSearchTerm] = useState("");

  const people = [
    { id: "CRN123456", name: "John Smith", dob: "15/03/1985" },
    { id: "CRN789012", name: "Sarah Johnson", dob: "22/07/1990" },
    { id: "CRN345678", name: "Michael Brown", dob: "10/11/1982" },
  ];

  const handlePersonSelect = (person: typeof people[0]) => {
    navigate("/staff-check-answers", {
      state: {
        placement: {
          name: "Community Garden Maintenance",
          address: "123 Green Lane, London SE1",
          totalSlots: 15,
          bookedSlots: 8,
        },
        person,
        selectedDate: "2024-04-15",
        selectedTime: "09:00 - 16:00"
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <button onClick={() => navigate(-1)} className="text-primary hover:underline text-sm">
            Back
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Select person on probation</h2>
          <p className="text-muted mb-6">
            Search by name or CRN to find the person you want to book
          </p>
        </div>

        <Card className="p-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search for a person</Label>
              <div className="flex gap-4">
                <Input
                  id="search"
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-[400px]"
                  placeholder="Enter name or CRN"
                />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </form>
        </Card>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary">Search results</h3>
          <div className="space-y-4">
            {people.map((person) => (
              <Card key={person.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{person.name}</h4>
                    <p className="text-sm text-muted">{person.id}</p>
                    <div className="text-sm text-muted">
                      <span>DOB: {person.dob}</span>
                    </div>
                  </div>
                  <Button onClick={() => handlePersonSelect(person)}>
                    Select person
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

export default StaffBook;
