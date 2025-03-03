
import { ChevronLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const YourDetails = () => {
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
          <h2 className="text-3xl font-bold text-secondary mb-2">Your details</h2>
        </div>

        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold">CG</span>
              </div>
              <div>
                <p className="font-semibold">CAROLINA PIZATTO GIRARDI</p>
                <p className="text-sm text-muted">User ID: P258053P</p>
              </div>
            </div>

            <div className="space-y-6 mt-6">
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Personal information</h3>
                <p className="text-sm text-muted mb-2">To change your personal information, please contact your responsible officer.</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted">Name</p>
                    <p>Carolina Pizatto Girardi</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Requirements</p>
                    <p>Unpaid work - 100 hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Address</p>
                    <p>Flat 7</p>
                    <p>4 Burcher Gale Grove</p>
                    <p>London</p>
                    <p>SE15 6FL</p>
                  </div>
                </div>
              </div>

              <div className="pb-4">
                <h3 className="font-semibold mb-2">Contact details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p>carolinapizatto@gmail.com</p>
                    <Button variant="link" className="text-primary p-0 h-auto">Change</Button>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Phone number</p>
                    <p>07418 028044</p>
                    <Button variant="link" className="text-primary p-0 h-auto">Change</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default YourDetails;
