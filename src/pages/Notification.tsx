
import { ArrowRight, XCircle, Info } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Alert } from "@/components/Alert";
import { Badge } from "@/components/ui/badge";

const Notification = () => {
  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Notifications</h2>
          <p className="text-muted mb-6">View and manage your notifications</p>
        </div>

        {/* Notifications section */}
        <div className="space-y-4">
          <Alert 
            variant="error"
            className="border-l-4 border-red-600 bg-red-50"
          >
            <div className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800">Missed appointment</p>
                <p className="mt-1">
                  You failed to attend your scheduled probation appointment on 6 March 2025. You have 48 hours to{" "}
                  <Link to="/appointments" className="text-blue-600 underline">
                    respond to this notice
                  </Link>{" "}
                  and explain why you missed this. If you fail to do that, this might count as a breach of your{" "}
                  <Link to="/conditions" className="text-blue-600 underline">
                    conditions
                  </Link>.
                </p>
              </div>
            </div>
          </Alert>

          <Alert 
            variant="info"
            className="border-l-4 border-blue-600 bg-blue-50"
          >
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-800">Appointment reminder</p>
                <p className="mt-1">
                  You have an appointment booked for 11 March 2025 at 2pm.{" "}
                  <Link to="/view-appointment" className="text-blue-600 underline">
                    View your appointment
                  </Link>{" "}
                  if you need to reschedule it.
                </p>
              </div>
            </div>
          </Alert>
        </div>

        {/* Navigation cards */}
        <div className="space-y-4">
          <Link to="/your-details">
            <Card className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">Your details</h3>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>

          <Link to="/your-progress">
            <Card className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">Your progress</h3>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>

          <Link to="/appointments">
            <Card className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">Past and upcoming appointments</h3>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>

          <Link to="/messages">
            <Card className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">Messages</h3>
                <Badge variant="destructive" className="ml-2">1</Badge>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>

          <Link to="/conditions">
            <Card className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">Your conditions</h3>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Notification;
