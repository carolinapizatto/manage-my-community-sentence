import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Header = () => {
  return <header>
      <div className="bg-black text-white p-22 text-left text-sm py-[18px]">
        <a href="https://www.gov.uk" className="Font size 18px px-[20px]">HMMPS Community Payback</a>
      </div>
      <div className="bg-[#1d70b8] text-white">
        <div className="container mx-auto px-0 py-[5px]">
          <div className="flex items-center space-x-2">
            <div>
              
              <span className="block text-2xl font-bold">
            </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="icon" className="md:hidden my-2">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>;
};