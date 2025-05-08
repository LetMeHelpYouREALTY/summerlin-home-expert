
import { useEffect, useRef } from "react";

interface RealScoutAdvancedSearchProps {
  agentEncodedId: string;
  className?: string;
}

const RealScoutAdvancedSearch = ({
  agentEncodedId,
  className = ""
}: RealScoutAdvancedSearchProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run this in the browser, not during SSR
    if (typeof window !== "undefined" && containerRef.current) {
      // Create the realscout-advanced-search element
      const searchElement = document.createElement("realscout-advanced-search");
      
      // Set attributes
      searchElement.setAttribute("agent-encoded-id", agentEncodedId);
      
      // Clear container and append the element
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(searchElement);
    }
    
    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [agentEncodedId]);

  return (
    <div ref={containerRef} className={className}></div>
  );
};

export default RealScoutAdvancedSearch;
