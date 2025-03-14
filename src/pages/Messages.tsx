import { ChevronLeft, Paperclip } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  messageType?: "missed-appointment";
}

const Messages = () => {
  const navigate = useNavigate();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 5,
      subject: "Missed appointment",
      content: "You failed to attend your scheduled probation appointment on 10 March 2024. This is a breach of your supervision requirements. Please contact your probation practitioner as soon as possible to discuss this matter.",
      date: "11 March 2024",
      read: false,
      sender: "practitioner",
      messageType: "missed-appointment",
      thread: 4
    },
    {
      id: 2,
      subject: "Message from your probation practitioner",
      content: "Please contact me as soon as possible to discuss your progress.",
      date: "10 March 2024",
      read: false,
      sender: "practitioner",
      thread: 2
    },
    {
      id: 3,
      subject: "Documentation request from your probation practitioner",
      content: "Please provide documentation for your recent employment. This is required as part of your supervision conditions.",
      date: "10 March 2024",
      read: false,
      sender: "practitioner",
      hasAttachment: false,
      thread: 3
    }
  ]);

  const messageThreads = messages.reduce((acc, message) => {
    const threadId = message.thread || message.id;
    if (!acc[threadId]) {
      acc[threadId] = [];
    }
    acc[threadId].push(message);
    return acc;
  }, {} as Record<number, Message[]>);

  const sortedThreads = Object.values(messageThreads).sort((a, b) => {
    const aDate = new Date(a[a.length - 1].date);
    const bDate = new Date(b[b.length - 1].date);
    return bDate.getTime() - aDate.getTime();
  });

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

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-secondary mb-2">Messages</h1>
            <p className="text-muted mb-2">Communicate with your probation practitioner and view important updates about your community sentence</p>
          </div>
          <Button
            onClick={() => navigate("/messages/new")}
            className="bg-primary text-white"
          >
            Create new message
          </Button>
        </div>

        <div className="space-y-4">
          {sortedThreads.map((thread) => {
            const latestMessage = thread[thread.length - 1];
            const hasUnread = thread.some(m => !m.read && m.sender === "practitioner");
            const threadId = latestMessage.thread || latestMessage.id;
            
            const originalSubject = thread[0].subject;
            
            return (
              <Card 
                key={threadId} 
                className="p-6 hover:shadow transition-shadow cursor-pointer"
                onClick={() => navigate(`/messages/thread/${threadId}`)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-[#1d70b8]">{originalSubject}</h3>
                      {hasUnread && <Badge variant="destructive">Unread</Badge>}
                    </div>
                    <p className="text-sm text-muted mt-1">{latestMessage.date}</p>
                    <p className="mt-3 mb-4">
                      {latestMessage.content}
                    </p>
                    
                    {thread.some(m => m.hasAttachment) && (
                      <div className="flex items-center gap-2 text-sm text-muted mb-4">
                        <Paperclip className="h-4 w-4" />
                        <span>Has attachment</span>
                      </div>
                    )}
                    
                    <div className="flex gap-3 mt-2">
                      <Link 
                        to={`/messages/thread/${threadId}`}
                        className="text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View message
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
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

export default Messages;
