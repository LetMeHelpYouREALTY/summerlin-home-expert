
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3"
          alt="Summerlin Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="max-w-3xl text-center mx-auto">
          <div className="inline-block mb-6">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full flex items-center">
              <img 
                src="https://www.bhhsnv.com/site/assets/themes/ft-theme-realtor-corporate/content/header/bhhs-logo-horizontal.png" 
                alt="Berkshire Hathaway HomeServices"
                className="h-8"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Dr. Jan Duffy
            <span className="block text-2xl md:text-3xl font-medium mt-2">
              Summerlin's Premier Real Estate Specialist
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Combining doctoral expertise with unparalleled knowledge of Nevada's premier master-planned community
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-bhhs-gold hover:bg-bhhs-darkGold text-white px-6 py-6 text-lg w-full sm:w-auto">
              View My Listings
            </Button>
            <Button variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white text-bhhs-navy border-0 px-6 py-6 text-lg w-full sm:w-auto">
              <Search className="mr-2 h-5 w-5" /> Search Properties
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
