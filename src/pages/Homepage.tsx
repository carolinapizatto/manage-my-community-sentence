
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Welcome, Carolina</h2>
          <p className="text-muted mb-6">View and manage your community payback</p>
        </div>

        <div className="space-y-4">
          <Link to="/your-details">
            <Card className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">Your details</h3>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>

          <Link to="/index">
            <Card className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">Your progress</h3>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>

          <Link to="/book-appointment">
            <Card className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">Book an appointment</h3>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-secondary mb-4">Guidance</h3>
          <div className="space-y-4">
            <p className="text-sm text-muted">
              Information about your community payback order and what to expect will be shown here.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Homepage;
