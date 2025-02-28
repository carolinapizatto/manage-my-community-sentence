
import { ChevronLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Messages = () => {
  const messages = [
    {
      id: 1,
      subject: "Appointment reminder",
      content: "You have an appointment scheduled for Tuesday, 15 August at 10:00am at Lambeth Community Payback.",
      date: "2 August 2023",
      read: true
    },
    {
      id: 2,
      subject: "Information about your Community Payback",
      content: "Your community payback order requires you to complete 100 hours of unpaid work. Please make sure you understand all the requirements.",
      date: "28 July 2023",
      read: true
    },
    {
      id: 3,
      subject: "Message from your probation practitioner",
      content: "Please contact me as soon as possible to discuss your progress.",
      date: "15 July 2023",
      read: false
    }
  ];

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
          <h1 className="text-3xl font-bold text-secondary mb-2">Messages</h1>
          <p className="text-muted mb-6">View important information and updates about your community sentence</p>
        </div>

        <div className="space-y-4">
          {messages.map((message) => (
            <Card key={message.id} className="p-6 hover:shadow transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-primary">{message.subject}</h3>
                    {!message.read && <Badge variant="destructive">New</Badge>}
                  </div>
                  <p className="text-sm text-muted mt-1">{message.date}</p>
                  <p className="mt-3">{message.content}</p>
                </div>
                <MessageCircle className="h-5 w-5 text-primary shrink-0" />
              </div>
            </Card>
          ))}
        </div>

        <footer className="space-y-6 mt-12">
          <div className="space-y-2">
            <a href="#" className="text-primary hover:underline text-sm block">
              How to contact us
            </a>
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

export default Messages;
