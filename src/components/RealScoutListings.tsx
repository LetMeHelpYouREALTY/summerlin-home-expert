
import { useEffect, useRef } from "react";

interface RealScoutListingsProps {
  agentEncodedId: string;
  sortOrder?: "PRICE_HIGH" | "PRICE_LOW" | "CREATED_DESC";
  listingStatus?: "For Sale" | "For Rent" | "Sold" | "Pending";
  propertyTypes?: string;
  priceMin?: number | string;
  priceMax?: number | string;
  className?: string;
}

const RealScoutListings = ({
  agentEncodedId,
  sortOrder = "PRICE_HIGH",
  listingStatus = "For Sale",
  propertyTypes = "SFR,MF,TC",
  priceMin = "500000",
  priceMax = "1200000",
  className = ""
}: RealScoutListingsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run this in the browser, not during SSR
    if (typeof window !== "undefined" && containerRef.current) {
      // Create the realscout-office-listings element
      const listingsElement = document.createElement("realscout-office-listings");
      
      // Set attributes
      listingsElement.setAttribute("agent-encoded-id", agentEncodedId);
      listingsElement.setAttribute("sort-order", sortOrder);
      listingsElement.setAttribute("listing-status", listingStatus);
      listingsElement.setAttribute("property-types", propertyTypes);
      listingsElement.setAttribute("price-min", priceMin.toString());
      listingsElement.setAttribute("price-max", priceMax.toString());
      
      // Clear container and append the element
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(listingsElement);
    }
    
    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [agentEncodedId, sortOrder, listingStatus, propertyTypes, priceMin, priceMax]);

  return (
    <div ref={containerRef} className={className}></div>
  );
};

export default RealScoutListings;
