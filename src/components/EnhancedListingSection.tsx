
import { Container } from "@/components/ui/container";
import RealScoutListings from "./RealScoutListings";

const EnhancedListingSection = () => {
  return (
    <section id="listings" className="py-16 bg-bhhs-cream">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bhhs-navy mb-4">
            Featured Summerlin Listings
          </h2>
          <p className="text-gray-600">
            Explore my carefully curated selection of premier Summerlin properties,
            combining luxury living with the unparalleled Summerlin lifestyle.
          </p>
        </div>
        
        <div className="w-full">
          <RealScoutListings 
            agentEncodedId="QWdlbnQtMjI1MDUw"
            className="mt-8"
          />
        </div>
      </Container>
    </section>
  );
};

export default EnhancedListingSection;
