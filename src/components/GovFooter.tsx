
import { Link } from "react-router-dom";

export const GovFooter = () => {
  return (
    <footer className="mt-auto bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="#" className="text-blue-700 hover:underline mb-2 inline-block">Clear data</Link>
            <div className="flex items-center mt-2">
              <span className="font-bold mr-2">OGL</span>
              <span className="text-sm">
                All content is available under the <a href="#" className="text-blue-700 hover:underline">Open Government Licence v3.0</a>, except where otherwise stated
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-right">
              <a href="#" className="text-blue-700 hover:underline">© Crown copyright</a>
            </span>
            <img 
              src="/lovable-uploads/79eca123-3c1f-44ba-a9e2-8aa84c4a53d3.png" 
              alt="Crown copyright logo" 
              className="ml-2 h-16"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
