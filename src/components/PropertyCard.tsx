
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Ruler, School } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  village: string;
  school: string;
  featured?: boolean;
}

const PropertyCard = ({
  image,
  price,
  address,
  beds,
  baths,
  sqft,
  village,
  school,
  featured = false,
}: PropertyCardProps) => {
  return (
    <Card className={`property-card overflow-hidden border-0 shadow-lg ${featured ? 'ring-2 ring-bhhs-gold' : ''}`}>
      <div className="relative">
        <img
          src={image}
          alt={address}
          className="w-full h-56 object-cover"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-bhhs-gold text-white">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-5">
        <div className="mb-2">
          <h3 className="text-2xl font-bold text-bhhs-navy">{price}</h3>
          <div className="flex items-start gap-1 text-gray-600 mt-1">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{address}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-3 border-y border-gray-100">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-bhhs-gold" />
            <span className="text-sm">{beds} bd</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-bhhs-gold" />
            <span className="text-sm">{baths} ba</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="h-4 w-4 text-bhhs-gold" />
            <span className="text-sm">{sqft.toLocaleString()} sf</span>
          </div>
        </div>
        
        <div className="mt-3 flex flex-col gap-1">
          <div className="flex items-start gap-1">
            <MapPin className="h-4 w-4 mt-0.5 text-bhhs-navy flex-shrink-0" />
            <p className="text-sm text-gray-700">
              <span className="font-medium">Village:</span> {village}
            </p>
          </div>
          <div className="flex items-start gap-1">
            <School className="h-4 w-4 mt-0.5 text-bhhs-navy flex-shrink-0" />
            <p className="text-sm text-gray-700">
              <span className="font-medium">School:</span> {school}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
