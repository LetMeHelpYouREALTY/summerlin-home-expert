
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface NeighborhoodCardProps {
  image: string;
  name: string;
  description: string;
  priceRange: string;
}

const NeighborhoodCard = ({
  image,
  name,
  description,
  priceRange
}: NeighborhoodCardProps) => {
  return (
    <Card className="neighborhood-card overflow-hidden border border-gray-100 shadow-md h-full">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-end">
          <div className="p-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <div className="flex items-center text-white/90 mt-1">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <p className="text-sm">Summerlin, Las Vegas</p>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-bhhs-navy bg-bhhs-navy/5 px-3 py-1 rounded-full">
            {priceRange}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeighborhoodCard;
