
import { Link } from "react-router-dom";
import { GovHeader } from "@/components/GovHeader";
import { PrototypeBanner } from "@/components/PrototypeBanner";
import { GovFooter } from "@/components/GovFooter";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LoginPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <GovHeader />
      <PrototypeBanner />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <Link to="/login/email" className="text-blue-700 hover:underline">Back</Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Enter your password</h1>
        
        <div className="max-w-lg">
          <div className="relative mb-6">
            <Input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 border-2 border-gray-800 pr-20"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-700 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          
          <Link to="/login/security-code">
            <ButtonPrimary>Continue</ButtonPrimary>
          </Link>
          
          <div className="mt-4">
            <Link to="#" className="text-blue-700 hover:underline">
              I've forgotten my password
            </Link>
          </div>
        </div>
      </main>
      
      <GovFooter />
    </div>
  );
};

export default LoginPassword;
