
import { Link } from "react-router-dom";
import { GovHeader } from "@/components/GovHeader";
import { PrototypeBanner } from "@/components/PrototypeBanner";
import { GovFooter } from "@/components/GovFooter";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LoginEmail = () => {
  const [email, setEmail] = useState("");
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <GovHeader />
      <PrototypeBanner />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <Link to="/login" className="text-blue-700 hover:underline">Back</Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Enter your email address to sign in to your GOV.UK One Login</h1>
        
        <div className="max-w-lg">
          <Input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 border-2 border-gray-800 mb-6"
          />
          
          <Link to="/login/password">
            <ButtonPrimary>Continue</ButtonPrimary>
          </Link>
        </div>
      </main>
      
      <GovFooter />
    </div>
  );
};

export default LoginEmail;
