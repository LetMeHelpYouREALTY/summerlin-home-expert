
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PropertyCard from "@/components/PropertyCard";
import { ArrowRight } from "lucide-react";

const ListingSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      price: "$1,295,000",
      address: "11 Canyon Rim Dr, Las Vegas, NV 89135",
      beds: 4,
      baths: 3.5,
      sqft: 3450,
      village: "The Ridges",
      school: "Palo Verde High School",
      featured: true,
      type: "luxury"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1629236714692-e6eb09165a95?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      price: "$875,000",
      address: "2456 Desert Sunrise Dr, Las Vegas, NV 89134",
      beds: 3,
      baths: 2.5,
      sqft: 2580,
      village: "Red Rock Country Club",
      school: "Sig Rogich Middle School",
      featured: false,
      type: "gated"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      price: "$699,000",
      address: "1842 Fountain Springs Dr, Las Vegas, NV 89128",
      beds: 4,
      baths: 3,
      sqft: 2100,
      village: "The Gardens",
      school: "Palo Verde High School",
      featured: false,
      type: "family"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      price: "$1,950,000",
      address: "54 Promontory Ridge Dr, Las Vegas, NV 89135",
      beds: 5,
      baths: 5.5,
      sqft: 4680,
      village: "The Ridges",
      school: "Palo Verde High School",
      featured: true,
      type: "luxury"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      price: "$825,000",
      address: "315 Villa Ridge Dr, Las Vegas, NV 89144",
      beds: 3,
      baths: 2.5,
      sqft: 2340,
      village: "Tournament Hills",
      school: "Sig Rogich Middle School",
      featured: false,
      type: "gated"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1593604572577-1c6c44fa2f9f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      price: "$525,000",
      address: "10245 Outdoor Peak Ave, Las Vegas, NV 89166",
      beds: 3,
      baths: 2,
      sqft: 1856,
      village: "The Mesa",
      school: "Vassiliadis Elementary School",
      featured: false,
      type: "family"
    }
  ];

  const filteredProperties = activeTab === "all" 
    ? properties 
    : properties.filter(property => property.type === activeTab);

  return (
    <section id="listings" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="mb-2 inline-block">
              <div className="px-4 py-1 bg-bhhs-gold/10 rounded-full">
                <span className="text-bhhs-gold font-medium">Current Listings</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-bhhs-navy">
              Summerlin Properties
            </h2>
            <p className="text-gray-600 max-w-md">
              Discover exceptional homes in Las Vegas' premier master-planned community
            </p>
          </div>
          
          <Button variant="outline" className="border-bhhs-navy text-bhhs-navy hover:bg-bhhs-navy/5">
            View All Listings <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="bg-muted/50 w-full justify-start overflow-x-auto max-w-lg">
            <TabsTrigger value="all">All Properties</TabsTrigger>
            <TabsTrigger value="luxury">Luxury Estates</TabsTrigger>
            <TabsTrigger value="gated">Gated Communities</TabsTrigger>
            <TabsTrigger value="family">Family Homes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  price={property.price}
                  address={property.address}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                  village={property.village}
                  school={property.school}
                  featured={property.featured}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="luxury" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  price={property.price}
                  address={property.address}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                  village={property.village}
                  school={property.school}
                  featured={property.featured}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gated" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  price={property.price}
                  address={property.address}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                  village={property.village}
                  school={property.school}
                  featured={property.featured}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="family" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  price={property.price}
                  address={property.address}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                  village={property.village}
                  school={property.school}
                  featured={property.featured}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ListingSection;
