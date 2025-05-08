
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnhancedListingSection from "@/components/EnhancedListingSection";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
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
