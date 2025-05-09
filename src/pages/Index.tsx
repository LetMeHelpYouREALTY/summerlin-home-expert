import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnhancedListingSection from "@/components/EnhancedListingSection";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import TestimonialSection from "@/components/TestimonialSection";
import RealScoutAdvancedSearch from "@/components/RealScoutAdvancedSearch";
import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import { WidgetContainer } from "@/components/WidgetContainer";

const HomeValueWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const homeValueElement = document.createElement("realscout-home-value");
      homeValueElement.setAttribute("agent-encoded-id", "QWdlbnQtMjI1MDUw");
      
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(homeValueElement);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full"></div>;
};

const Index = () => {
  // Add state for tab selection
  const [listingTab, setListingTab] = useState<'active' | 'sold'>("sold");
  const listingStatus = listingTab === "active" ? "For Sale,In Contract" : "Sold";
  return (
    <div className="min-h-screen bg-bhhs-cream">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-6 px-2 md:px-6 xl:px-0">
        {/* Hero Section (spans all columns) */}
        <section className="col-span-1 md:col-span-12 animate-fade-in duration-700">
          <Hero />
        </section>
        {/* My Listings Section (awesome, high-impact spot) */}
        <section id="my-listings" className="col-span-1 md:col-span-12 animate-fade-in duration-700 delay-100 flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#F7F9FC] to-white">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A8DDE] mb-2 text-center drop-shadow-sm">Sold Listings and Active Listings</h2>
          <p className="text-lg text-[#0A2540] mb-8 text-center max-w-2xl">Browse the latest homes available in Summerlin. These listings are updated in real time—see something you love? Reach out today!</p>
          {/* Filter Tabs */}
          <div className="flex gap-4 mb-6 animate-fade-in duration-500">
            <button
              className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16B286] ${listingTab === 'sold' ? 'bg-[#16B286] text-white border-[#16B286]' : 'bg-white text-[#16B286] border-[#16B286] hover:bg-[#16B286]/10'}`}
              onClick={() => setListingTab('sold')}
            >
              Sold
              {/* Placeholder badge */}
              <span className="ml-2 inline-block bg-white/30 text-[#16B286] rounded-full px-2 py-0.5 text-xs align-middle">N</span>
            </button>
            <button
              className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A8DDE] ${listingTab === 'active' ? 'bg-[#3A8DDE] text-white border-[#3A8DDE]' : 'bg-white text-[#3A8DDE] border-[#3A8DDE] hover:bg-[#3A8DDE]/10'}`}
              onClick={() => setListingTab('active')}
            >
              Active
              {/* Placeholder badge */}
              <span className="ml-2 inline-block bg-white/30 text-[#3A8DDE] rounded-full px-2 py-0.5 text-xs align-middle">N</span>
            </button>
          </div>
          <WidgetContainer className="w-full max-w-3xl min-h-[480px] relative z-[1000] bg-white/95 shadow-lg animate-fade-in duration-500">
            <realscout-your-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status={listingStatus} property-types=""></realscout-your-listings>
          </WidgetContainer>
        </section>
        {/* Pain Point Section */}
        <section className="col-span-1 md:col-span-7 md:col-start-4 animate-fade-in duration-700 delay-100">
          <WidgetContainer>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3A8DDE] mb-2 text-center">
              Tired of endless searching and missing out on the best homes?
            </h2>
            <p className="text-gray-600 text-center">
              The Summerlin market moves fast. Without the right tools, you risk losing your dream home to someone else.
            </p>
          </WidgetContainer>
        </section>
        {/* Solution Section */}
        <section className="col-span-1 md:col-span-7 md:col-start-4 animate-fade-in duration-700 delay-200">
          <WidgetContainer>
            <h2 className="text-2xl md:text-3xl font-bold text-[#16B286] mb-2 text-center">
              We Make Home Buying Easy
            </h2>
            <p className="text-gray-600 text-center">
              Our advanced search, instant home value, and local expertise give you the edge in Summerlin.
            </p>
          </WidgetContainer>
        </section>
        {/* Social Proof Section */}
        <section className="col-span-1 md:col-span-7 md:col-start-4 animate-fade-in duration-700 delay-300">
          <WidgetContainer>
            <TestimonialSection />
          </WidgetContainer>
        </section>
        {/* Interactive Tool Section: Advanced Search */}
        <section className="col-span-1 md:col-span-7 md:col-start-4 animate-fade-in duration-700 delay-400">
          <WidgetContainer>
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3A8DDE] mb-2">
                Find Your Dream Home
              </h2>
              <p className="text-gray-600">
                Use our advanced search to find the perfect property in Summerlin
              </p>
            </div>
            <RealScoutAdvancedSearch 
              agentEncodedId="QWdlbnQtMjI1MDUw"
              className="mt-4" 
            />
          </WidgetContainer>
        </section>
        {/* Interactive Tool Section: Home Value Widget */}
        <section className="col-span-1 md:col-span-7 md:col-start-4 animate-fade-in duration-700 delay-500">
          <WidgetContainer>
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#16B286] mb-2">
                What's Your Home Worth?
              </h2>
              <p className="text-gray-600 mb-6">
                Get an instant estimate of your home's current market value
              </p>
              <HomeValueWidget />
            </div>
          </WidgetContainer>
        </section>
        {/* Enhanced Listings Section (full width) */}
        <section className="col-span-1 md:col-span-12 animate-fade-in duration-700 delay-600">
          <EnhancedListingSection />
        </section>
        {/* Neighborhood Section (full width) */}
        <section className="col-span-1 md:col-span-12 animate-fade-in duration-700 delay-700">
          <NeighborhoodSection />
        </section>
        {/* About Section (full width) */}
        <section className="col-span-1 md:col-span-12 animate-fade-in duration-700 delay-800">
          <AboutSection />
        </section>
        {/* Objection Handling Section */}
        <section className="col-span-1 md:col-span-7 md:col-start-4 animate-fade-in duration-700 delay-900">
          <WidgetContainer>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3A8DDE] mb-2 text-center">
              Not sure if now is the right time?
            </h2>
            <ul className="text-gray-600 list-disc list-inside mx-auto max-w-md">
              <li>Get a free, no-obligation consultation</li>
              <li>Access exclusive listings before they hit the market</li>
              <li>Expert guidance every step of the way</li>
            </ul>
          </WidgetContainer>
        </section>
        {/* Clear CTA Section */}
        <section className="col-span-1 md:col-span-7 md:col-start-4 animate-fade-in duration-700 delay-1000">
          <WidgetContainer>
            <ContactSection />
          </WidgetContainer>
        </section>
        {/* Google Maps Section */}
        <section className="col-span-1 md:col-span-12 flex flex-col items-center py-10 bg-white animate-fade-in duration-700 delay-1100">
          <h3 className="text-2xl font-bold text-[#3A8DDE] mb-4">Find Us</h3>
          <div className="w-full max-w-2xl h-72 rounded-lg overflow-hidden shadow-lg mb-4">
            <iframe
              title="Dr. Jan Duffy Office Location"
              src="https://www.google.com/maps?q=8850+W+Sunset+Rd+Suite+200,+Las+Vegas,+NV+89148&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="https://g.co/kgs/QzrV3cB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A8DDE] font-semibold underline hover:text-[#0A2540] transition-colors"
          >
            View on Google Maps
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
