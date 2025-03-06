
import { useNavigate } from "react-router-dom";
import { User, Users, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PickFlow = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Choose your flow</h2>
          <p className="text-muted mb-6">Select which view you want to access</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow transition-shadow">
            <div className="flex flex-col items-center text-center space-y-4 py-6">
              <User className="h-16 w-16 text-primary" />
              <h3 className="text-xl font-semibold text-primary">Person on Probation</h3>
              <p className="text-muted">
                Access your appointments, progress, messages, and conditions
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="mt-4"
              >
                Access POP flow <ArrowRight className="ml-2" />
              </Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow transition-shadow">
            <div className="flex flex-col items-center text-center space-y-4 py-6">
              <Users className="h-16 w-16 text-primary" />
              <h3 className="text-xl font-semibold text-primary">Staff</h3>
              <p className="text-muted">
                Search and manage placements, book appointments, and view records
              </p>
              <Button 
                onClick={() => navigate('/staff-search')}
                className="mt-4"
              >
                Access staff flow <ArrowRight className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PickFlow;
