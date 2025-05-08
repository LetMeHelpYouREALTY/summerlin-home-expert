
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const NeighborhoodSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const listingsElement = document.createElement("realscout-office-listings");
      
      // Set attributes
      listingsElement.setAttribute("agent-encoded-id", "QWdlbnQtMjI1MDUw");
      listingsElement.setAttribute("sort-order", "PRICE_HIGH");
      listingsElement.setAttribute("listing-status", "For Sale");
      listingsElement.setAttribute("property-types", "SFR,MF,LAL");
      listingsElement.setAttribute("price-min", "500000");
      listingsElement.setAttribute("price-max", "700000");
      
      // Clear container and append the element
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(listingsElement);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section id="neighborhoods" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="mb-2 inline-block">
              <div className="px-4 py-1 bg-bhhs-navy/10 rounded-full">
                <span className="text-bhhs-navy font-medium">Property Listings</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-bhhs-navy">
              Summerlin Properties
            </h2>
            <p className="text-gray-600 max-w-md">
              Browse available properties in the Summerlin area priced between $500,000 and $700,000
            </p>
          </div>
          
          <Button variant="outline" className="border-bhhs-navy text-bhhs-navy hover:bg-bhhs-navy/5">
            View All Listings <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div ref={containerRef} className="w-full min-h-[500px]"></div>
      </div>
    </section>
  );
};

export default NeighborhoodSection;
