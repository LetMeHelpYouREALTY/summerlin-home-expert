
import { Button } from "@/components/ui/button";
import NeighborhoodCard from "@/components/NeighborhoodCard";
import { ArrowRight } from "lucide-react";

const NeighborhoodSection = () => {
  const neighborhoods = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1602081871118-be3603b3f0fb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      name: "The Ridges",
      description: "Exclusive, luxury estates with stunning views of the Las Vegas Strip and Red Rock Canyon.",
      priceRange: "$1.5M - $15M+"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      name: "Red Rock Country Club",
      description: "Gated community with golf courses, stunning mountain views, and resort-style amenities.",
      priceRange: "$800K - $5M+"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      name: "Tournament Hills",
      description: "Prestigious neighborhood adjacent to TPC Las Vegas with custom and semi-custom homes.",
      priceRange: "$700K - $2.5M"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      name: "The Trails",
      description: "Family-friendly neighborhood with extensive walking paths, parks, and community centers.",
      priceRange: "$500K - $1.2M"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      name: "The Mesa",
      description: "Modern residential village with contemporary designs and stunning desert landscapes.",
      priceRange: "$450K - $1M"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      name: "The Arbors",
      description: "Established village with mature landscaping, family homes, and excellent schools.",
      priceRange: "$550K - $1.5M"
    }
  ];

  return (
    <section id="neighborhoods" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="mb-2 inline-block">
              <div className="px-4 py-1 bg-bhhs-navy/10 rounded-full">
                <span className="text-bhhs-navy font-medium">Explore Areas</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-bhhs-navy">
              Summerlin Villages
            </h2>
            <p className="text-gray-600 max-w-md">
              Discover the distinctive neighborhoods that make up Las Vegas' premier master-planned community
            </p>
          </div>
          
          <Button variant="outline" className="border-bhhs-navy text-bhhs-navy hover:bg-bhhs-navy/5">
            View Interactive Map <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((neighborhood) => (
            <NeighborhoodCard
              key={neighborhood.id}
              image={neighborhood.image}
              name={neighborhood.name}
              description={neighborhood.description}
              priceRange={neighborhood.priceRange}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodSection;
