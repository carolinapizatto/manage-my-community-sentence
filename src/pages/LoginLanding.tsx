
import { Link } from "react-router-dom";
import { GovHeader } from "@/components/GovHeader";
import { PrototypeBanner } from "@/components/PrototypeBanner";
import { GovFooter } from "@/components/GovFooter";
import { ButtonPrimary } from "@/components/ui/button-primary";

const LoginLanding = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <GovHeader />
      <PrototypeBanner />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Create a GOV.UK One Login or sign in</h1>
        
        <div className="mb-6">
          <p className="font-bold mb-2">You'll need:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>an email address</li>
            <li>a way to get security codes - this can be a mobile phone number or an authenticator app</li>
          </ul>
        </div>
        
        <div className="border-l-4 border-blue-600 pl-4 py-2 mb-8 bg-blue-50">
          <p>You can also <a href="#" className="text-blue-700 hover:underline">use GOV.UK One Login in Welsh (Cymraeg)</a>.</p>
        </div>
        
        <div className="space-y-4">
          <Link to="/login/email">
            <ButtonPrimary>Create a GOV.UK One Login</ButtonPrimary>
          </Link>
          
          <div className="mt-4">
            <Link to="/login/email" className="text-blue-700 hover:underline border-b-2 border-blue-700 pb-1">
              Sign in
            </Link>
          </div>
        </div>
        
        <details className="mt-8">
          <summary className="text-blue-700 cursor-pointer flex items-center">
            <span className="mr-2 text-blue-700">▶</span>
            About GOV.UK One Login
          </summary>
          <div className="mt-2 pl-6">
            <p>Information about GOV.UK One Login would appear here.</p>
          </div>
        </details>
      </main>
      
      <GovFooter />
    </div>
  );
};

export default LoginLanding;
