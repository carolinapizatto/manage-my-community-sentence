
import { ChevronLeft, FileText } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const LicenceConditions = () => {
  const standardConditions = [
    "Be of good behaviour and not behave in a way which undermines the purpose of the licence period.",
    "Not commit any offence.",
    "Keep in touch with the supervising officer in accordance with instructions given by the supervising officer.",
    "Receive visits from the supervising officer in accordance with instructions given by the supervising officer.",
    "Reside permanently at an address approved by the supervising officer and obtain the prior permission of the supervising officer for any stay of one or more nights at a different address.",
    "Not undertake work, or a particular type of work, unless it is approved by the supervising officer and notify the supervising officer in advance of any proposal to undertake work or a particular type of work.",
    "Not travel outside the United Kingdom, the Channel Islands or the Isle of Man except with the prior permission of your supervising officer or for the purposes of immigration deportation or removal.",
    "Tell your supervising officer if you use a name which is different from the name or names which appear on your licence.",
    "Tell your supervising officer if you change or add any contact details, including phone number or email."
  ];

  const additionalConditions = [
    {
      title: "Disclosure of information",
      description: "Notify your supervising officer of any intimate relationships."
    },
    {
      title: "Attendance at appointments",
      description: "Attend appointments arranged by your supervising officer. This includes appointments with: employment services, drug treatment providers, alcohol treatment providers."
    },
    {
      title: "Restriction of residency",
      description: "Not to reside (not even to stay for one night) in the same household as any child under the age of 18 without the prior approval of your supervising officer."
    },
    {
      title: "Participation in programme",
      description: "To comply with any instruction given by your supervising officer requiring you to attend a sex offender treatment programme."
    },
    {
      title: "Exclusion requirement",
      description: "Not to enter the area of Moss Side, as defined by your supervising officer, without the prior approval of your supervising officer."
    },
    {
      title: "Non-contact requirement",
      description: "Not to contact or associate with Bob Martin or Bill Hinds without the prior approval of your supervising officer."
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
          <h1 className="text-3xl font-bold text-secondary mb-2">Your conditions</h1>
          <p className="text-muted mb-6">These are the conditions of your community sentence</p>
        </div>

        <div className="bg-gray-100 p-4 border-l-4 border-gray-500 mb-6">
          <div className="flex items-start gap-3">
            <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mt-1">
              <span>!</span>
            </div>
            <div>
              <p className="font-bold mb-2">You must follow these conditions to avoid being recalled to prison.</p>
              <p>Ask your probation worker to explain anything you do not understand.</p>
            </div>
          </div>
        </div>

        <Card className="p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Your conditions expire on:</h3>
          <p className="font-bold text-xl mb-4">27 July 2025</p>
          <p className="font-medium mb-2">You must:</p>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Standard conditions</h3>
                <ol className="space-y-6 list-decimal pl-5">
                  {standardConditions.map((condition, index) => (
                    <li key={index} className="text-sm pb-4 border-b last:border-0">
                      {condition}
                    </li>
                  ))}
                </ol>
              </div>
              <FileText className="h-6 w-6 text-primary shrink-0" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Additional conditions</h3>
                <div className="space-y-6">
                  {additionalConditions.map((condition, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium text-primary mb-1">{condition.title}</h4>
                      <p className="text-sm">{condition.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <FileText className="h-6 w-6 text-primary shrink-0" />
            </div>
          </Card>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
          <h4 className="font-semibold mb-2">Need help understanding your conditions?</h4>
          <p className="text-sm mb-2">Contact your probation practitioner for guidance on any conditions you're unsure about.</p>
          <a href="#" className="text-primary hover:underline text-sm">Contact details</a>
        </div>

        <footer className="space-y-6 mt-12">
          <div className="space-y-2">
            <p className="text-sm">The Supervising Officer is the Community Offender Manager.</p>
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

export default LicenceConditions;
