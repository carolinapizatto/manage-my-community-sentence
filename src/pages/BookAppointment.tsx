
import { useState } from "react";
import { ChevronLeft, Search, CalendarDays, Filter, ArrowUpDown } from "lucide-react";
import { format } from "date-fns";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";

const BookAppointment = () => {
  const [postcode, setPostcode] = useState("");
  const [date, setDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [sortBy, setSortBy] = useState("recommended");
  
  // Time of day filters
  const [timeOfDay, setTimeOfDay] = useState<string[]>([]);
  
  // Skills filters
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const skills = [
    { id: "gardening", label: "Gardening" },
    { id: "painting", label: "Painting" },
    { id: "cleaning", label: "Cleaning" },
    { id: "maintenance", label: "Maintenance" },
    { id: "admin", label: "Admin work" },
  ];

  // Days filters
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const days = [
    { id: "monday", label: "Monday" },
    { id: "tuesday", label: "Tuesday" },
    { id: "wednesday", label: "Wednesday" },
    { id: "thursday", label: "Thursday" },
    { id: "friday", label: "Friday" },
    { id: "saturday", label: "Saturday" },
    { id: "sunday", label: "Sunday" },
  ];

  // Accessibility filters
  const [selectedAccess, setSelectedAccess] = useState<string[]>([]);
  const accessibilityOptions = [
    { id: "wheelchair", label: "Wheelchair access" },
    { id: "parking", label: "Accessible parking" },
    { id: "ground", label: "Ground floor only" },
    { id: "bathroom", label: "Accessible bathroom" },
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

            <div className="space-y-4">
              <Label>Date range</Label>
              <div className="flex gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      {date ? format(date, "PPP") : "Start date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      {endDate ? format(endDate, "PPP") : "End date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4" />
                <h3 className="font-semibold">Filter options</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label>Time of day</Label>
                  <div className="flex flex-col gap-2">
                    {["Morning", "Afternoon", "Evening"].map((time) => (
                      <div key={time} className="flex items-center space-x-2">
                        <Checkbox
                          id={time.toLowerCase()}
                          checked={timeOfDay.includes(time.toLowerCase())}
                          onCheckedChange={(checked) => {
                            setTimeOfDay(
                              checked
                                ? [...timeOfDay, time.toLowerCase()]
                                : timeOfDay.filter((t) => t !== time.toLowerCase())
                            );
                          }}
                        />
                        <label
                          htmlFor={time.toLowerCase()}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {time}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Days available</Label>
                  <div className="flex flex-col gap-2">
                    {days.map((day) => (
                      <div key={day.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={day.id}
                          checked={selectedDays.includes(day.id)}
                          onCheckedChange={(checked) => {
                            setSelectedDays(
                              checked
                                ? [...selectedDays, day.id]
                                : selectedDays.filter((d) => d !== day.id)
                            );
                          }}
                        />
                        <label
                          htmlFor={day.id}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {day.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Skills</Label>
                  <div className="flex flex-col gap-2">
                    {skills.map((skill) => (
                      <div key={skill.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill.id}
                          checked={selectedSkills.includes(skill.id)}
                          onCheckedChange={(checked) => {
                            setSelectedSkills(
                              checked
                                ? [...selectedSkills, skill.id]
                                : selectedSkills.filter((s) => s !== skill.id)
                            );
                          }}
                        />
                        <label
                          htmlFor={skill.id}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {skill.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Accessibility needs</Label>
                  <div className="flex flex-col gap-2">
                    {accessibilityOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={selectedAccess.includes(option.id)}
                          onCheckedChange={(checked) => {
                            setSelectedAccess(
                              checked
                                ? [...selectedAccess, option.id]
                                : selectedAccess.filter((a) => a !== option.id)
                            );
                          }}
                        />
                        <label
                          htmlFor={option.id}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-secondary">Available placements</h3>
            <ToggleGroup type="single" value={sortBy} onValueChange={setSortBy}>
              <ToggleGroupItem value="recommended">
                Recommended
              </ToggleGroupItem>
              <ToggleGroupItem value="nearest">
                Nearest
              </ToggleGroupItem>
              <ToggleGroupItem value="soonest">
                Soonest
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
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
