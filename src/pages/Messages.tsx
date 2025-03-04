
import { ChevronLeft, Mail, MailOpen, Paperclip, Plus } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

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

const Messages = () => {
  const navigate = useNavigate();
  
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
      subject: "Re: Appointment reminder",
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

  const markAsRead = (id: number) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, read: true } : message
    ));
    toast({
      title: "Message marked as read",
      description: "This message has been marked as read.",
    });
  };

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

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-secondary mb-2">Messages</h1>
            <p className="text-muted mb-6">Communicate with your probation practitioner and view important updates about your community sentence</p>
          </div>
          <Button
            onClick={() => navigate("/messages/new")}
            className="bg-primary text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create new message
          </Button>
        </div>

        <div className="space-y-4">
          {sortedThreads.map((thread) => {
            const latestMessage = thread[thread.length - 1];
            const hasUnread = thread.some(m => !m.read && m.sender === "practitioner");
            const threadId = latestMessage.thread || latestMessage.id;
            
            return (
              <Card 
                key={threadId} 
                className="p-6 hover:shadow transition-shadow cursor-pointer"
                onClick={() => navigate(`/messages/thread/${threadId}`)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      {hasUnread ? 
                        <Mail className="h-5 w-5 text-primary shrink-0" /> : 
                        <MailOpen className="h-5 w-5 text-muted shrink-0" />
                      }
                      <h3 className="text-lg font-semibold text-primary">{latestMessage.subject}</h3>
                      {hasUnread && <Badge variant="destructive">New</Badge>}
                    </div>
                    <p className="text-sm text-muted mt-1">{latestMessage.date}</p>
                    <p className="mt-3 mb-4">{latestMessage.content}</p>
                    
                    {thread.some(m => m.hasAttachment) && (
                      <div className="flex items-center gap-2 text-sm text-muted mb-4">
                        <Paperclip className="h-4 w-4" />
                        <span>Has attachment</span>
                      </div>
                    )}
                    
                    <div className="flex gap-3 mt-2">
                      {hasUnread && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(thread.find(m => !m.read)?.id || 0);
                          }}
                        >
                          <MailOpen className="mr-1 h-4 w-4" />
                          Mark as read
                        </Button>
                      )}
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/messages/thread/${threadId}`);
                        }}
                      >
                        View thread
                      </Button>
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
