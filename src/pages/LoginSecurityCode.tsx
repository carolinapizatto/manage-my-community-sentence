
import { Link } from "react-router-dom";
import { GovHeader } from "@/components/GovHeader";
import { PrototypeBanner } from "@/components/PrototypeBanner";
import { GovFooter } from "@/components/GovFooter";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LoginSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState("");
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <GovHeader />
      <PrototypeBanner />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <Link to="/login/password" className="text-blue-700 hover:underline">Back</Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Check your phone</h1>
        
        <div className="border-l-4 border-gray-500 pl-4 py-2 mb-6 bg-gray-50">
          <p>We have sent a code to your phone number ending with <strong>7137</strong></p>
        </div>
        
        <p className="mb-6">It might take a few minutes to arrive. The code will expire after 15 minutes.</p>
        
        <div className="max-w-lg">
          <div className="mb-6">
            <label className="block mb-2">Enter the 6 digit security code</label>
            <Input 
              type="text" 
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              className="w-full max-w-[320px] h-12 border-2 border-gray-800"
              maxLength={6}
            />
          </div>
          
          <Link to="/">
            <ButtonPrimary>Continue</ButtonPrimary>
          </Link>
          
          <details className="mt-8">
            <summary className="text-blue-700 cursor-pointer flex items-center">
              <span className="mr-2 text-blue-700">▶</span>
              Problems with the code?
            </summary>
            <div className="mt-2 pl-6">
              <p>Information about problems with the code would appear here.</p>
            </div>
          </details>
        </div>
      </main>
      
      <GovFooter />
    </div>
  );
};

export default LoginSecurityCode;
