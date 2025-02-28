
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
          <p className="text-muted mb-6">View and manage your community sentence</p>
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
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>

          <Link to="/licence-conditions">
            <Card className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary">Your conditions</h3>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          </Link>
        </div>

        <div className="mt-12 space-y-3">
          <Link to="/book-appointment" className="text-sm text-primary hover:underline">
            Find unpaid work near you
          </Link>
          <div className="border-t border-gray-200 pt-3">
            <Link to="/staff-search" className="text-sm text-muted hover:underline">
              Staff-facing flow
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
