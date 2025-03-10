
import { CalendarDays, ChevronLeft, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { ProgressCard } from "@/components/ProgressCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const IndexNextSession = () => {
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
          <h2 className="text-3xl font-bold text-secondary mb-2">Your progress</h2>
          <p className="text-muted mb-6">
            Track your community payback progress and manage your appointments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ProgressCard
            total={100}
            completed={0}
            label="Hours completed"
            description="You get credit for every hour of community payback completed."
          />
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-secondary mb-4">Next session</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Community Garden Maintenance</p>
                  <p className="text-sm text-muted mt-1">Friday 15 March 2024, 09:00</p>
                  <p className="text-sm text-muted">123 Garden Street, London SE1 7TH</p>
                </div>
                <Link to="/view-appointment" className="text-primary hover:underline text-sm">
                  View
                </Link>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-secondary">Previous attendance</h3>
            <Link to="/appointments" className="text-primary hover:underline text-sm">
              View all appointments
            </Link>
          </div>
          <p className="text-sm text-muted">
            Your previous attendance will be shown here after your first session.
          </p>
        </Card>

        <footer className="space-y-6 mt-12">
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

export default IndexNextSession;
