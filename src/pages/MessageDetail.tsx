
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Paperclip, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const MessageDetail = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [messageText, setMessageText] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  
  // Mock function to handle submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (subject.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a subject",
        variant: "destructive",
      });
      return;
    }
    
    if (messageText.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would send the message to the backend
    console.log("Submitting message:", { subject, messageText, attachment });
    
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
    });
    
    // Navigate back to messages
    navigate("/messages");
  };

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <Link to="/messages" className="text-primary hover:underline text-sm">
            Back to messages
          </Link>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-secondary mb-2">Write new message</h1>
          <p className="text-muted mb-6">Send a message to your probation practitioner</p>
        </div>

        <div className="space-y-6">
          {/* Message form */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Enter a subject for your message"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="attachment">Attach supporting evidence (optional)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="attachment"
                    type="file"
                    onChange={(e) => setAttachment(e.target.files ? e.target.files[0] : null)}
                    className="flex-1"
                  />
                </div>
                {attachment && (
                  <p className="text-sm text-muted flex items-center">
                    <Paperclip className="h-3 w-3 mr-1" />
                    {attachment.name}
                  </p>
                )}
              </div>
              
              <div className="flex justify-end gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => navigate("/messages")}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  <Send className="mr-2 h-4 w-4" />
                  Send message
                </Button>
              </div>
            </form>
          </Card>
        </div>

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

export default MessageDetail;
