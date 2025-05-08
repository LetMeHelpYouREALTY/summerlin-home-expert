
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <section className="py-8 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-bhhs-navy mb-2">
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
        </Container>
      </section>
      <EnhancedListingSection />
      <NeighborhoodSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
