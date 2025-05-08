
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Dr. Duffy's knowledge of Summerlin is unmatched. She knew exactly which village would suit our lifestyle and found us the perfect home within our budget.",
      author: "Michael & Sarah Thompson",
      role: "Buyers in The Ridges",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      quote: "As someone relocating from out of state, Dr. Duffy's expertise about the different Summerlin neighborhoods and schools was invaluable. She made the entire process seamless.",
      author: "Jennifer Wilson",
      role: "Buyer in The Gardens",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 3,
      quote: "When selling our home, Dr. Duffy's strategic pricing approach and marketing expertise resulted in multiple offers within days, significantly above asking price.",
      author: "Robert & Lisa Martinez",
      role: "Sellers in Tournament Hills",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-bhhs-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 inline-block">
            <div className="px-4 py-1 bg-white/10 rounded-full">
              <span className="text-bhhs-gold font-medium">Client Success Stories</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What My Clients Say
          </h2>
          <p className="text-white/80">
            Real experiences from homeowners who've bought and sold in Summerlin with Dr. Jan Duffy
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-white/10 border-0 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <Quote className="h-12 w-12 text-bhhs-gold mb-6" />
                
                <p className="text-xl md:text-2xl mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-bhhs-gold">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-white/70">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
