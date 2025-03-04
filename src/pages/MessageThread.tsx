
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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

const MessageThread = () => {
  const { threadId } = useParams();
  const navigate = useNavigate();
  const [replyText, setReplyText] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [showReplyForm, setShowReplyForm] = useState(false);
  
  // Sample messages data for this thread
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      subject: "Appointment reminder",
      content: "You have an appointment scheduled for Tuesday, 15 August at 10:00am at Lambeth Community Payback.",
      date: "2 August 2023",
      read: true,
      sender: "practitioner",
      thread: 1
    },
    {
      id: 4,
      subject: "Appointment reminder",
      content: "Thank you for the reminder. I'll be there on time.",
      date: "3 August 2023",
      read: true,
      sender: "user",
      thread: 1
    },
    {
      id: 2,
      subject: "Message from your probation practitioner",
      content: "Please contact me as soon as possible to discuss your progress.",
      date: "15 July 2023",
      read: false,
      sender: "practitioner",
      thread: 2
    },
    {
      id: 3,
      subject: "Documentation request",
      content: "Please provide documentation for your recent employment. This is required as part of your supervision conditions.",
      date: "10 July 2023",
      read: false,
      sender: "practitioner",
      hasAttachment: false,
      thread: 3
    }
  ]);
  
  const threadMessages = messages.filter(m => m.thread === Number(threadId)).sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  const hasUnreadMessages = threadMessages.some(m => !m.read && m.sender === "practitioner");
  
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
    
    // Create the new message
    const newMessage: Message = {
      id: Math.max(...messages.map(m => m.id)) + 1,
      subject: threadMessages[0].subject, // Keep the original subject without 'Re:'
      content: replyText,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      read: true,
      sender: "user",
      thread: Number(threadId),
      hasAttachment: attachment ? true : false,
      attachmentName: attachment?.name
    };
    
    // Add the new message to the thread
    setMessages(prev => [...prev, newMessage]);
    
    // Reset the form
    setReplyText("");
    setAttachment(null);
    setShowReplyForm(false);
    
    toast({
      title: "Message sent",
      description: "Your reply has been sent successfully.",
    });
    
    // We're not navigating back to messages anymore
  };

  if (threadMessages.length === 0) {
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
          <Card className="p-6">
            <p>Message not found.</p>
          </Card>
        </main>
      </div>
    );
  }

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
          <h1 className="text-3xl font-bold text-secondary mb-2">Message thread</h1>
          <p className="text-muted mb-6">View your conversation with your probation practitioner</p>
        </div>

        <div className="space-y-6">
          {/* Message thread with speech bubbles */}
          <div className="space-y-6">
            {threadMessages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === "practitioner" ? "justify-start" : "justify-end"}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.sender === "practitioner" 
                      ? "bg-[#F1F0FB] text-secondary border-l-4 border-[#1d70b8]" 
                      : "bg-[#E5DEFF] text-secondary border-l-4 border-[#6E59A5]"
                  }`}
                >
                  <div className="mb-2">
                    <span className="font-semibold">
                      {message.sender === "practitioner" ? "Your probation practitioner" : "You"}
                    </span>
                    <span className="text-sm text-muted ml-2">{message.date}</span>
                    {message.sender === "practitioner" && !message.read && (
                      <Badge variant="destructive" className="ml-2">New</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{message.subject}</h3>
                  <p className="mb-3">{message.content}</p>
                  
                  {message.hasAttachment && message.attachmentName && (
                    <div className="flex items-center gap-2 mt-3 p-2 bg-white rounded">
                      <Paperclip className="h-4 w-4" />
                      <span className="text-sm">{message.attachmentName}</span>
                      <Button variant="ghost" size="sm" className="ml-auto">Download</Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Reply button */}
          <div className="flex gap-3">
            {!showReplyForm && (
              <Button 
                onClick={() => setShowReplyForm(true)}
              >
                <Send className="mr-2 h-4 w-4" />
                Reply
              </Button>
            )}
          </div>
          
          {/* Reply form */}
          {showReplyForm && (
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
                    onClick={() => setShowReplyForm(false)}
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
          )}
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

export default MessageThread;
