
import { useState } from "react";
import { ChevronLeft, Search, CalendarDays, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const BookAppointment = () => {
  const [postcode, setPostcode] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedAccess, setSelectedAccess] = useState("");

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
          <h2 className="text-3xl font-bold text-secondary mb-2">Find unpaid work near you</h2>
          <p className="text-muted mb-6">
            Search for available work placements in your area. You can filter based on your skills and requirements.
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="postcode">Enter your postcode</Label>
              <div className="flex gap-4">
                <Input
                  id="postcode"
                  placeholder="e.g. SW1A 1AA"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="max-w-[200px]"
                />
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4" />
                <h3 className="font-semibold">Filter options</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Day of the week</Label>
                  <Select value={selectedDay} onValueChange={setSelectedDay}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monday">Monday</SelectItem>
                      <SelectItem value="tuesday">Tuesday</SelectItem>
                      <SelectItem value="wednesday">Wednesday</SelectItem>
                      <SelectItem value="thursday">Thursday</SelectItem>
                      <SelectItem value="friday">Friday</SelectItem>
                      <SelectItem value="saturday">Saturday</SelectItem>
                      <SelectItem value="sunday">Sunday</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Skills</Label>
                  <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select skills" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gardening">Gardening</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="cleaning">Cleaning</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="admin">Admin work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Accessibility needs</Label>
                  <Select value={selectedAccess} onValueChange={setSelectedAccess}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select requirements" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheelchair">Wheelchair access</SelectItem>
                      <SelectItem value="parking">Accessible parking</SelectItem>
                      <SelectItem value="ground">Ground floor only</SelectItem>
                      <SelectItem value="bathroom">Accessible bathroom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary">Available placements</h3>
          <Card className="p-6">
            <p className="text-sm text-muted">
              Enter your postcode above to see available work placements in your area.
            </p>
          </Card>
        </div>

        <footer className="space-y-6 mt-12">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-4 w-4 text-muted" />
              <span className="text-sm text-muted">
                You can book appointments up to 4 weeks in advance
              </span>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex space-x-4">
              {['Accessibility statement', 'Privacy policy', 'Terms and conditions', 'Cookies'].map((text) => (
                <a key={text} href="#" className="text-primary hover:underline text-sm">
                  {text}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default BookAppointment;
