import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Header = () => {
  return <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-black">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-secondary text-white">HMPPS Community Payback</h1>
        </div>
        
      </div>
    </header>;
};