
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListingSection from "@/components/ListingSection";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ListingSection />
      <NeighborhoodSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
