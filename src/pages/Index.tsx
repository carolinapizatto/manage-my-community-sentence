
import { ArrowRight, Calendar, ChevronLeft, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-12 space-y-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-secondary mb-6">
            Complete your Unpaid Work hours
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Unpaid Work (UPW) is a way to give back to your community while serving your sentence. 
            You'll work on projects that benefit local areas and help make your community a better place.
          </p>
          <div className="space-y-6">
            <Card className="p-6 bg-white">
              <h2 className="text-xl font-semibold mb-4">What to expect:</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Work on meaningful community projects</li>
                <li>• Flexible scheduling to fit around your commitments</li>
                <li>• Support from experienced supervisors</li>
                <li>• Track your progress as you complete your hours</li>
              </ul>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 gap-2">
                Book your first session
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Learn more about UPW
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6">
            <Calendar className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-muted-foreground">
              Book sessions that work around your schedule and commitments.
            </p>
          </Card>
          
          <Card className="p-6">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mb-4">
              <span className="font-bold">0</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
            <p className="text-muted-foreground">
              See how many hours you've completed and what's left to do.
            </p>
          </Card>
          
          <Card className="p-6">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location Support</h3>
            <p className="text-muted-foreground">
              Get help finding your work location and arriving on time.
            </p>
          </Card>
        </div>

        <footer className="space-y-6 mt-12">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-muted" />
              <span className="font-semibold">Helpline: 0300 123 23 23</span>
            </div>
            <a href="#" className="text-primary hover:underline text-sm block">
              Other ways to contact us
            </a>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
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

export default Index;
