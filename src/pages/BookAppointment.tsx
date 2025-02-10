import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search, CalendarDays, Filter, Map as MapIcon, ListIcon } from "lucide-react";
import { format, addWeeks } from "date-fns";
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Map from "@/components/Map";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [postcode, setPostcode] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addWeeks(new Date(), 4));
  const [sortBy, setSortBy] = useState("recommended");
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const [timeOfDay, setTimeOfDay] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const skills = [
    { id: "gardening", label: "Gardening" },
    { id: "painting", label: "Painting" },
    { id: "cleaning", label: "Cleaning" },
    { id: "maintenance", label: "Maintenance" },
    { id: "admin", label: "Admin work" },
  ];

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

  const [selectedAccess, setSelectedAccess] = useState<string[]>([]);
  const accessibilityOptions = [
    { id: "wheelchair", label: "Wheelchair access" },
    { id: "parking", label: "Accessible parking" },
    { id: "ground", label: "Ground floor only" },
    { id: "bathroom", label: "Accessible bathroom" },
  ];

  const [placements] = useState([
    {
      id: 1,
      name: "Community Garden Maintenance",
      address: "123 Green Lane, London SE1",
      distance: "0.8 miles",
      nextAvailable: "Tomorrow",
      description: "Help maintain local community gardens, including planting, weeding, and general upkeep.",
      skills: ["gardening", "maintenance"],
      times: ["morning", "afternoon"],
      latitude: 51.5074,
      longitude: -0.1276
    },
    {
      id: 2,
      name: "Local Park Clean-up",
      address: "45 Park Road, London E2",
      distance: "1.2 miles",
      nextAvailable: "Today",
      description: "Join our team in keeping local parks clean and safe for everyone.",
      skills: ["cleaning"],
      times: ["morning"],
      latitude: 51.5174,
      longitude: -0.1376
    },
    {
      id: 3,
      name: "Senior Center Support",
      address: "78 Elder Street, London N1",
      distance: "1.5 miles",
      nextAvailable: "Next Week",
      description: "Assist with administrative tasks and general maintenance at the local senior center.",
      skills: ["admin", "maintenance"],
      times: ["afternoon"],
      latitude: 51.5274,
      longitude: -0.1476
    },
    {
      id: 4,
      name: "Community Center Painting",
      address: "90 Community Road, London W1",
      distance: "2.0 miles",
      nextAvailable: "This Weekend",
      description: "Help refresh our community center with a new coat of paint.",
      skills: ["painting"],
      times: ["morning", "afternoon"],
      latitude: 51.5374,
      longitude: -0.1576
    }
  ]);

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
              <div className="flex gap-4 items-center">
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
                <span>to</span>
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
                <Button variant="link" className="text-primary">
                  Change date range
                </Button>
              </div>
            </div>

            <Separator />

            <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
              <CollapsibleTrigger className="flex items-center gap-2 w-full text-left">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <h3 className="font-semibold">Filter options</h3>
                </div>
                <p className="text-sm text-muted ml-2">
                  {isFiltersOpen ? "Click to hide filters" : "Click to show filters"}
                </p>
                <div className="ml-auto text-sm text-muted">
                  {selectedSkills.length + selectedDays.length + selectedAccess.length + timeOfDay.length} filters applied
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="mt-4 p-4 bg-accent rounded-md mb-4">
                  <p className="text-sm text-muted">
                    Use these filters to narrow down your search. You can select multiple options in each category.
                    Click the filters section above to show or hide these options at any time.
                  </p>
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
              </CollapsibleContent>
            </Collapsible>
          </div>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-secondary">Available placements</h3>
            <div className="flex gap-4">
              <ToggleGroup type="single" value={viewMode} onValueChange={(value: "list" | "map") => setViewMode(value)}>
                <ToggleGroupItem value="list" aria-label="List view">
                  <ListIcon className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="map" aria-label="Map view">
                  <MapIcon className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="single" value={sortBy} onValueChange={setSortBy}>
                <ToggleGroupItem value="recommended">Recommended</ToggleGroupItem>
                <ToggleGroupItem value="nearest">Nearest</ToggleGroupItem>
                <ToggleGroupItem value="soonest">Soonest</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {postcode ? (
            viewMode === "list" ? (
              <div className="space-y-4">
                {placements.map((placement) => (
                  <Card key={placement.id} className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold">{placement.name}</h4>
                        <p className="text-muted">{placement.address}</p>
                        <p className="text-sm">{placement.description}</p>
                        <div className="flex gap-2 text-sm text-muted">
                          <span>{placement.distance}</span>
                          <span>•</span>
                          <span>Next available: {placement.nextAvailable}</span>
                        </div>
                      </div>
                      <Button onClick={() => navigate('/book-appointment/select-date', { state: { placement } })}>
                        View details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-6">
                <Map locations={placements} />
              </Card>
            )
          ) : (
            <Card className="p-6">
              <p className="text-sm text-muted">
                Enter your postcode above to see available work placements in your area.
              </p>
            </Card>
          )}
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
