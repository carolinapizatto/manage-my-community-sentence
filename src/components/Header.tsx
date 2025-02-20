
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header>
      <div className="bg-black text-white p-2 text-center text-sm">
        <a href="https://www.gov.uk" className="hover:underline">
          GOV.UK
        </a>
      </div>
      <div className="bg-[#1d70b8] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <div>
              <span className="block text-sm">HMPPS</span>
              <span className="block text-2xl font-bold">Community Payback</span>
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
    </header>
  );
};
