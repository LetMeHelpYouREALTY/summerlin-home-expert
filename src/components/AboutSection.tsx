
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-bhhs-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-bhhs-gold/10 rounded-lg -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                alt="Dr. Jan Duffy"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-bhhs-navy/10 rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="lg:w-1/2">
            <div className="mb-2 inline-block">
              <div className="px-4 py-1 bg-bhhs-navy/10 rounded-full">
                <span className="text-bhhs-navy font-medium">Professional Background</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bhhs-navy">
              Meet Dr. Jan Duffy
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                With over 15 years of specialized experience in Summerlin real estate and a doctoral background in Urban Development, Dr. Jan Duffy offers an unmatched combination of academic knowledge and practical expertise.
              </p>
              
              <p className="mb-4">
                As a distinguished agent with Berkshire Hathaway HomeServices, Dr. Duffy has consistently ranked among the top 1% of realtors in the Las Vegas Valley, with particular expertise in Summerlin's premium neighborhoods including The Ridges, Red Rock Country Club, and Tournament Hills.
              </p>
              
              <p className="mb-6">
                Her analytical approach to real estate, combined with intimate knowledge of Summerlin's 20+ villages, school zones, and amenities, ensures clients receive the most comprehensive and informed guidance in their real estate decisions.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Button className="bg-bhhs-navy hover:bg-bhhs-navy/90 text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-2">
                <div className="flex -space-x-4">
                  <img 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src="https://randomuser.me/api/portraits/women/12.jpg" 
                    alt="Client"
                  />
                  <img 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Client"
                  />
                  <img 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Client"
                  />
                </div>
                <span className="text-sm text-gray-600">100+ satisfied clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
