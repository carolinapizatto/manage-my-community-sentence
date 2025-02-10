
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { placement } = location.state || {};

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-[#00703c] text-white p-6 rounded-lg space-y-4">
            <h1 className="text-2xl font-bold">Booking confirmed</h1>
            <p>We've sent you a confirmation email and text message with your booking details.</p>
            <p>You'll receive a reminder email and text message 24 hours before your placement.</p>
          </div>

          <Card className="p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Your QR code</h2>
              <p className="text-muted">Present this to your placement supervisor when you arrive</p>
              <div className="flex justify-center p-6 border rounded-lg">
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB/0lEQVR4nO2ZQY6jMBBFP1GWXPoIcwSOxhE4CkfoI7FkmdH8ZVsYMJ1MNNJIK0T+eSnbZZtK4eVFRERERERERERERETk/8Kv0Z5fbRvZv7XCP2yHj7XN8IFl+LQZ8FuqYFgCK1C88FyK57PnVry1edxAtVUzbGpggwKHGf7kl4zgkS0MPr6B6rENNqigatwNaP59AzXDJ1Z4b4UNKrgfqxWUMAIPeGEDClqhBAYa8EJmb2zwm38VvLfE4AdSQa4hdHE5qaCJpxaO6zN7UsFQgwu7xr2CGkYI4IGU4NlvLNayBRfWOJt4pAZ/aQtujPEe/MhWQ3Bj9QruLZTgxuqFNY4a3Fi9sMZRgxurF9Y4anBj9cIaRw1urF5Y46jBjdULaxw1uLF6YY2jBjdWL6xx1ODG6oU1jhrcWL2wxlGDG6sX1jhqcGP1whpHDW6sXljjqMGN1QtrHDW4sXphjaMGN1YvrHHU4MbqhTWOGtxYvbDGUYMbqxfWOGpwY/XCGkcNbqxeWOOowY3VC2scNbixemGNowY3Vi+scdTgxuqFNY4a3Fi9sMZRgxurF9Y4anBj9cIaRw1urF5Y46jBjdULaxw1uLF6YY2jBjdWL6xx1ODG6oU1jhrcWL2wxlGDG6sX1jhqcGP1whpHDW6sXljjqMGN1QtrHCIiIiIiIiIiIiIiIiLyR/kHXhom9BfL4MwAAAAASUVORK5CYII="
                  alt="QR Code"
                  className="w-48 h-48"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">What to know before your placement</h2>
              <div className="space-y-2">
                <h3 className="font-medium">What to wear</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comfortable, smart casual clothing</li>
                  <li>Closed-toe shoes</li>
                  <li>No jewelry or loose accessories</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">What to expect</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Arrive 10 minutes before your scheduled time</li>
                  <li>Bring a valid form of ID</li>
                  <li>You'll receive a brief orientation</li>
                  <li>The placement will last approximately 2 hours</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between pt-6 border-t">
              <div className="space-y-4 w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={() => navigate('/book-appointment')}
                  className="w-full sm:w-auto"
                >
                  Edit or cancel booking
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/book-appointment')}
                  className="w-full sm:w-auto"
                >
                  Make a new booking
                </Button>
              </div>
              <Button 
                onClick={() => navigate('/index-next-session')}
                className="gap-2"
              >
                Return to homepage
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmation;
