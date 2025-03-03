
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Paperclip, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Define message type
interface Message {
  id: number;
  subject: string;
  content: string;
  date: string;
  read: boolean;
  sender: "practitioner" | "user";
  hasAttachment?: boolean;
  attachmentName?: string;
  thread?: number;
}

const MessageDetail = () => {
  const { threadId } = useParams();
  const navigate = useNavigate();
  const [replyText, setReplyText] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  
  // Sample messages data for this thread
  const thread: Message[] = [
    {
      id: 2,
      subject: "Message from your probation practitioner",
      content: "Please contact me as soon as possible to discuss your progress.",
      date: "15 July 2023",
      read: true,
      sender: "practitioner",
      thread: 2
    }
  ];

  // Mock function to handle submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (replyText.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would send the message to the backend
    console.log("Submitting reply:", replyText);
    console.log("Attachment:", attachment);
    
    toast({
      title: "Message sent",
      description: "Your reply has been sent successfully.",
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
          <h1 className="text-3xl font-bold text-secondary mb-2">Reply to message</h1>
          <p className="text-muted mb-6">Send a response to your probation practitioner</p>
        </div>

        <div className="space-y-6">
          {/* Original message */}
          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="text-lg font-semibold text-primary mb-2">{thread[0].subject}</h3>
            <p className="text-sm text-muted mb-2">{thread[0].date}</p>
            <p>{thread[0].content}</p>
            
            {thread[0].hasAttachment && thread[0].attachmentName && (
              <div className="flex items-center gap-2 mt-4 p-2 bg-white rounded">
                <Paperclip className="h-4 w-4" />
                <span className="text-sm">{thread[0].attachmentName}</span>
                <Button variant="ghost" size="sm" className="ml-auto">Download</Button>
              </div>
            )}
          </Card>
          
          {/* Reply form */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="reply">Your reply</Label>
                <Textarea
                  id="reply"
                  placeholder="Type your message here..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
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
                  Send reply
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
